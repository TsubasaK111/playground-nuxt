module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    'jest/globals': true,
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'plugin:vue/recommended'
  ],
  plugins: ['vue', 'jest'],
  settings: {
    'import/resolver': {
      alias: [['@', __dirname]],
    },
    'import/core-modules': ['vue'],
    'import/extensions': ['.js', '.ts', '.jsx'],
  },
  rules: {
    semi: ['error','never'],
    quotes: ['error', 'single'],
    'func-names': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
}
