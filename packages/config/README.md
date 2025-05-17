<div align="center">
  <h1>🔩 <a href="https://github.com/billoneta/kitsune">@billoneta/config</a></h1>
  <b>🧹 <strong>Shared config with more than 5 modules, where eslint, prettier, semantic-release, commitlint and others are used.</strong></b>
  <br/><br/>
  <a aria-label="Written with" href="https://www.typescriptlang.org/">
    <img src="https://img.shields.io/static/v1?label=Written%20with&message=Typescript&color=blue&logo=typescript"/>
  </a>
  <a aria-label="Version" href="https://github.com/billoneta/kitsune/releases">
    <img src="https://img.shields.io/npm/v/@billoneta/config/latest.svg"/>
  </a>
  <a aria-label="Weekly Downloads" href="https://www.npmjs.com/package/@billoneta/config">
    <img src="https://img.shields.io/npm/dw/@billoneta/config"/>
  </a>
</div>

---

## 📦 [`@billoneta/config`](https://www.npmjs.com/package/@billoneta/config)

### 💾 Installation

```bash
# Using npm
npm install -D @billoneta/config
# Using yarn
yarn add -D @billoneta/config
# Using pnpm
pnpm add -D @billoneta/config
```

### 🛠 How to use?

---

### 📅 [`changelog-config`](./src/changelog-config/index.ts)

> [!NOTE]
> A brief explanation of its use and the most recommended one.

You need to create a changelog file first, `changelog.config.js` or `.changelogrc.js`

> [!WARNING]
> These are the only files supported at the moment

#### 1. Default config

```js
// changelog.config.js or .changelogrc.js

// @ts-check
import defineConfig from '@billoneta/config/changelog-config';

/** @type {import("@billoneta/config/changelog-config").Config} */
export default defineConfig();
```

#### 2. Custom config

> [!IMPORTANT]
> 🔩 If you have no idea of the config

<!-- prettier-ignore-start -->
| Key | Type |
| - | - |
| `customCommitTypeMap` | `object` |
| `customScopeMap` | `object` |
| `displayCommitTypes` | `array` |
| `displayScopes` | `array` |
| `showAuthor` | `boolean` |
| `showAuthorAvatar` | `boolean` |
| `showSummary` | `boolean` |
| `withEmoji` | `boolean` |
| `reduceHeadingLevel` | `boolean` |
| `newlineTimestamp` | `boolean` |
| `addBackToTop` | `boolean` |
<!-- prettier-ignore-end -->

```js
// changelog.config.js or .changelogrc.js

// @ts-check
import defineConfig from '@billoneta/config/changelog-config';

/** @type {import("@billoneta/config/changelog-config").Config} */
export default defineConfig({
 showAuthor: true,
 showAuthorAvatar: true,
 showSummary: true,
 withEmoji: true,
 reduceHeadingLevel: true,
 newlineTimestamp: true,
 addBackToTop: true,
});
```

---

### 📨 [`commitlint-config`](./src/commitlint-config/index.ts)

> [!NOTE]
> A brief explanation of its use and the most recommended one.

