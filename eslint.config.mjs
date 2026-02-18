import pluginNext from "@next/eslint-plugin-next";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import tseslint from "typescript-eslint";
import globals from "globals";

/** @type {import('eslint').Linter.Config[]} */
const config = [
  // Ignore build artifacts and dependencies
  {
    ignores: [".next/**", "node_modules/**", "dist/**"],
  },
  // TypeScript + React files
  {
    files: ["**/*.{ts,tsx,js,jsx,mjs,cjs}"],
    plugins: {
      "@next/next": pluginNext,
      react: pluginReact,
      "react-hooks": pluginReactHooks,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      // Next.js recommended rules
      ...pluginNext.configs.recommended.rules,
      ...pluginNext.configs["core-web-vitals"].rules,
      // React hooks
      ...pluginReactHooks.configs.recommended.rules,
      // TypeScript: warn on unused vars, allow _ prefix
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
    },
  },
  // TypeScript-specific config
  ...tseslint.configs.recommended.map((c) => ({
    ...c,
    files: ["**/*.{ts,tsx}"],
  })),
];

export default config;
