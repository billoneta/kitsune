import dedent from 'dedent';
import type { PluginSpec } from 'semantic-release';
import type { ChangelogPluginOptions } from '@/release-config/types';

/**
 * Configures the `@semantic-release/changelog` plugin to generate or update the changelog file.
 *
 * @param {ChangelogPluginOptions} [options={}] - Plugin configuration options
 * @param {string} [options.changelogFile='CHANGELOG.md'] - Path to the changelog file
 * @param {string} [options.changelogTitle] - Custom changelog title/markdown header
 * @returns {PluginSpec<ChangelogPluginOptions>} semantic-release plugin configuration
 */
export const changelogPlugin = (options: ChangelogPluginOptions = {}): PluginSpec<ChangelogPluginOptions> => {
 options = Object.fromEntries(Object.entries(options).filter(([_, v]) => v !== undefined));
 const { changelogFile, changelogTitle } = options;

 const defaultChangelogTitle = dedent(`
    <a name="changelog-top"></a>

    <div align="center">
        <h1>📅 Changelog</h1>
        <p>🔎 Version History & Release Tracking.</p>
    </div>

    > [!IMPORTANT]
    > **Maintenance Policy**  
    > Only the latest stable version receives active support.  
    > Security patches are backported for 6 months after new major releases.

    > [!WARNING]
    > **Breaking Changes Protocol**  
    > Major version updates (X.0.0) may contain backward-incompatible changes.  
    > Always check the migration guide before upgrading.

    > [!NOTE]
    > **Changelog Standards**  
    > This document follows [Keep a Changelog](https://keepachangelog.com/) conventions  

    ---
 `);

 return [
  '@semantic-release/changelog',
  {
   changelogFile: changelogFile ?? 'CHANGELOG.md',
   changelogTitle: changelogTitle ?? defaultChangelogTitle,
  },
 ];
};
