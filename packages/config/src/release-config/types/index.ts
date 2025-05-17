import type { Options as SemanticReleaseOptions } from 'semantic-release';

/**
 * Options for the changelog plugin.
 * https://www.npmjs.com/package/@semantic-release/changelog
 */
export interface ChangelogPluginOptions {
 changelogFile?: string;
 changelogTitle?: string;
}

/**
 * Rules to determine release type for commits.
 */
export type AnalyzerReleaseRules =
 | string
 | {
    type?: string;
    tag?: string;
    message?: string;
    scope?: string;
    breaking?: boolean;
    release: 'patch' | 'minor' | 'major' | false;
   }[];

/**
 * Options for the commit analyzer plugin.
 * https://www.npmjs.com/package/@semantic-release/commit-analyzer
 */
export interface CommitAnalyzerPluginOptions {
 preset?: string;
 config?: string;
 presetConfig?: Record<string, unknown>;
 releaseRules?: AnalyzerReleaseRules;
 parserOpts?: Record<string, unknown>;
}

/**
 * Options for executing commands in the release process.
 * https://www.npmjs.com/package/@semantic-release/exec
 */
export interface ExecPluginOptions {
 verifyConditionsCmd?: string;
 analyzeCommitsCmd?: string;
 verifyReleaseCmd?: string;
 generateNotesCmd?: string;
 prepareCmd?: string;
 addChannelCmd?: string;
 publishCmd?: string;
 successCmd?: string;
 failCmd?: string;
 shell?: string;
 execCwd?: string;
}

/**
 * Defines Git assets to be used in the release.
 */
export type GitAsset =
 | string
 | string[]
 | {
    path: string | string[];
   };

/**
 * Options for the Git plugin.
 * https://www.npmjs.com/package/@semantic-release/git
 */
export interface GitPluginOptions {
 assets?: GitAsset[] | false;
 message?: string;
}

/**
 * Configuration for a GitHub proxy.
 */
export type GithubProxy =
 | string
 | false
 | {
    host: string;
    port: number;
    secureProxy?: boolean;
    headers?: Record<string, string>;
   };

/**
 * Defines GitHub assets to be used in the release.
 */
export type GithubAsset =
 | string
 | string[]
 | {
    path: string | string[];
    name?: string;
    label?: string;
   };

/**
 * Options for the GitHub plugin.
 * https://www.npmjs.com/package/@semantic-release/github
 */
export interface GithubPluginOptions {
 githubUrl?: string;
 githubApiPathPrefix?: string;
 githubApiUrl?: string;
 proxy?: GithubProxy;
 assets?: GithubAsset[];
 successComment?: string | false;
 successCommentCondition?: string;
 failComment?: string | false;
 failTitle?: string | false;
 failCommentCondition?: string;
 labels?: string[] | false;
 assignees?: string[];
 releasedLabels?: string[] | false;
 addReleases?: false | 'top' | 'bottom';
 draftRelease?: boolean;
 releaseNameTemplate?: string;
 releaseBodyTemplate?: string;
 discussionCategoryName?: string | false;
}

/**
 * Options for the npm plugin.
 * https://www.npmjs.com/package/@semantic-release/npm
 */
export interface NpmPluginOptions {
 npmPublish?: boolean;
 pkgRoot?: string;
 tarballDir?: string | false;
}

/**
 * Options for the release notes generator plugin.
 * https://www.npmjs.com/package/@semantic-release/release-notes-generator
 */
export interface ReleaseNotesGeneratorPluginOptions {
 preset?: string;
 config?: string;
 parserOpts?: Record<string, unknown>;
 writerOpts?: Record<string, unknown>;
 host?: string;
 linkCompare?: boolean;
 linkReferences?: boolean;
 commit?: string;
 issue?: string;
 presetConfig?: Record<string, unknown>;
}

/**
 * Config options for the main function.
 */
export interface ReleaseConfigOptions extends SemanticReleaseOptions {
 commitAnalyzer?: CommitAnalyzerPluginOptions;
 exec?: ExecPluginOptions;
 releaseNotesGenerator?: ReleaseNotesGeneratorPluginOptions;
 changelog?: ChangelogPluginOptions;
 npm?: NpmPluginOptions;
 git?: GitPluginOptions;
 github?: GithubPluginOptions;
}
