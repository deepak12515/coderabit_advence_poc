module.exports = {
    root: true,
    env: {
      node: true,
      jest: true,
      es6: true
    },
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'security'],
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:security/recommended'
    ],
    rules: {
      'no-console': 'warn',
      'security/detect-object-injection': 'off'
    }
  };
  