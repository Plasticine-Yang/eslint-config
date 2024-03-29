import { Linter } from 'eslint'

const config: Linter.Config = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },

  extends: ['eslint:recommended', 'plugin:prettier/recommended'],

  plugins: ['unicorn'],

  rules: {
    // common
    'no-extra-semi': 'off',
    'no-empty': 'off',

    // unicorn
    // Pass error message when throwing errors
    'unicorn/error-message': 'error',
    // Uppercase regex escapes
    'unicorn/escape-case': 'error',
    // Array.isArray instead of instanceof
    'unicorn/no-instanceof-array': 'error',
    // includes over indexOf when checking for existence
    'unicorn/prefer-includes': 'error',
    // String methods startsWith/endsWith instead of more complicated stuff
    'unicorn/prefer-string-starts-ends-with': 'error',
    // Enforce throwing type error when throwing error while checking typeof
    'unicorn/prefer-type-error': 'error',
    // Use new when throwing error
    'unicorn/throw-new-error': 'error',
  },
}

module.exports = config
