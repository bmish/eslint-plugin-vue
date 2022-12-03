const { sync } = require('markdownlint')
const { readFileSync } = require('fs')
const { load } = require('js-yaml')
const markdownlintRuleHelpers = require('markdownlint-rule-helpers')

const markdownlintYml = readFileSync('.markdownlint.yml', 'utf8')
const markdownlintConfig = load(markdownlintYml)

/** @type {import('eslint-doc-generator').GenerateOptions} */
const config = {
  pathRuleList: 'docs/rules/index.md',
  postprocess: (content) => {
    // Fix markdownlint issues
    const fixResults = sync({
      strings: { content },
      config: markdownlintConfig,
      resultVersion: 3
    })
    return markdownlintRuleHelpers.applyFixes(content, fixResults.content)
  },
  ruleDocSectionOptions: false,
  ruleDocTitleFormat: 'prefix-name',
  urlConfigs: 'https://eslint.vuejs.org/user-guide/#bundle-configurations'
}

module.exports = config
