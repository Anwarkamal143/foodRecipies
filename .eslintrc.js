module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      tsx: true,
    },
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  env: {
    browser: true,
    amd: true,
    node: true,
  },
  plugins: [],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier",
    // "plugin:prettier/recommended", // Make sure this is always the last element in the array.
    // "plugin:prettier/@typescript-eslint",
    "next",
    "next/core-web-vitals",
  ],
  rules: {
    "prettier/prettier": ["error", {}, { usePrettierrc: true }],
    "react/react-in-jsx-scope": "off",

    "react/prop-types": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "import/no-anonymous-default-export": "off",
    "@typescript-eslint/ban-types": "off",
    "react/display-name": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "simple-import-sort/imports": "error",
    "import/no-duplicates": "error",
    "jsx-a11y/anchor-is-valid": [
      "off",
      {
        components: ["Link"],
        specialLink: ["hrefLeft", "hrefRight"],
        aspects: ["invalidHref", "preferButton"],
      },
    ],
  },
}
