<div align="center">

# Guardian

![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)
![Node.js](https://img.shields.io/badge/Node.js-%3E%3D22-339933?style=for-the-badge&logo=node.js)
![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)

**A TypeScript CLI that runs AI-assisted code review as a Git hook.**

It inspects staged files, builds a review prompt from your project rules, calls a configured provider CLI, and blocks the commit if the review fails.

[Quick Start](#quick-start) • [Features](#features) • [Configuration](#configuration) • [Commands](#commands) • [Cache](#cache-behavior)

</div>

---

## Features

- Git hook integration for pre-commit workflows
- Configurable provider support:
  - Claude
  - Gemini
  - OpenCode
  - Codex
  - Antigravity
- Project-level and global configuration
- Rule loading from `AGENTS.md`
- Support for referenced markdown rule files
- Content-based cache to skip unchanged files
- Parallel file reading for faster reviews
- CLI commands for `setup`, `init`, `install`, `run`, and cache management

---

## Installation

### Local development

Requires Node.js >= 22.

```bash
npm install
npm run build
```

Run the CLI directly:

```bash
node dist/cli.mjs --help
```

### Available scripts

| Script | Description |
|--------|-------------|
| `npm run build` | Compile TypeScript |
| `npm test` | Run tests |
| `npm run test:watch` | Run tests in watch mode |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Run ESLint with autofix |
| `npm run format` | Format with Prettier |
| `npm run format:check` | Check Prettier formatting |

### Link globally

```bash
npm link
guardian --help
```

### Install in another repo

Using a local pack:

```bash
npm pack
```

Then in another repository:

```bash
npm install -D /path/to/guardian-1.0.0.tgz
npx guardian --help
```

---

## Quick Start

Inside a Git repository you want to protect:

```bash
guardian setup
```

`guardian setup` runs an interactive 3-step flow:

1. Choose the rules file name and provider (`Claude`, `Gemini`, `OpenCode`, `Codex`, or `Antigravity`)
2. Create `.guardian` and `AGENTS.md`, then choose whether to install the hook in `pre-commit` or `commit-msg`
3. Run a preview of `guardian run` to confirm everything works

If the project already has a `.guardian` file, Guardian detects it and asks whether you want to reconfigure it.

This creates:

- `.guardian` — project config
- `AGENTS.md` — review rules for the AI

Then update both files for your project.

---

## Configuration

Guardian loads config in this order:

1. Environment variables
2. Project `.guardian`
3. Global `~/.config/guardian/config`
4. Built-in defaults

### Example `.guardian`

```bash
PROVIDER="claude"
FILE_PATTERNS="*.ts,*.tsx,*.js,*.jsx"
EXCLUDE_PATTERNS="*.test.ts,*.spec.ts,*.d.ts,*.stories.tsx"
RULES_FILE="AGENTS.md"
STRICT_MODE="true"
TIMEOUT="300"
CACHE="true"
```

### Supported keys

- `PROVIDER`
- `FILE_PATTERNS`
- `EXCLUDE_PATTERNS`
- `RULES_FILE`
- `STRICT_MODE`
- `TIMEOUT`
- `PR_BASE_BRANCH`
- `CACHE`

### Provider values

```bash
PROVIDER="claude"
PROVIDER="gemini"
PROVIDER="opencode"
PROVIDER="codex"
PROVIDER="antigravity"
PROVIDER="opencode:anthropic/claude-opus-4"
```

### Environment variables

| Variable | Description |
|----------|-------------|
| `GUARDIAN_PROVIDER` | Override provider |
| `GUARDIAN_TIMEOUT` | Override timeout |
| `GUARDIAN_STRICT_MODE` | Override strict mode |
| `GUARDIAN_RULES_FILE` | Override rules file |
| `GUARDIAN_CACHE` | Override cache setting |

---

## Rules File

Guardian reads your rules from `AGENTS.md` by default.

It also expands backticked markdown references:

```markdown
- UI rules: `docs/ui-rules.md`
- API rules: `docs/api-rules.md`
```

If those files exist, their contents are appended to the final prompt.

---

## Commands

### `guardian setup`

Runs the guided onboarding flow for a repository.

- prompts for the rules file name and provider
- creates `.guardian` and `AGENTS.md`
- asks whether to install into `pre-commit` or `commit-msg`
- executes a preview `guardian run` at the end
- detects an existing `.guardian` file and offers to reconfigure it

```bash
guardian setup
```

### `guardian init`

Creates default `.guardian` and `AGENTS.md` files.

### `guardian install`

Installs the Git hook into `.git/hooks/pre-commit`.

```bash
guardian install
```

Install into `commit-msg` instead:

```bash
guardian install --commit-msg
```

### `guardian uninstall`

Removes Guardian-installed hook blocks from `pre-commit` and `commit-msg`.

### `guardian run`

Runs the review manually.

```bash
guardian run
```

#### Run modes

Guardian supports four mutually exclusive modes that control which files are reviewed:

| Mode | Command | Files reviewed |
|------|---------|----------------|
| Staged (default) | `guardian run` | Files in the git staging area (`git diff --cached`) |
| All | `guardian run --all` | All tracked files in the repository (`git ls-files`) |
| PR | `guardian run --pr-mode` | Files changed against the base branch |
| CI | `guardian run --ci` | Files changed in the last commit |

Default (staged) mode is the fastest and recommended for day-to-day use as a pre-commit hook — it only reviews what you are about to commit.

`--all` mode is useful for one-off full-codebase audits. It reads files directly from the working tree rather than the git index, so it is faster for large repos. The cache still applies, so unchanged files are skipped automatically.

#### Options

| Option | Description |
|--------|-------------|
| `--no-cache` | Disable cache for this run |
| `--pr-mode` | Review files changed against the base branch |
| `--ci` | Review files changed in the last commit |
| `--all` | Review all tracked files in the repository |

### `guardian cache status`

Shows cache status for the current project.

### `guardian cache clear`

Clears the current project cache.

### `guardian cache clear-all`

Clears all Guardian cache data.

---

## Hook Behavior

After installation, Guardian adds a hook block that runs:

```bash
npx guardian run || exit 1
```

If the provider returns:

- `STATUS: PASSED` → the commit continues
- `STATUS: FAILED` → the commit is blocked
- ambiguous output → behavior depends on `STRICT_MODE`

---

## Cache Behavior

Guardian stores cache data under:

```
~/.cache/guardian
```

The cache is keyed by file content hash and invalidates automatically when:

- your rules file changes
- your project `.guardian` changes

File reads are parallelized, so the cache check and content loading for all files happen concurrently — this significantly reduces wait time when many files are staged.

---

## Provider Requirements

Guardian shells out to installed provider CLIs. The selected provider must already be installed and available in `PATH`.

Examples:

- `claude`
- `gemini`
- `opencode`
- `codex`
- `antigravity`

---

## Author

**Jose Cortez**

- GitHub: [@JoseCortezz25](https://github.com/JoseCortezz25)

---

<div align="center">

**Built with TypeScript for AI-assisted code quality enforcement**

[⬆ Back to Top](#guardian)

</div>
