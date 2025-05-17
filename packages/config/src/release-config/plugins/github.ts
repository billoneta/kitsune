import type { PluginSpec } from 'semantic-release';
import type { GithubPluginOptions } from '@/release-config/types';

/**
 * Configures the semantic-release GitHub plugin
 *
 * @param {GithubPluginOptions} [options={}] - Plugin configuration options
 * @param {string} [options.successComment] - Comment template to post on successful releases
 * @param {string} [options.failComment] - Comment template to post on failed releases
 * @param {string[]} [options.releasedLabels] - Labels to apply to released issues/PRs
 * @param {'top'|'bottom'|false} [options.addReleases] - Where to add releases in GitHub
 * @param {object} [options.opts] - Additional GitHub plugin options
 * @returns {PluginSpec<GithubPluginOptions>} semantic-release plugin configuration
 */
export const githubPlugin = (options: GithubPluginOptions = {}): PluginSpec<GithubPluginOptions> => {
 options = Object.fromEntries(Object.entries(options).filter(([_, v]) => v !== undefined));
 const { successComment, failComment, releasedLabels, addReleases, assets, ...customized } = options;

 return [
  '@semantic-release/github',
  {
   successComment:
    successComment ??
    [
     // prettier
     '🚀 Successfully released **v\${nextRelease.version}** \`(\${nextRelease.tag})\`! 🎉',
     '🔗 [View release details](\${nextRelease.url})\n',
     'Thanks for contributing to the project! 🙌',
    ].join('\n'),
   failComment:
    failComment ??
    [
     // prettier
     '❌ Uh-oh! Failed to release **v\${nextRelease.version}** \`(\${nextRelease.tag})\`.',
     '📄 Check logs or CI output for more info.\n',
     "We're on it like a debugger on a stack trace. 🐛",
    ].join('\n'),
   releasedLabels: releasedLabels ?? [
    // prettier
    'released<%= nextRelease.channel ? `-${nextRelease.channel}` : "" %>',
   ],
   addReleases: addReleases ?? 'bottom',
   assets: [
    ...(assets ?? []),
    {
     path: 'CHANGELOG.md',
     name: 'CHANGELOG',
     label: 'Changelog',
    },
    {
     path: 'README.md',
     name: 'README',
     label: 'Readme',
    },
    {
     path: 'license.md',
     name: 'license',
     label: 'License',
    },
   ].filter(Boolean),
   ...customized,
  },
 ];
};
