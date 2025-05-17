import type { PluginSpec } from 'semantic-release';
import type { ExecPluginOptions } from '@/release-config/types';

/**
 * Configures the semantic-release exec plugin
 *
 * @param {ExecPluginOptions} [options={}] - Plugin configuration options
 * @param {string} [options.prepareCmd] - Command to execute during prepare step
 * @param {string} [options.publishCmd] - Command to execute during publish step
 * @param {string} [options.successCmd] - Command to execute on success
 * @param {string} [options.failCmd] - Command to execute on failure
 * @param {object} [options.opts] - Additional plugin options
 * @returns {PluginSpec<ExecPluginOptions>} semantic-release plugin configuration
 */
export const execPlugin = (options: ExecPluginOptions = {}): PluginSpec<ExecPluginOptions> => {
 options = Object.fromEntries(Object.entries(options).filter(([_, v]) => v !== undefined));
 const { prepareCmd, publishCmd, successCmd, failCmd, ...customized } = options;

 return [
  '@semantic-release/exec',
  {
   prepareCmd: prepareCmd ?? 'echo "📦 Preparing release ${nextRelease.tag} v${nextRelease.version}"',
   publishCmd: publishCmd ?? 'echo "🚀 Publishing release ${nextRelease.tag} v${nextRelease.version}"',
   successCmd: successCmd ?? 'echo "✅ Release ${nextRelease.tag} v${nextRelease.version} published successfully!"',
   failCmd: failCmd ?? 'echo "🛑 Failed to publish release ${nextRelease.tag} v${nextRelease.version}"',
   ...customized,
  },
 ];
};
