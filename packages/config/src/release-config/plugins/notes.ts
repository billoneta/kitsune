import type { PluginSpec } from 'semantic-release';
import type { ReleaseNotesGeneratorPluginOptions } from '@/release-config/types';

/**
 * Configures the semantic-release release notes generator with Gitmoji support
 * This plugin generates release notes based on commit messages and includes customizations such as emojis, authors, and summaries.
 *
 * @param {ReleaseNotesGeneratorPluginOptions} [options={}] - Plugin configuration options
 * @param {ParserOptions} [options.parserOpts] - Commit parser options
 * @param {WriterOptions} [options.writerOpts] - Release notes writer options
 * @param {object} [options.opts] - Additional plugin options
 * @returns {PluginSpec<ReleaseNotesGeneratorPluginOptions>} semantic-release plugin configuration
 */
export const releaseNotesGeneratorPlugin = (options: ReleaseNotesGeneratorPluginOptions = {}): PluginSpec<ReleaseNotesGeneratorPluginOptions> => {
  options = Object.fromEntries(Object.entries(options).filter(([_, v]) => v !== undefined));
  const { config, ...customized } = options;

  return [
    '@semantic-release/release-notes-generator',
    {
      config: config ?? '@k4i/gitmoji/changelog-config',
      ...customized,
    },
  ];
};
