module.exports = {
  extends: 'fyndiq',
  rules: {
    'jsx-a11y/anchor-is-valid': 0,
    'react/jsx-indent': 0,
    'react/no-array-index-key': 1,
  },
  settings: {
    'import/resolver': {
      'babel-module': {}
    }
  }
}