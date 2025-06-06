<div align="center">
   <h1>🧱 Contributing to <a href='https://github.com/billoneta/kitsune'>kitsune</a> </h1>
   <p>✨ Thank you for your interest in contributing to this project!</p>
</div>

> [!NOTE]
> If you’re reading this, it means you’re **interested in contributing — thank you!** We truly value your **willingness to help improve this project**. To make collaboration as **smooth and effective as possible**, please take a moment to read through the following **guidelines**.

<details>
  <summary>📚 Table of Contents</summary>
  <ol>
    <li>
      <a href="#-getting-started"><strong>Getting Started</strong></a>
      <ul>
        <li><a href="#1--fork-the-repository-and-clone-your-fork"><strong>Fork and clone</strong></a></li>
        <li><a href="#2--setup-the-upstream-remote-to-keep-your-fork-in-sync"><strong>Set upstream remote</strong></a></li>
        <li><a href="#3--create-a-new-branch-for-your-feature-or-bugfix"><strong>Create new branch</strong></a></li>
        <li><a href="#4--make-your-changes"><strong>Make Your Changes</strong></a></li>
        <li><a href="#5--push-your-changes"><strong>Push Your Changes</strong></a></li>
        <li><a href="#6--create-a-pull-request"><strong>Create a Pull Request</strong></a></li>
      </ul>
    </li>
    <li>
      <a href="#%EF%B8%8F-coding-standards"><strong>Coding Standards</strong></a>
      <ul>
        <li><a href="#1--use-the-correct-commit-message-format-eg-feat-add-login-button"><strong>Use the correct commit message format</strong></a></li>
        <li><a href="#2--keep-formatting-clean-and-consistent"><strong>Keep formatting clean and consistent</strong></a></li>
        <li><a href="#3--prioritize-code-readability"><strong>Prioritize code readability</strong></a></li>
        <li><a href="#4--follow-the-existing-project-style"><strong>Follow the existing project style</strong></a></li>
        <li><a href="#5--document-when-necessary-especially-for-complex-logic"><strong>Document when necessary, especially for complex logic</strong></a></li>
      </ul>
    </li>
  </ol>
</details>

---

## 🚀 Getting Started

Jumping into a **new project** can sometimes feel overwhelming, especially if you’re new to the **community** or the **codebase**. But don’t worry — **contributing here is straightforward and rewarding.**

We’ve built a **friendly and supportive environment** where **every contribution matters** and **everyone is encouraged to participate.** We’re **excited to have you join us** on this journey!

### 1. 🍴 Fork the repository and clone your fork

First, head over to the original repository on GitHub and hit that **Fork** button. Think of it like making your own copy of grandma’s secret cookie recipe — you get to experiment without messing up the original masterpiece.

