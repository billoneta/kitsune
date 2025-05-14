import type { PluginSpec } from 'semantic-release';
import type { GitPluginOptions } from '@/release-config/types';

/**
 * Configures the semantic-release git plugin
 *
 * @param {GitPluginOptions} [options={}] - Plugin configuration options
 * @param {string|string[]|boolean} [options.assets] - Files to commit (can be string, array, or false to disable)
 * @param {string} [options.message] - Custom commit message template
 * @returns {PluginSpec<GitPluginOptions>} semantic-release plugin configuration
 */
export const gitPlugin = (options: GitPluginOptions = {}): PluginSpec<GitPluginOptions> => {
  options = Object.fromEntries(Object.entries(options).filter(([_, v]) => v !== undefined));
  const { assets, message } = options;

  const defaultAssets = ['CHANGELOG.md', 'package.json', 'pnpm-lock.yaml'];

  const resolveAssets = () => {
    if (typeof assets === 'boolean') return false;
    if (typeof assets === 'string') return [assets];
    if (Array.isArray(assets)) return [...assets, ...defaultAssets].filter(Boolean);
    return defaultAssets;
  };

  return [
    '@semantic-release/git',
    {
      assets: resolveAssets(),
      message:
        message ??
        [
          // prettier
          '♻️ chore(RELEASE): ${nextRelease.tag} v${nextRelease.version} [skip ci]\n',
          '📝 Release Notes:\n${nextRelease.notes}',
        ].join('\n'),
    },
  ];
};
