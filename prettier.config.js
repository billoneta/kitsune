// @ts-check
import prettierConfig from "@billoneta/config/prettier-config";

/** @type {import("prettier").Options} */
export default {
 arrowParens: "always",
 bracketSpacing: true,
 embeddedLanguageFormatting: "auto",
 jsxSingleQuote: false,
 printWidth: 200000, // Config general muy grande, raro pero ok
 proseWrap: "preserve",
 quoteProps: "as-needed",
 requirePragma: false,
 semi: true,
 singleQuote: false,
 tabWidth: 1,
 trailingComma: "es5",
 useTabs: false,
 overrides: [
  {
   files: ["*.md"],
   options: {
    printWidth: 80,
    htmlWhitespaceSensitivity: "css",
   },
  },
 ],
};
