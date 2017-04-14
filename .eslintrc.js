module.exports = {
  extends: 'airbnb',
  rules: {
    'import/no-extraneous-dependencies': ["error", { "devDependencies": true }],
    'max-len': ["warn", 160, 4, {"ignoreUrls": true}],
    'no-multi-spaces': ["error", { exceptions: { "ImportDeclaration": true } }],
    'no-param-reassign': ["error", { props: false }],
    'no-unused-vars': ["error", { args: 'none' }],
    'react/jsx-filename-extension': ["error", { "extensions": [".js"] }],
    'no-mixed-operators': ["error", {"allowSamePrecedence": true}],
    'no-plusplus': ["error", { "allowForLoopAfterthoughts": true }],
    'indent': 0,
    'semi': 0,
    'react/jsx-indent': 0,
    'quotes': 0,
    'comma-dangle': 0,
    
    // Should fix that at some point but too much work...
    'react/no-is-mounted': "warn",
    'no-var': 0,
    'one-var': 0,
    'react/prefer-es6-class': 0,
    'no-nested-ternary': 0,
    'react/forbid-prop-types': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'react/no-unused-prop-types': 0,

    // Not for us ;-)
    'jsx-a11y/label-has-for': 0,
    'no-console': 0,
  },
  'settings': {
    'import/resolver': 'webpack'
  },
   "env": {
    "browser": true,
    "node": true
  }
};
