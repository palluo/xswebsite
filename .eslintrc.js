module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier"],
  rules: {
    "no-console": 0,
    "no-debugger": 0,
    "prefer-const": [
      2,
      {
        destructuring: "any",
        ignoreReadBeforeAssign: false
      }
    ],
    "no-var": 2,
    "no-unused-vars": 0,
    "prefer-const": 0,
    "vue/no-parsing-error": [2, { "x-invalid-end-tag": false }]
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
