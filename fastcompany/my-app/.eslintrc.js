module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended"],
  overrides: [],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    indent: ["error", 2],
    semi: [2, "always"],
    "space-before-function-paren": ["error", {anonymous: "always", named: "never"}],
    "linebreak-style": ["error", "windows"],
    quotes: ["error", "double", { allowTemplateLiterals: true }],
    "comma-dangle": "off",
    "multiline-ternary": ["error", "always-multiline"],
    "eol-last": 0,
    "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0 }],
  },
};
