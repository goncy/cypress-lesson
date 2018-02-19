module.exports = {
  "root": true,
  "extends": [
    "prettier",
    "prettier/react",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:flowtype/recommended"
  ],
  "plugins": [
    "react",
    "prettier",
    "flowtype",
    "cypress"
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 2016,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "browser": true,
    "commonjs": true,
    "node": true,
    "es6": true,
    "jest": true,
    "mocha": true,
    "cypress/globals": true
  },
  "settings": {
    "flowtype": {
      "onlyFilesWithFlowAnnotation": true
    }
  },
  "rules": {
    "no-debugger": "off",
    "no-console": "off",
    "react/prop-types": "off",
    "prettier/prettier": [
      "error",
      {
        "semi": true
      }
    ]
  }
}
