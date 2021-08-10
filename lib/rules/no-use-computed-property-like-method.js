/**
 * @author tyankatsu <https://github.com/tyankatsu0105>
 * See LICENSE file in root directory for full license.
 */
'use strict'

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------
const eslintUtils = require('eslint-utils')
const utils = require('../utils')

/**
 * @typedef {import('eslint').Scope.Scope} Scope
 * @typedef {import('../utils').ComponentObjectPropertyData} ComponentObjectPropertyData
 * @typedef {import('../utils').GroupName} GroupName
 *
 */
// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

/** @type {Set<GroupName>} */
const GROUPS = new Set(['data', 'props', 'computed', 'methods'])

/**
 * Get type of props item.
 * Can't consider array props like: props: {propsA: [String, Number, Function]}
 * @param {ComponentObjectPropertyData} prop
 * @return {string[] | null}
 *
 * @example
 * props: {
 *   propA: String, // => String
 *   propB: {
 *     type: Number // => String
 *   },
 * }
 */
function getComponentPropsTypes(prop) {
  /**
   * Check basic props `props: { basicProps: ... }`
   */
  if (prop.property.value.type === 'Identifier') {
    return [prop.property.value.name]
  }
  /**
   * Check object props `props: { objectProps: {...} }`
   */
  if (prop.property.value.type === 'ObjectExpression') {
    const type = utils.findProperty(prop.property.value, 'type')
    if (type == null) return null

    if (type.value.type === 'Identifier') {
      return [type.value.name]
    }
    if (type.value.type === 'ArrayExpression') {
      const types = []
      for (const element of type.value.elements) {
        if (element == null || element.type !== 'Identifier') {
          return null
        }
        types.push(element.name)
      }
      return types
    }
  }
  return null
}

/**
 * @param {Scope} scope
 * @param {Expression} node
 * @returns {boolean}
 */
function isNotFunctionValue(scope, node) {
  if (
    node.type === 'ObjectExpression' ||
    node.type === 'ArrayExpression' ||
    node.type === 'TemplateLiteral'
  ) {
    return true
  }
  const evaluated = eslintUtils.getStaticValue(node, scope)
  return Boolean(evaluated && typeof evaluated.value !== 'function')
}

/**
 * @typedef {object} FunctionData
 * @property {FunctionExpression | ArrowFunctionExpression} node
 * @property {ReturnExpressionData[]} returns
 */
/**
 * @typedef {object} ReturnExpressionData
 * @property {Expression | null} node
 * @property {Scope} scope
 */
/**
 * @typedef {object} CallMember
 * @property {string} name
 * @property {CallExpression} node
 */
class ComponentStack {
  /**
   * @param {RuleContext} context
   * @param {ComponentStack | null} upper
   */
  constructor(context, upper) {
    this.context = context
    this.upper = upper
    /** @type {Map<string, boolean>} */
    this.notFunctionData = new Map()
    /** @type {Map<string, FunctionData>} */
    this.computedFunctions = new Map()
    /** @type {Map<string, FunctionData>} */
    this.methodFunctions = new Map()

    /** @type {CallMember[]} */
    this.callMembers = []

    /** @type {Map<FunctionExpression | ArrowFunctionExpression, FunctionData>} */
    this.functions = new Map()
  }

  /**
   * Extract component property data
   * @param {ObjectExpression} node
   */
  init(node) {
    const {
      context,
      functions,
      notFunctionData,
      computedFunctions,
      methodFunctions
    } = this
    for (const property of utils.iterateProperties(node, GROUPS)) {
      if (property.type === 'array') {
        continue
      }
      if (property.groupName === 'data') {
        notFunctionData.set(
          property.name,
          isNotFunctionValue(context.getScope(), property.property.value)
        )
      } else if (property.groupName === 'props') {
        const types = getComponentPropsTypes(property)
        notFunctionData.set(
          property.name,
          Boolean(types && !types.includes('Function'))
        )
      } else if (property.groupName === 'computed') {
        let value = property.property.value
        if (value.type === 'ObjectExpression') {
          const getProp = utils.findProperty(value, 'get')
          if (getProp) {
            value = getProp.value
          }
        }
        processFunction(property.name, value, computedFunctions)
      } else if (property.groupName === 'methods') {
        const value = property.property.value
        processFunction(property.name, value, methodFunctions)
        notFunctionData.set(property.name, false)
      }
    }

    /**
     * @param {string} name
     * @param {Expression} value
     * @param {Map<string, FunctionData>} map
     */
    function processFunction(name, value, map) {
      if (value.type === 'FunctionExpression') {
        const data = { node: value, returns: [] }
        map.set(name, data)
        functions.set(value, data)
      } else if (value.type === 'ArrowFunctionExpression') {
        if (value.expression) {
          const data = {
            node: value,
            returns: [
              {
                node: value.body,
                scope: context.getScope()
              }
            ]
          }
          map.set(name, data)
        } else {
          const data = { node: value, returns: [] }
          map.set(name, data)
          functions.set(value, data)
        }
      }
    }
  }

