import type { Options, PluginSpec } from 'semantic-release';
import { changelogPlugin, commitAnalyzerPlugin, execPlugin, gitPlugin, githubPlugin, npmPlugin, releaseNotesGeneratorPlugin } from '@/release-config/plugins';
import type { ReleaseConfigOptions } from '@/release-config/types';

/**
 * Semantic-release Configuration Example
 *
 * This configuration applies how you want your github releases to be made automatically.
 *
 * @example
 * // Basic usage in release.config.js:
 * import releaseConfig from '@billoneta/config/release-config';
 * export default releaseConfig(); // <- already has a good default setting.
 *
 * @example
 * // Customizing release types:
 * const customConfig = {
 *   branches: ['main', {
 *      name: 'next',
 *      channel: 'next',
 *      prerelease: true
 *   }]
 *   dryRun: true,
 *   npm: {
 *     monorepo: true,
 *     npmPublish: true,
 *     tarballDir: './path/to/you/dir',
 *     pkgRoot: './path/to/you/root'
 *   },
 *   ...options
 * };
 * export default releaseConfig(customConfig);
 */

/**
 * Main semantic-release configuration builder
 *
 * @param {ReleaseConfigOptions} [options={}] - Global release configuration options
 * @param {Array<string|BranchSpec>} [options.branches] - Branch release configuration
 * @param {boolean} [options.ci=true] - Whether to run in CI mode
 * @param {string} [options.tagFormat] - Format for release tags
 * @param {PluginSpec[]} [options.plugins] - Additional plugins to include
 * @param {CommitAnalyzerPluginOptions} [options.commitAnalyzer] - Commit analyzer config
 * @param {ExecPluginOptions} [options.exec] - Exec plugin config
 * @param {ReleaseNotesGeneratorPluginOptions} [options.releaseNotesGenerator] - Release notes config
 * @param {ChangelogPluginOptions} [options.changelog] - Changelog config
 * @param {NpmPluginOptions} [options.npm] - NPM plugin config
 * @param {GitPluginOptions} [options.git] - Git plugin config
 * @param {GithubPluginOptions} [options.github] - GitHub plugin config
 * @param {object} [options.opts] - Additional global options
 * @returns {Options} Complete semantic-release configuration
 */
function releaseConfig(options: ReleaseConfigOptions = {}): Options {
 options = Object.fromEntries(Object.entries(options).filter(([_, v]) => v !== undefined));
 const { branches, ci, tagFormat, plugins, ...customized } = options;

 const defaultPlugins: PluginSpec[] = [
  // prettier
  commitAnalyzerPlugin(options.commitAnalyzer),
  execPlugin(options.exec),
  releaseNotesGeneratorPlugin(options.releaseNotesGenerator),
  changelogPlugin(options.changelog),
  npmPlugin(options.npm),
  gitPlugin(options.git),
  githubPlugin(options.github),
 ];

 return {
  branches: branches ?? [
   // prettier
   { name: 'main', channel: 'latest' },
   { name: 'master', channel: 'latest' },
   { name: 'next', channel: 'next', prerelease: 'next' },
   { name: 'next-*', channel: 'next', prerelease: 'next' },
   { name: 'beta', channel: 'beta', prerelease: 'beta' },
   { name: 'beta-*', channel: 'beta', prerelease: 'beta' },
   { name: 'dev', channel: 'alpha', prerelease: 'alpha' },
   { name: 'dev-*', channel: 'alpha', prerelease: 'alpha' },
  ],
  ci: ci ?? true,
  tagFormat: tagFormat ?? 'v${version}',
  plugins: [...(plugins ?? []), ...defaultPlugins].filter(Boolean),
  ...customized,
 };
}

export default releaseConfig;
