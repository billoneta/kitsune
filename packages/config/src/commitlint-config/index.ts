import type { UserConfig } from '@commitlint/types';

/**
 * Commitlint Configuration Example
 *
 * This configuration enforces Git commit message conventions with Gitmoji support.
 *
 * @example
 * // Basic usage in commitlint.config.js:
 * import commitlintConfig from '@billoneta/config/commitlint-config';
 * export default commitlintConfig; // <- already has a good default setting.
 *
 * @example
 * // Customizing commit types:
 * const customConfig = {
 *   ...commitlintConfig,
 *   rules: {
 *     ...commitlintConfig.rules,
 *     'type-enum': [2, 'always', [...commitTypes, 'wip']]
 *   }
 * };
 *
 * @example
 * // Commit message format:
 * git commit -m "✨ feat: add new feature"
 * git commit -m "🐛 fix: resolve login issue"
 *
 * @example
 * // Multi-line commit with body:
 * git commit -m "🔖 docs: update API documentation" -m "✨ feat: Added new endpoint examples"
 */

const commitlintConfig: UserConfig = {
 extends: ['@billoneta/gitmoji/commitlint-config'],
} satisfies UserConfig;

export default commitlintConfig;
