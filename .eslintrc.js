module.exports = {
  env: {
    jest: true,
  },
  extends: 'airbnb-base',
  parser: '@typescript-eslint/parser',
  rules: {
    'camelcase': 'off',
    'import/no-unresolved': 'off',
  }
};
