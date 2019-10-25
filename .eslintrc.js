module.exports = {
  env: {
    "node": true
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended"
  ],
  globals: {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  plugins: [
    "@typescript-eslint"
  ],
  rules: {
    "semi": [
      "error",
      "always"
    ],
    "quotes": [
      "error",
      "double"
    ],
    "space-before-function-paren": [
      "error",
      "never"
    ],
    "no-console": ["error", { allow: ["warn", "error", "log"] }],
    "@typescript-eslint/explicit-function-return-type": ["warn", {
      "allowExpressions": true
    }
    ],
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-unused-vars": ["error", {
      "vars": "all",
      "args": "after-used",
      "ignoreRestSiblings": false
    }]
  }
};