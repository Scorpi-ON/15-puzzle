import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";
import path from "path";
import tseslint from "typescript-eslint";

import { includeIgnoreFile } from "@eslint/compat";
import js from "@eslint/js";

const gitignorePath = path.resolve(import.meta.dirname, ".gitignore");

export default tseslint.config(
    includeIgnoreFile(gitignorePath),

    {
        files: ["**/*.{js,jsx}"],
        languageOptions: {
            ecmaVersion: "latest",
            globals: globals.browser,
            sourceType: "module",
        },
        extends: [js.configs.recommended],
    },

    {
        files: ["**/*.{ts,tsx}"],
        ignores: ["src/components/ui/**"],
        settings: {
            react: {
                version: "19",
            },
        },
        languageOptions: {
            ecmaVersion: "latest",
            globals: globals.browser,
            sourceType: "module",
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
        extends: [js.configs.recommended, tseslint.configs.strictTypeChecked, tseslint.configs.stylisticTypeChecked],
        rules: {
            "@typescript-eslint/restrict-template-expressions": "off",
            "@typescript-eslint/no-non-null-assertion": "off",
            ...react.configs.recommended.rules,
            ...react.configs["jsx-runtime"].rules,
            ...reactHooks.configs.recommended.rules,
            "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
        },
        plugins: {
            react,
            "react-hooks": reactHooks,
            "react-refresh": reactRefresh,
        },
    },
);
