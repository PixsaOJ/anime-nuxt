module.exports = {
  customSyntax: 'postcss-html',
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-vue',
    'stylelint-config-prettier',
    "@namics/stylelint-bem",
  ],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    "plugin/stylelint-bem-namics": true
  },
}
