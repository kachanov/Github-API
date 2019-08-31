module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "react/prop-types": 'off',
    "import/no-named-as-default-member": 'off',
    "import/no-named-as-default": 'off',
    "import/named": 'off',
    "react/jsx-fragments": 'off',
    "import/prefer-default-export": 'off',
    "object-curly-newline": 'off',
    "react/jsx-filename-extension": 'off',
    "comma-dangle": 'off',
    "no-plusplus": 'off',
    "eol-last": 'off',
    "react/jsx-closing-tag-location": 'off',
    "react/jsx-one-expression-per-line": 'off',
    "react/jsx-props-no-spreading": 'off',
  },
};