  /**
   * Checks whether the given property name is a not function.
   * @param {string} name
   */
  isNotFunctionProperty(name) {
    const { notFunctionData, computedFunctions, methodFunctions } = this
    return isNotFunctionProperty(name, new Set())

    /**
     * @param {string} name
     * @param {Set<string>} set
     */
    function isNotFunctionProperty(name, set) {
      if (set.has(name)) {
        return false
      }
      set.add(name)
      const isFn = notFunctionData.get(name)
      if (isFn != null) {
        return isFn
      }
      const data = computedFunctions.get(name)
      if (!data) {
        return false
      }
      const ret = isNotFunctionReturn(data, set)
      notFunctionData.set(name, ret)
      return ret
    }
    /**
     * @param {FunctionData} data
     * @param {Set<string>} set
     */
    function isNotFunctionReturn(data, set) {
      for (const { node, scope } of data.returns) {
        if (node == null) {
          continue
        }
        if (
          node.type === 'MemberExpression' &&
          node.object.type === 'ThisExpression' &&
          !node.computed &&
          node.property.type === 'Identifier'
        ) {
          if (!isNotFunctionProperty(node.property.name, set)) {
            return false
          }
        } else if (
          node.type === 'CallExpression' &&
          node.callee.type === 'MemberExpression' &&
          node.callee.object.type === 'ThisExpression' &&
          !node.callee.computed &&
          node.callee.property.type === 'Identifier'
        ) {
          const methodName = node.callee.property.name
          if (set.has(methodName)) {
            return false
          }
          set.add(methodName)
          const fnData = methodFunctions.get(methodName)
          if (!fnData) {
            return false
          }
          if (!isNotFunctionReturn(fnData, set)) {
            return false
          }
        } else {
          if (!isNotFunctionValue(scope, node)) {
            return false
          }
        }
      }
      return true
    }
  }

  /**
   * @param {ESNode} node
   */
  getFunctionData(node) {
    if (
      node.type === 'FunctionExpression' ||
      node.type === 'ArrowFunctionExpression'
    ) {
      return this.functions.get(node)
    }
    return null
  }
}

module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'disallow use computed property like method',
      categories: undefined,
      url: 'https://eslint.vuejs.org/rules/no-use-computed-property-like-method.html'
    },
    fixable: null,
    schema: [],
    messages: {
      unexpected: 'Use {{ likeProperty }} instead of {{ likeMethod }}.'
    }
  },
  /** @param {RuleContext} context */
  create(context) {
    /**
     * @typedef {object} ScopeStack
     * @property {ScopeStack | null} upper
     * @property {FunctionDeclaration | FunctionExpression | ArrowFunctionExpression} scopeNode
     */
    /** @type {ScopeStack | null} */
    let scopeStack = null

    /** @type {ComponentStack | null} */
    let componentStack = null

    /** @param {ComponentStack} component */
    function verifyComponent(component) {
      for (const callMember of component.callMembers) {
        if (!component.computedFunctions.has(callMember.name)) {
          // It is not computed, or unknown computed.
          continue
        }
        if (component.isNotFunctionProperty(callMember.name)) {
          context.report({
            node: callMember.node,
            messageId: 'unexpected',
            data: {
              likeProperty: `this.${callMember.name}`,
              likeMethod: `this.${callMember.name}()`
            }
          })
        }
      }
    }

    return utils.defineVueVisitor(context, {
      onVueObjectEnter(node) {
        componentStack = new ComponentStack(context, componentStack)
        componentStack.init(node)
      },
      onVueObjectExit() {
        if (componentStack) {
          verifyComponent(componentStack)
          componentStack = componentStack.upper
        }
      },
      /**
       * @param {FunctionExpression | FunctionDeclaration | ArrowFunctionExpression} node
       */
      ':function'(node) {
        scopeStack = {
          upper: scopeStack,
          scopeNode: node
        }
      },
      ReturnStatement(node) {
        if (scopeStack && componentStack) {
          const data = componentStack.getFunctionData(scopeStack.scopeNode)
          if (data) {
            data.returns.push({
              node: node.argument,
              scope: context.getScope()
            })
          }
        }
      },
      ':function:exit'() {
        scopeStack = scopeStack && scopeStack.upper
      },

      /** @param {ThisExpression & { parent: MemberExpression & { parent: CallExpression } } } node */
      'CallExpression > MemberExpression > ThisExpression'(node) {
        if (
          !componentStack ||
          node.parent.object !== node ||
          node.parent.computed ||
          node.parent.property.type !== 'Identifier' ||
          node.parent.parent.callee !== node.parent
        ) {
          return
        }

        const name = node.parent.property.name
        componentStack.callMembers.push({
          name,
          node: node.parent.parent
        })
      }
    })
  }
}
