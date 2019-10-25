module.exports = {
  env: {
    "es6": true,
    "node": true
  },
  extends: [
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:prettier/recommended",
    "prettier",
    "prettier/@typescript-eslint"  // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  plugins: [
    "@typescript-eslint",
    "prettier"
  ],
  rules: {
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