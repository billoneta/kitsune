import changelogConfig from '@/changelog-config';
import commitlintConfig from '@/commitlint-config';
import eslintConfig from '@/eslint-config';
import prettierConfig from '@/prettier-config';
import releaseConfig from '@/release-config';

/**
 * Unified Configuration Export
 *
 * Aggregates all project configurations for easy access and sharing across tools.
 * Contains pre-configured setups for:
 * - Changelog (Git changelog config)
 * - Commitlint (Git commit message conventions)
 * - ESLint (JavaScript/TypeScript linting)
 * - Prettier (Code formatting)
 * - Semantic Release (Automated versioning and publishing)
 *
 * @example Changelog
 * // Default configurations:
 * const { changelog } = require('@k4i/config'); // <- already has a good default setting
 * // Changelog usage (in changelog.config.js)
 * export default Changelog;
 *
 * @example Commitlint
 * // Extending configurations:
 * const { commitlint } = require('@k4i/config'); // <- already has a good default setting
 * // Commitlint usage (in commitlint.config.js)
 * export default {
 *   ...commitlint,
 *   rules: {
 *     ...commitlint.rules,
 *     'subject-case': [2, 'always', 'sentence-case']
 *   }
 * };
 *
 * @example Eslint & Prettier
 * // Using individual configurations:
 * import { eslint, prettier } from '@k4i/config'; // <- already has a good default setting
 *
 * // ESLint usage (in eslint.config.js)
 * import { defineConfig } from 'eslint/config';
 * export default defineConfig([
 *   eslint.base,
 *   eslint.node,
 *   eslint.typescript,
 *   {
 *     name: "Override",
 *     rules: {
 *      // Add a rule or modify it
 *      "@eslint-react/hooks-extra/no-direct-set-state-in-use-effect": "off",
 *      ...rules
 *     },
 *   },
 * ]);
 *
 * // Prettier usage (in prettier.config.js)
 * export default prettier;
 *
 * @example Semantic release
 * // Using in build scripts:
 * const { release } = require('@k4i/config'); // <- already has a good default setting
 * // Semantic release usage (in release.config.js)
 * module.exports = release();
 */

export default {
 changelog: changelogConfig,
 commitlint: commitlintConfig,
 eslint: eslintConfig,
 prettier: prettierConfig,
 release: releaseConfig,
};
