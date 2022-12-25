/** @type { import('eslint').ESLint.ConfigData } */
module.exports = {
  extends: [
    '@plasticine/eslint-config-basic',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
  ],

  parser: '@typescript-eslint/parser',

  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
    },

    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],
      },
    },
  },

  rules: {
    // typescript
    '@typescript-eslint/ban-ts-comment': 'off',
  },
}
