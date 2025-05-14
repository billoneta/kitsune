import type { PluginSpec } from 'semantic-release';
import type { NpmPluginOptions } from '@/release-config/types';

/**
 * Configures the semantic-release npm plugin with monorepo support
 *
 * @param {NpmPluginOptions} [options={}] - Plugin configuration options
 * @param {boolean} [options.npmPublish=false] - Whether to publish to npm
 * @param {boolean} [options.monorepo] - Whether to use monorepo variant (@semrel-extra/npm)
 * @param {object} [options.opts] - Additional npm plugin options
 * @returns {PluginSpec<NpmPluginOptions>} semantic-release plugin configuration
 */
export const npmPlugin = (options: NpmPluginOptions = {}): PluginSpec<NpmPluginOptions> => {
 options = Object.fromEntries(Object.entries(options).filter(([_, v]) => v !== undefined));
 const { npmPublish, ...customized } = options;

 return [
  '@semantic-release/npm',
  {
   npmPublish: npmPublish ?? false,
   ...customized,
  },
 ];
};
