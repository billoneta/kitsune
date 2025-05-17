<div align="center">
  <h1>😂 <a href="https://github.com/billoneta/kitsune">@billoneta/gitmoji</a></h1>
  <p><strong>🎨 Commit and Changelog cleanup with a smile — because even your git history deserves good vibes.</strong></p>
  <br/>
  <a aria-label="Written with" href="https://www.typescriptlang.org/">
    <img src="https://img.shields.io/static/v1?label=Written%20with&message=Typescript&color=blue&logo=typescript"/>
  </a>
  <a aria-label="Version" href="https://github.com/billoneta/kitsune/releases">
    <img src="https://img.shields.io/npm/v/@billoneta/gitmoji/latest.svg"/>
  </a>
  <a aria-label="Weekly Downloads" href="https://www.npmjs.com/package/@billoneta/gitmoji">
    <img src="https://img.shields.io/npm/dw/@billoneta/gitmoji"/>
  </a>
</div>

---

## 📦 [`@billoneta/gitmoji`](https://www.npmjs.com/package/@billoneta/gitmoji)

### 💾 Installation

```bash
# Using npm
npm install -D @billoneta/gitmoji
# Using yarn
yarn add -D @billoneta/gitmoji
# Using pnpm
pnpm add -D @billoneta/gitmoji
```

### 🛠 How to use?

---

### 📅 [`changelog-config`](./src/changelog-config/index.ts)

> [!NOTE]
> A brief explanation of its use and the most recommended one.

You need to create a semantic release file first, [files config](https://semantic-release.gitbook.io/semantic-release/usage/configuration#configuration-file)

> [!IMPORTANT]
> To use conventional gitmoji chagelog at least in [Semantic Release](https://semantic-release.gitbook.io/semantic-release) just add it

```js
// release.config.js or .releaserc.js

const changelogConfig = {
 config: '@billoneta/gitmoji/changelog-config',
};

export default {
 branches: ['main'],
 plugins: [
  ['@semantic-release/commit-analyzer', changelogConfig],
  ['@semantic-release/release-notes-generator', changelogConfig],
 ],
};
```

---

### ♟ [`commit-types`](./src/commit-types/index.ts)

> [!NOTE]
> These are the types I use to send commits to Github

#### 1. Types

- **build:** Changes to build system or dependencies
- **ci:** Changes to CI configuration
- **docs:** Documentation updates
- **feat:** New features
- **fix:** Bug fixes
- **perf:** Performance improvements
- **refactor:** Code refactoring
- **revert:** Reverted changes
- **style:** Code style changes
- **test:** Test additions/modifications
- **chore:** Maintenance tasks
- **wip:** Work in progress (special case)

#### 2. Usage

```bash
git commit -m "📝 docs: Update README.md with project details and installation instructions"
```

---

### ✨ [`commitlint-config`](./src/commitlint-config/index.ts)

> [!NOTE]
> A brief explanation of its use and the most recommended one.

You need to create a commitlint file first, [files config](https://commitlint.js.org/reference/configuration.html)

```js
// commitlint.config.js or .commitlintrc.js

export default {
 extends: ['@billoneta/gitmoji/commitlint-config'],
};
```

### ☂ [`parser`](./src/parser/index.ts)

> [!NOTE]
> A brief explanation of its use and the most recommended one.

You need to create a semantic release file first, [files config](https://semantic-release.gitbook.io/semantic-release/usage/configuration#configuration-file)

> [!IMPORTANT]
> The gitmoji parser is used in the [Semantic Release](https://semantic-release.gitbook.io/semantic-release) configuration invidually, you would add only the parser and nothing else.

```js
// release.config.js or .releaserc.js

import parserOpts from '@billoneta/gitmoji/parser';

const changelogConfig = {
 parserOpts,
};

export default {
 branches: ['main'],
 plugins: [
  ['@semantic-release/commit-analyzer', changelogConfig],
  ['@semantic-release/release-notes-generator', changelogConfig],
 ],
};
```

---

### 🎨 [`regexs`](./src/regexs/index.ts)

> [!NOTE]
> It is used to export all the regexs needed for the previous configurations,
> but if you need emojis you can use it

---

<p align="right">
  <a href="../../README.md">⏪ <strong>Back to back</strong></a>
</p>
