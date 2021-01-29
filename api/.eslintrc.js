module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'standard',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  globals: {
    // TypeScript Interfaces & Namespaces
    Express: 'readonly',
  },
  rules: {
    semi: ['error', 'never'],
    'no-underscore-dangle': ['error', { allow: ['_id'] }],
    'no-param-reassign': 'off',
    'import/prefer-default-export': 'off',
    'comma-dangle': ['error', 'always-multiline'],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
}
