import * as prettierPluginSortImports from '@ianvs/prettier-plugin-sort-imports';
import type { Options } from 'prettier';
import * as prettierPluginTailwindcss from 'prettier-plugin-tailwindcss';

/**
 * Prettier Configuration Example
 *
 * This configuration applies the formatting of all code done by you.
 *
 * @example
 * // Basic usage in prettier.config.js:
 * import prettierConfig from '@k4i/config/prettier-config';
 * export default prettierConfig; // <- already has a good default setting.
 *
 * @example
 * // Customizing prettier types:
 * const customConfig = {
 *   ...prettierConfig,
 *   printWidth: 100,
 *   tabWidth: 2,
 * };
 */

const prettierConfig: Options = {
  printWidth: 500000,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  jsxSingleQuote: false,
  trailingComma: 'es5',
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'always',
  quoteProps: 'as-needed',
  singleAttributePerLine: false,
  proseWrap: 'preserve',
  htmlWhitespaceSensitivity: 'css',
  vueIndentScriptAndStyle: false,
  embeddedLanguageFormatting: 'auto',
  plugins: [prettierPluginSortImports, prettierPluginTailwindcss],
  importOrder: ['<BUILTIN_MODULES>', '<THIRD_PARTY_MODULES>', '^[^.]/.*', '^\\./.*', '^\\.\\./.*'],
  importOrderParserPlugins: ['classProperties', 'importAssertions', 'decorators-legacy', 'typescript', 'jsx'],
  importOrderTypeScriptVersion: '5.8.3',
  importOrderCaseSensitive: true,
  tailwindPreserveWhitespace: true,
} satisfies Options;

export default prettierConfig;
