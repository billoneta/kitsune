import type { Config } from '@billoneta/gitmoji/changelog-config/types';
import displayCommitTypes from '@billoneta/gitmoji/commit-types';

/**
 * Changelog Configuration Example
 *
 * This configuration applies the Changelog configuration with Gitmoji support.
 *
 * @example
 * // Basic usage in changelog.config.js:
 * import changelogConfig from '@billoneta/config/changelog-config';
 * export default changelogConfig; // <- already has a good default setting.
 *
 * @example
 * // Customizing changelog:
 * const customConfig = {
 *   ...changelogConfig,
 *   ...Args
 * };
 */

const changelogConfig: Config = {
 customCommitTypeMap: {
  feat: {
   emoji: '✨',
  },
  fix: {
   emoji: '🐛',
  },
  perf: {
   emoji: '⚡',
  },
  refactor: {
   emoji: '♻',
  },
  chore: {
   emoji: '🔧',
  },
  docs: {
   emoji: '📝',
  },
  build: {
   emoji: '📦️',
  },
  ci: {
   emoji: '👷',
  },
  test: {
   emoji: '✅',
  },
  style: {
   emoji: '🎨',
  },
  wip: {
   emoji: '🚑️',
  },
  revert: {
   emoji: '⏪',
  },
 },
 customScopeMap: {
  '*': '🎯 *',
 },
 // displayScopes: [],
 displayCommitTypes,
 showAuthor: true,
 showAuthorAvatar: true,
 showSummary: true,
 withEmoji: true,
 reduceHeadingLevel: true,
 newlineTimestamp: true,
 addBackToTop: true,
} satisfies Config;

export default changelogConfig;