You need to create a commitlint file first, [files config](https://commitlint.js.org/reference/configuration.html)

> [!IMPORTANT]
> For best preference, I recommend using **commitlint.config.js** or **.commitlintrc.js**

```js
// commitlint.config.js or .commitlintrc.js

// @ts-check
import commitlintConfig from '@billoneta/config/commitlint-config';

/** @type {import('@commitlint/types').UserConfig} */
export default commitlintConfig;
```

---

### 🔮 [`eslint-config`](./src/eslint-config/index.ts)

> [!NOTE]
> A brief explanation of its use and the most recommended one.

You need to create a eslint file first, [files config](https://eslint.org/docs/latest/use/configure/configuration-files#configuration-file)

> [!IMPORTANT]
> For best preference, I recommend using **eslint.config.ts** or **eslint.config.js**

<details>
  <summary><img src="https://es.eslint.org/icon-512.png" alt="Eslint Logo" width="18" loading="lazy"/> <strong>How to apply and combine this config</strong></summary>

#### 🧱 Base setup

Kick things off with a solid foundation: essential ESLint rules + Prettier support baked in.

```ts
// eslint.config.ts

import eslintConfig from '@billoneta/config/eslint-config';
import { defineConfig } from 'eslint/config';

export default defineConfig([eslintConfig.base]);
```

#### ⚡ Using it with [Next.js](https://nextjs.org)

Tailored for Next.js projects — includes all the recommended rules so you don't have to guess.

```ts
// eslint.config.ts

import eslintConfig from '@billoneta/config/eslint-config';
import { defineConfig } from 'eslint/config';

export default defineConfig([eslintConfig.next]);
```

#### 🖥️ For [Node.js](https://nodejs.org/)

Config designed to keep your Node.js code clean and consistent.

```ts
// eslint.config.ts

import eslintConfig from '@billoneta/config/eslint-config';
import { defineConfig } from 'eslint/config';

export default defineConfig([eslintConfig.node]);
```

#### 🧹 Prettier integration

Make sure your formatting rules play nice with your linter.

⚠ **Make sure to place this configuration last in your setup to avoid conflicts or unexpected behavior.**

```ts
// eslint.config.ts

import eslintConfig from '@billoneta/config/eslint-config';
import { defineConfig } from 'eslint/config';

export default defineConfig([
 // ...Other config
 eslintConfig.prettier,
]);
```

#### ⚛️ For [React](https://react.dev)

Set up linting rules specifically for React apps and components.

```ts
// eslint.config.ts

import eslintConfig from '@billoneta/config/eslint-config';
import { defineConfig } from 'eslint/config';

export default defineConfig([eslintConfig.react]);
```

#### 🚀 [Turbo](https://turborepo.org/) + Monorepos

Optimized setup for monorepo structures using Turbo – includes parser and smart rules.

```ts
// eslint.config.ts

import eslintConfig from '@billoneta/config/eslint-config';
import { defineConfig } from 'eslint/config';

export default defineConfig([eslintConfig.turbo]);
```

#### 🧠 [TypeScript](https://www.typescriptlang.org/)

Config for TypeScript support, including parser and strict rules tailored for typed projects.

```ts
// eslint.config.ts

import eslintConfig from '@billoneta/config/eslint-config';
import { defineConfig } from 'eslint/config';

export default defineConfig([eslintConfig.typescript]);
```

#### 🔗 Combining multiple setups

Need to mix configurations? No problem. Just stack them:

```ts
// eslint.config.ts

import eslintConfig from '@billoneta/config/eslint-config';
import { defineConfig } from 'eslint/config';

export default defineConfig([eslintConfig.base, eslintConfig.typescript, eslintConfig.react]);
```

</details>

> [!NOTE]
> This section of the module is a fork of [IgorKowalczyk/eslint-config](https://github.com/IgorKowalczyk/shared-configs/blob/main/packages/eslint-config/README.md), with additional improvements and custom tweaks.
>
> ✨ **Full credit to him**

---

### 🈹 [`lefthook-config`](./src/lefthook-config/index.ts)

> [!NOTE]
> A brief explanation of its use and the most recommended one.

You need to create a lefthook file first, [files config](https://lefthook.dev/configuration/#config-file-name)

> [!IMPORTANT]
> For best preference, I recommend using **lefthook.json** or **.lefthook.json**

```json
// lefthook.json

{
 "$schema": "https://json.schemastore.org/lefthook.json",
 "extends": ["node_modules/@billoneta/config/dist/lefthook-config/base.json"]
}
```

---

### 🅿 [`prettier-config`](./src/prettier-config/index.ts)

> [!NOTE]
> A brief explanation of its use and the most recommended one.

You need to create a prettier file first, [files config](https://prettier.io/docs/configuration)

> [!IMPORTANT]
> For best preference, I recommend using **prettier.config.js** or **.prettierrc.js**

```js
// prettier.config.js or .prettierrc.js

// @ts-check
import prettierConfig from '@billoneta/config/prettier-config';

/** @type {import("prettier").Options} */
export default prettierConfig;
```

---

### 🔄 [`release-config`](./src/release-config/index.ts)

> [!NOTE]
> A brief explanation of its use and the most recommended one.

You need to create a semantic release file first, [files config](https://semantic-release.gitbook.io/semantic-release/usage/configuration#configuration-file)

> [!IMPORTANT]
> For best preference, I recommend using **release.config.js** or **.releaserc.js**

#### 1. Default config

```js
// release.config.js or .releaserc.js

// @ts-check
import defineConfig from '@billoneta/config/release-config';

/** @type {import('@billoneta/config/release-config').ReleaseConfigOptions} */
export default defineConfig();
```

#### 2. Custom config

Define your custom config following the **[Semantic Release Options](https://semantic-release.gitbook.io/semantic-release/usage/configuration#options)**

> [!IMPORTANT]
> 🔩 How to configure default and customizable plugins

<!-- prettier-ignore-start -->
| Plugin | Type | Doc |
| - | - | - |
| `commitAnalyzer` | `object` | [View Commit Analyzer Docs](https://github.com/semantic-release/commit-analyzer?tab=readme-ov-file#options) |
| `exec` | `object` | [View Exec Docs](https://github.com/semantic-release/exec?tab=readme-ov-file#options) |
| `releaseNotesGenerator` | `object` | [View Release Notes Generator Docs](https://github.com/semantic-release/release-notes-generator?tab=readme-ov-file#options) |
| `changelog` | `object` | [View Changelog Docs](https://github.com/semantic-release/changelog?tab=readme-ov-file#options) |
| `npm` | `object` | [View NPM Docs](https://github.com/semantic-release/npm?tab=readme-ov-file#options) |
| `git` | `object` | [View GIT Docs](https://github.com/semantic-release/git?tab=readme-ov-file#options) |
| `github` | `object` | [View Github Docs](https://github.com/semantic-release/github?tab=readme-ov-file#options) |
<!-- prettier-ignore-end -->

> [!NOTE]
> If you want to add a custom plugin, you can do it by adding the key `plugin` inside the **array** you can add as many as you need.

```js
// release.config.js or .releaserc.js

// @ts-check
import defineConfig from '@billoneta/config/release-config';

/** @type {import('@billoneta/config/release-config').ReleaseConfigOptions} */
export default defineConfig({
 branches: [
  'next',
  {
   name: 'next',
   channel: 'next',
   prerelease: true,
  },
 ],
 plugin: [],
 // Default and customizable plugins
 commitAnalyzer: {
  releaseRules: [
   { breaking: true, release: 'major' },
   { type: 'feat', release: 'minor' },
   { type: 'feat', scope: 'int-*', release: false },
   { type: 'fix', release: 'patch' },
  ],
 },
 npm: {
  npmPublish: true,
  tarballDir: './path/to/you/dir',
  pkgRoot: './path/to/you/root',
 },
});
```

---

### ♻️ [`renovate-config`](./src/renovate-config/index.ts)

> [!NOTE]
> A brief explanation of its use and the most recommended one.

You need to create a renovate file first, [files config](https://docs.renovatebot.com/configuration-options/)

> [!IMPORTANT]
> For best preference, I recommend using **renovate.json** or **.renovaterc.json**

```json
// .github/renovate.json or .github/.renovaterc.json

{
 "$schema": "https://docs.renovatebot.com/renovate-schema.json",
 "extends": ["github>billoneta/kitsune//packages/config/src/renovate-config/base.json"]
}
```

---

<p align="right">
  <a href="../../README.md">⏪ <strong>Back to back</strong></a>
</p>