![Forking repository on Github](https://github.com/k4itrun/k4itrun/assets/103044629/376b552a-bbed-4254-b105-aded0beb60b4)

Then, clone your fork to your local machine to start cooking in your own kitchen:

```bash
git clone https://github.com/your-username/kitsune.git
cd kitsune
```

This pulls down all the project goodness right to your computer.

### 2. 🔗 Setup the upstream remote to keep your fork in sync

To make sure your fork doesn’t fall behind and stays up-to-date with the original repository, you need to add an upstream remote. Think of it as adding the master GPS so you never lose track of the main road while working on your own detours.

Run these commands to add and verify the upstream remote:

```bash
git remote add upstream https://github.com/billoneta/kitsune
git remote show upstream
```

This lets you pull in the latest changes from the main repo anytime, without losing your own work.

### 3. 🌿 Create a new branch for your feature or bugfix

Before you dive in, create a fresh branch. This is like getting a new notebook page so you don’t scribble all over the main story. Name it something clear and descriptive, like `feature/amazing-widget` or `bugfix/fix-login-issue`. This keeps things neat and tidy for you and everyone else:

```bash
git checkout -b feature/your-feature-name
```

Now you’re ready to start your changes without the fear of breaking the main storyline.

### 4. 🔥 Make Your Changes

Time to bring your ideas to life! Whether you're fixing bugs, adding new features, or improving existing ones — go ahead and implement your contribution. Keep things clean, readable, and in line with the project goals.

Quick tip: To avoid merge conflicts later, make sure to pull the latest changes from the original repository **before** starting your work:

```bash
git pull upstream main
```

> [!CAUTION]
> Keep the existing project structure intact and follow the **[Coding Standards](#%EF%B8%8F-coding-standards)** closely.

<!-- prettier-ignore -->
> [!IMPORTANT] 
> **Before submitting your work:**
>
> - **All tests pass successfully.**
> - **New tests are added if needed.**
> - **Documentation is updated for new features or major changes.**

<!-- prettier-ignore-end -->

### 5. 🚀 Push Your Changes

Once your changes are ready and tested, push them to your forked repository:

```bash
git push origin feature/your-feature-name
```

> [!NOTE]
> Replace `feature/your-feature-name` with the name of your branch created earlier in **[step 3](#3--create-a-new-branch-for-your-feature-or-bugfix)**

### 6. 🧩 Create a Pull Request

Once your code is ready, **go to your forked repository on GitHub and click the "Compare & pull request" button** to open a Pull Request (PR) from your feature branch to the main repository.

Your Pull Request should be clear, descriptive, and follow the required structure. This helps maintainers review your work efficiently and increases the chances of your contribution being accepted.

For full details on what your PR should include, please refer to the [Pull Request Template](.github/pull_request_template.md).

<!-- prettier-ignore -->
> [!IMPORTANT] 
> **Before submitting your PR:**
>
> - Make sure your branch is up to date.
> - Ensure your code is **[Formatted and Linted](#2--keep-formatting-clean-and-consistent)**
> - Follow the **[Commit message format](#1--use-the-correct-commit-message-format-eg-feat-add-login-button)**
> - Include all **Relevant Context** and **Testing evidence**. This will help project maintainers and other contributors better understand your changes, provide effective feedback, and significantly increase the chances of your code being accepted and merged smoothly.

<!-- prettier-ignore-end -->

---

## ♻️ Coding Standards

Writing good code isn’t just about making it run — it’s about making it understandable, maintainable, and consistent. These standards help keep the project clean, readable, and easy to work with (even months later when you’ve forgotten what “final_final_finalFix2.js” was supposed to do).

### 1. ✨ Use the correct commit message format (e.g., `docs: update README`)

We adhere to the **[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)** specification alongside **[Gitmoji](https://gitmoji.dev/)** guidelines to include **meaningful emojis** in every commit. This **standardized approach** keeps our commit history **clean, consistent,** and ready for **automation tasks** like generating **changelogs** and managing **versioning**.

> [!WARNING]
> Your commit messages should clearly describe what your changes do and why.
>
> **Instead of writing vague messages like `Update File` or `Fix Stuff`.** use more meaningful ones like:
>
> - **📝 docs: Update README with local setup instructions**
> - **🐛 fix(core): Correct variable scope issue in core**

This helps reviewers (and your future self) understand the purpose behind each change without having to dig through the code.

### 2. 🧹 Keep formatting clean and consistent

Stick to the project's formatting rules. Tools like Prettier and ESLint are configured to do most of the work for you.

<!-- prettier-ignore -->
> [!NOTE] 
> **Before pushing your code:**
>
> - **To tidy up your code, run:** `pnpm run lint:fix`
> - **To give your code a makeover, run:** `pnpm run format`

<!-- prettier-ignore-end -->

### 3. 👓 Prioritize code readability

Code should be **easy to read and understand** without needing a decoder ring. Avoid **deeply nested logic**, **overly clever tricks**, or **cryptic variable names**.

If a new developer (or your **sleep-deprived teammate**) can’t understand your code within **30 seconds**, it needs **simplification**.

### 4. 🧭 Follow the existing project style

When unsure how to structure something, check how similar features are implemented elsewhere in the codebase. Consistency is more important than personal style.

> [!NOTE]
> If you think there’s a better way to do something, propose it in a pull request or discussion — but don’t introduce a new pattern just for fun.

### 5. 📝 Document when necessary, especially for complex logic

You don’t need to comment **every line**, but if you write something **non-obvious**, **explain the "why"**, not just the "what".

Use **comments, JSDoc, or inline notes** where helpful. Think of it as leaving **breadcrumbs** for the next person (who might be **you, 3 months from now**).
