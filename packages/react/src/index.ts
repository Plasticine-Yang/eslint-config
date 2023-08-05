import { Linter } from 'eslint'

const config: Linter.Config = {
  extends: [
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    '@plasticine-yang/eslint-config-typescript',
  ],

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
  },

  rules: {
    // react
    'react/prop-types': 'off',
  },
}

module.exports = config
