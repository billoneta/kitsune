import _commitTypes from '@billoneta/gitmoji/commit-types';
import type { PluginSpec } from 'semantic-release';
import type { CommitAnalyzerPluginOptions } from '@/release-config/types';

/**
 * Configures the semantic-release commit analyzer plugin with Gitmoji support
 *
 * @param {CommitAnalyzerPluginOptions} [options={}] - Plugin configuration options
 * @param {Array<ReleaseRule>} [options.releaseRules] - Custom release rules
 * @param {ParserOptions} [options.parserOpts] - Commit message parser options
 * @param {object} [options.opts] - Additional plugin options
 * @returns {PluginSpec<CommitAnalyzerPluginOptions>} semantic-release plugin configuration
 */
export const commitAnalyzerPlugin = (options: CommitAnalyzerPluginOptions = {}): PluginSpec<CommitAnalyzerPluginOptions> => {
 options = Object.fromEntries(Object.entries(options).filter(([_, v]) => v !== undefined));
 const { releaseRules, config, ...customized } = options;

 return [
  '@semantic-release/commit-analyzer',
  {
   // version:1.0.0:major.minor.patch:2.0.0:1.1.0:1.0.1
   releaseRules: releaseRules ?? [
    { breaking: true, release: 'major' },
    { type: 'feat', release: 'minor' },
    { type: 'feat', scope: 'int-*', release: false },
    { type: 'fix', release: 'patch' },
    { type: 'fix', scope: 'int-*', release: false },
    { type: 'perf', release: 'patch' },
    { type: 'perf', scope: 'int-*', release: false },
    { type: 'refactor', release: 'patch' },
    { type: 'refactor', scope: 'int-*', release: false },
    { type: 'chore', release: 'patch' },
    { type: 'chore', scope: 'int-*', release: false },
    { type: 'chore', scope: 'deps', release: 'patch' },
    { type: 'docs', release: 'patch' },
    { type: 'docs', scope: 'int-*', release: false },
    { type: 'build', release: 'patch' },
    { type: 'ci', release: false },
    { type: 'test', release: false },
    { type: 'style', release: false },
    { type: 'wip', release: false },
    { type: 'revert', release: false },
   ],
   config: config ?? '@billoneta/gitmoji/changelog-config',
   ...customized,
  },
 ];
};
