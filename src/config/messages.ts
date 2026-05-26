export const landingMessages = {
  nav: {
    brand: 'Guardian',
    integration: 'Integration',
    docs: 'Docs',
    providers: 'Providers',
    feedback: 'Feedback',
    starOnGithub: 'Star on GitHub'
  },
  hero: {
    heading: 'Universal AI gatekeeper for your codebase',
    description:
      'A unified TypeScript CLI for building AI-assisted code review hooks with smart caching, multi-provider fallbacks, and AGENTS.md support.',
    tabLabel: 'Local Hooks',
    installCommand: '$ npm install -g @ajosecortes/guardian-cli',
    configLabel: '.guardian config',
    terminalLabel: 'Local Terminal',
    supportedProviders: 'supported Providers'
  },
  stats: {
    providers: { value: '5+', label: 'Providers' },
    cacheHits: { value: '0ms', label: 'Cache Hits' },
    localHooks: { value: '100%', label: 'Local Hooks' }
  },
  features: {
    heading: 'The Git-native Review Toolkit',
    description:
      'The open-source CLI designed to help teams enforce formatting, security, and logic rules on every commit using Claude, Gemini, OpenCode, Codex, or Antigravity.'
  },
  bento: {
    providers: {
      title: 'Configurable providers.',
      description:
        'Switch between Claude, Gemini, OpenCode, Codex, or Antigravity via a simple environment variable or dotfile configuration.',
      code: 'GUARDIAN_PROVIDER="claude"'
    },
    caching: {
      title: 'Content-based caching.',
      description:
        'Fast execution. Guardian caches successful reviews via content hashes, entirely skipping unchanged files.',
      badge: 'Cache invalidates only on edits'
    },
    agentsMd: {
      title: 'AGENTS.md driven.',
      description:
        'Write instructions naturally in Markdown. Guardian extracts instructions and embeds them as system prompts.'
    },
    cliCore: {
      title: 'CLI Core',
      description:
        'Commands to initialize, install, run, uninstall, and manage cache — all with zero external dependencies.',
      cta: 'View CLI Args',
      scriptsLabel: 'Available Scripts'
    },
    hookExecution: {
      title: 'Hook Execution',
      hookLabel: 'pre-commit hook',
      strictMode: 'Strict Mode'
    }
  },
  integration: {
    heading: 'Integrate quickly',
    description: 'Get Guardian running in your repository with a single guided command.',
    installCommand: '$ npm i -g @ajosecortes/guardian-cli',
    command: 'guardian setup',
    commandTitle: 'One command, guided onboarding',
    commandDescription:
      'guardian setup replaces running init + install separately. It walks you through provider selection, hook installation, and a final preview run so you can confirm everything works before your first commit.',
    steps: {
      choose: 'Choose the rules file name and provider: Claude, Gemini, OpenCode, Codex, or Antigravity.',
      configure:
        'Generate .guardian and AGENTS.md, then pick whether to install the hook in pre-commit or commit-msg.',
      preview:
        'Run a guardian run preview at the end. If .guardian already exists, Guardian detects it and asks whether you want to reconfigure.'
    }
  },
  footer: {
    resourcesTitle: 'Resources',
    links: {
      integration: 'Integration',
      providers: 'Providers',
      githubRepo: 'GitHub Repository',
      issues: 'Issues & Feedback'
    },
    brand: 'Guardian',
    author: 'By @josecortezz25',
    copyright: `© ${new Date().getFullYear()} Guardian Open Source.`
  }
} as const;

export const githubUrls = {
  repo: 'https://github.com/JoseCortezz25/guardian',
  issues: 'https://github.com/JoseCortezz25/guardian/issues',
  skills: 'https://github.com/JoseCortezz25/guardian/tree/main/skills'
} as const;

export const packageUrls = {
  npm: 'https://www.npmjs.com/package/@ajosecortes/guardian-cli'
} as const;

export const docsMessages = {
  nav: {
    docs: 'Docs',
    integration: 'Integration',
    feedback: 'Feedback',
    starOnGithub: 'Star on GitHub'
  },
  sidebar: {
    sections: {
      gettingStarted: 'Getting Started',
      reference: 'Reference',
      skills: 'Skills'
    },
    links: {
      introduction: 'Introduction',
      installation: 'Installation',
      quickStart: 'Quick Start',
      configuration: 'Configuration',
      changelog: 'Changelog',
      api: 'API',
      skills: 'Skills'
    }
  },
  introduction: {
    title: 'Introduction',
    copyPage: 'Copy Page',
    descriptionHighlight: 'AI-assisted code review',
    whatIsGuardian: {
      title: 'What is Guardian?',
      p1: 'Most code review integrations treat the process as asynchronous. Developers build features, commit the code, push to origin, and then wait for CI pipelines to run or for humans to review. The feedback loop itself is slow.',
      p2Bold: 'Guardian is different.',
      p2: 'The AI evaluates the code exactly where you write it. It inspects staged files and intercepts your commits, builds a context-aware prompt relative to your changes, and evaluates your code against project rules in real time.',
      p3: 'The challenge is that unconstrained AI output during local development can be unpredictable. It can hallucinate issues, trigger false positives, or misunderstand complex logic. You need a way to let AI be creative with feedback while keeping it constrained to deterministic exit codes bounding your projects.',
      p4: 'That is what guardian-cli does. You define a collection of rules. AI runs your staged diff constrained to that logic. Our hooks process the result natively — blocking the commit or passing it gracefully — with content-based caching and no arbitrary latency.',
      p4RulesBold: 'collection of rules'
    },
    features: {
      title: 'Features',
      items: {
        hookIntegration: 'Git hook integration for pre-commit workflows',
        multiProvider:
          'Configurable provider support: Claude, Gemini, OpenCode, Codex, and Antigravity',
        projectConfig:
          'Project-level and global configuration via .guardian files',
        agentsMd:
          'Rule loading from AGENTS.md with support for referenced markdown files',
        cache:
          'Content-based cache to skip unchanged files — zero latency on re-runs',
        parallel: 'Parallel file reading for faster reviews on large commits',
        cliCommands:
          'CLI commands for setup, init, install, run, uninstall, and cache management'
      }
    },
    howGuardianWorks: {
      title: 'How Guardian Works',
      step1: {
        title: '1. Define your rules',
        description:
          'A project declares what AI must verify using standard markdown files, such as AGENTS.md.'
      },
      step2: {
        title: '2. AI evaluates the commit',
        description:
          'When you run git commit, the CLI runs analysis using your preferred provider CLI (Claude, Gemini, OpenCode, Codex, or Antigravity).'
      },
      step3: {
        title: '3. Your workflow continues',
        description:
          'If the analysis yields STATUS: PASSED, the commit applies instantly. The unchanged content is hashed and cached. On failure, the commit is blocked before it reaches origin.'
      }
    }
  },
  installation: {
    title: 'Installation',
    copyPage: 'Copy Page',
    description:
      'Install guardian-cli globally to enable AI-assisted code reviews on any Git repository on your machine.',
    requirements: {
      title: 'Requirements',
      description:
        'Before installing Guardian, make sure your environment meets these prerequisites.',
      items: {
        node: 'Node.js >= 22',
        git: 'A Git repository to protect',
        provider:
          'At least one supported provider CLI installed and authenticated'
      }
    },
    globalInstall: {
      title: 'Global Installation',
      description:
        'The recommended way to install Guardian is globally via npm. This makes the guardian command available system-wide.'
    },
    verify: {
      title: 'Verify the installation',
      description: 'Confirm the CLI is available by running:'
    },
    providerCLIs: {
      title: 'Provider CLIs',
      description:
        'Guardian does not call AI APIs directly — it shells out to an installed provider CLI. You must have at least one of the following installed and authenticated before using Guardian.',
      note: 'Guardian will fail at runtime if the configured provider CLI is not found in PATH.'
    },
    localDev: {
      title: 'Local Development',
      description:
        'To build from source or contribute to Guardian, clone the repository and install dependencies.',
      scripts: {
        title: 'Available scripts',
        build: 'Compile TypeScript to dist/',
        test: 'Run the test suite',
        testWatch: 'Run tests in watch mode',
        lint: 'Run ESLint',
        format: 'Format with Prettier'
      }
    },
    toc: {
      title: 'On This Page',
      items: {
        requirements: 'Requirements',
        globalInstall: 'Global Installation',
        providerCLIs: 'Provider CLIs',
        localDev: 'Local Development'
      }
    },
    pagination: {
      prev: 'Introduction',
      next: 'Quick Start'
    }
  },
  quickStart: {
    title: 'Quick Start',
    copyPage: 'Copy Page',
    description:
      'Install Guardian from npm, connect it to your repository, and run your first AI-powered pre-commit review in a few minutes.',
    step1: {
      title: '1. Install Guardian from npm',
      description:
        'Guardian is published as @ajosecortes/guardian-cli and exposes the guardian binary. Choose the installation mode that best fits your workflow.',
      packageLabel: 'npm package',
      packageHrefLabel: 'Open npm package',
      requirements: {
        node: 'Node.js 22 or newer',
        repository: 'A Git repository you want to protect',
        provider: 'At least one supported provider CLI installed and authenticated'
      },
      methods: {
        global: {
          title: 'Global install',
          description:
            'Recommended when you want the guardian command available in any repository on your machine.',
          command: 'npm install -g @ajosecortes/guardian-cli'
        },
        npx: {
          title: 'One-off with npx',
          description:
            'Useful when you want to try Guardian without keeping a global installation on your system.',
          command: 'npx @ajosecortes/guardian-cli setup'
        },
        local: {
          title: 'Project dependency',
          description:
            'Install it inside a repository when you prefer versioning the CLI with the project itself.',
          command: 'npm install -D @ajosecortes/guardian-cli'
        }
      },
      tip: 'If your goal is the smoothest onboarding, install globally first. It gives you a stable guardian command for setup, run, and future reconfiguration.'
    },
    step2: {
      title: '2. Verify the CLI and run guardian setup',
      description:
        'After installation, confirm the binary is available and then run guardian setup inside your Git repository. This interactive flow creates your configuration, installs the hook you choose, and finishes with a preview run to confirm everything is wired correctly.',
      verifyCommand: 'guardian --help',
      initCommand: 'guardian setup',
      files: {
        guardian:
          '.guardian — your project configuration (provider, patterns, cache settings)',
        agentsMd:
          'AGENTS.md — review rules written in plain Markdown for the AI to follow'
      }
    },
    step3: {
      title: '3. Follow the guided setup flow',
      description:
        'guardian setup guides you through three decisions so you do not need to remember multiple commands or flags during onboarding.',
      flow: {
        choose: 'Choose the rules file name and provider: Claude, Gemini, OpenCode, Codex, or Antigravity.',
        configure:
          'Generate .guardian and AGENTS.md, then decide whether Guardian should hook into pre-commit or commit-msg.',
        preview:
          'Finish with a preview guardian run. If a .guardian file already exists, Guardian detects it and asks whether you want to reconfigure.'
      },
      tip: 'If Guardian detects an existing .guardian file, it switches to reconfiguration mode instead of blindly overwriting your setup.'
    },
    step4: {
      title: '4. Tune your review rules',
      description:
        'Once setup finishes, open AGENTS.md and .guardian to define what the AI must enforce on every commit and which provider should execute the review. Rules are plain Markdown — no special syntax required. You can reference other files using backtick notation.'
    },
    step5: {
      title: '5. Make your first commit',
      description:
        'Stage your changes and commit as normal. Guardian intercepts the commit, analyzes your staged files against your rules, and returns one of two outcomes:',
      pass: 'STATUS: PASSED — the commit goes through immediately',
      fail: 'STATUS: FAILED — the commit is blocked with feedback'
    },
    nextSteps: {
      title: 'Next Steps',
      configuration: 'Customize the .guardian configuration file',
      agentsMd: 'Learn to write effective AGENTS.md rules',
      providers: 'Explore available provider options'
    },
    toc: {
      title: 'On This Page',
      items: {
        step1: '1. Install from npm',
        step2: '2. Verify and run setup',
        step3: '3. Follow the guided flow',
        step4: '4. Tune your rules',
        step5: '5. Make your first commit',
        nextSteps: 'Next Steps'
      }
    },
    pagination: {
      prev: 'Installation',
      next: 'Configuration'
    }
  },
  configuration: {
    title: 'Configuration',
    copyPage: 'Copy Page',
    description:
      'Guardian loads configuration from multiple sources with a well-defined precedence order. Understanding this order lets you override settings per-project or globally without touching code.',
    precedence: {
      title: 'Configuration Precedence',
      description:
        'When Guardian starts, it merges configuration sources in this order. Later sources override earlier ones.',
      items: {
        env: 'Environment variables (highest priority)',
        project: 'Project .guardian file at the repository root',
        global: 'Global config at ~/.config/guardian/config',
        defaults: 'Built-in defaults (lowest priority)'
      }
    },
    guardianFile: {
      title: 'The .guardian File',
      description:
        'The .guardian file is a plain key=value dotfile at the root of your repository. Running guardian setup or guardian init generates a default version you can customize.'
    },
    supportedKeys: {
      title: 'Supported Configuration Keys',
      keys: {
        provider: {
          key: 'PROVIDER',
          description: 'The AI provider CLI to use. Defaults to claude.'
        },
        filePatterns: {
          key: 'FILE_PATTERNS',
          description:
            'Comma-separated glob patterns of files to include in the review.'
        },
        excludePatterns: {
          key: 'EXCLUDE_PATTERNS',
          description: 'Comma-separated glob patterns to exclude from review.'
        },
        rulesFile: {
          key: 'RULES_FILE',
          description:
            'Path to the rules file Guardian reads. Defaults to AGENTS.md.'
        },
        strictMode: {
          key: 'STRICT_MODE',
          description:
            'When true, ambiguous or incomplete provider output blocks the commit.'
        },
        timeout: {
          key: 'TIMEOUT',
          description:
            'Maximum seconds to wait for the provider response before failing. Default: 300.'
        },
        prBaseBranch: {
          key: 'PR_BASE_BRANCH',
          description:
            'The base branch used in --pr-mode to determine changed files.'
        },
        cache: {
          key: 'CACHE',
          description: 'Enable or disable content-based caching. Default: true.'
        }
      }
    },
    envVars: {
      title: 'Environment Variables',
      description:
        'Any configuration key can be overridden at runtime via environment variables. This is useful for CI/CD pipelines or one-off runs.',
      vars: {
        provider: {
          name: 'GUARDIAN_PROVIDER',
          description: 'Override the active provider'
        },
        timeout: {
          name: 'GUARDIAN_TIMEOUT',
          description: 'Override the provider timeout in seconds'
        },
        strictMode: {
          name: 'GUARDIAN_STRICT_MODE',
          description: 'Override strict mode (true/false)'
        },
        rulesFile: {
          name: 'GUARDIAN_RULES_FILE',
          description: 'Override the rules file path'
        },
        cache: {
          name: 'GUARDIAN_CACHE',
          description: 'Override caching (true/false)'
        }
      }
    },
    providerValues: {
      title: 'Provider Values',
      description:
        'The PROVIDER key accepts these values. OpenCode also supports the colon notation when you want to target a specific model.'
    },
    toc: {
      title: 'On This Page',
      items: {
        precedence: 'Configuration Precedence',
        guardianFile: 'The .guardian File',
        supportedKeys: 'Supported Keys',
        envVars: 'Environment Variables',
        providerValues: 'Provider Values'
      }
    },
    pagination: {
      prev: 'Quick Start',
      next: 'API'
    }
  },
  api: {
    title: 'API',
    copyPage: 'Copy Page',
    description:
      'Guardian keeps its surface area intentionally small: one rules file, one project config, a provider contract, and a focused set of CLI commands. This page explains how those pieces fit together.',
    providers: {
      title: 'Providers',
      description:
        'Guardian does not call model APIs directly. It shells out to a provider CLI already installed on your machine, then interprets the result as a local quality gate.',
      items: {
        claude:
          'Claude: use the claude CLI when you want strong instruction following and high-quality review output.',
        gemini:
          'Gemini: use the gemini CLI if your team already works inside the Google AI toolchain.',
        opencode:
          'OpenCode: use opencode when you want Guardian to run through an OpenCode-compatible local workflow.',
        codex:
          'Codex: use the codex CLI when you want Guardian to run with Codex from your local terminal workflow.',
        antigravity:
          'Antigravity: use the antigravity CLI when your team runs reviews through an Antigravity-based local workflow.',
        modelRouting:
          'Provider values can be generic, like opencode, or fully qualified, like opencode:anthropic/claude-opus-4.'
      }
    },
    agentsMd: {
      title: 'AGENTS.md',
      description:
        'AGENTS.md is the contract between your team and the AI reviewer. Guardian reads it by default and appends referenced markdown files when you use backtick paths.',
      examples: {
        title: 'What belongs in AGENTS.md',
        items: {
          architecture: 'Architecture rules: layering, repository patterns, naming, export conventions.',
          quality: 'Quality rules: no any, required tests, error handling, accessibility checks.',
          security: 'Security rules: prevent secret leakage, reject unsafe queries, enforce validation.',
          references: 'Context expansion: reference docs like `docs/api-rules.md` or `docs/ui-rules.md` for scoped enforcement.'
        }
      }
    },
    strictMode: {
      title: 'Strict Mode',
      description:
        'STRICT_MODE controls how Guardian behaves when the provider output is incomplete, malformed, or ambiguous.',
      pass: 'When strict mode is true, uncertain output blocks the commit. This is the safest mode for team-wide enforcement.',
      fail: 'When strict mode is false, you can choose a more forgiving workflow, but you accept the risk of unclear AI output slipping through.'
    },
    cli: {
      title: 'CLI Commands',
      description:
        'These commands cover the full Guardian workflow from bootstrapping a repository to reviewing staged changes and managing cache state.',
      commands: {
        setup: {
          name: 'guardian setup',
          description: 'Interactive guided setup: prompts for rules file name, provider, and hook type, then creates .guardian and AGENTS.md and runs a preview. Detects an existing .guardian and offers to reconfigure.'
        },
        init: {
          name: 'guardian init',
          description: 'Creates the default .guardian and AGENTS.md files in the current repository.'
        },
        install: {
          name: 'guardian install',
          description: 'Installs Guardian into .git/hooks/pre-commit so every commit is reviewed automatically.'
        },
        installCommitMsg: {
          name: 'guardian install --commit-msg',
          description: 'Installs the hook into commit-msg instead of pre-commit when that workflow fits better.'
        },
        uninstall: {
          name: 'guardian uninstall',
          description: 'Removes Guardian-managed hook blocks from pre-commit and commit-msg.'
        },
        run: {
          name: 'guardian run',
          description: 'Runs a manual review against staged files.'
        },
        runAll: {
          name: 'guardian run --all',
          description: 'Reviews all tracked files in the repository for one-off full audits.'
        },
        runPrMode: {
          name: 'guardian run --pr-mode',
          description: 'Reviews files changed against the configured base branch.'
        },
        runCi: {
          name: 'guardian run --ci',
          description: 'Reviews files changed in the latest commit, useful for CI jobs.'
        },
        cacheStatus: {
          name: 'guardian cache status',
          description: 'Shows cache state for the current project.'
        },
        cacheClear: {
          name: 'guardian cache clear',
          description: 'Clears the cache for the current project only.'
        },
        cacheClearAll: {
          name: 'guardian cache clear-all',
          description: 'Clears all Guardian cache data from your machine.'
        }
      }
    },
    toc: {
      title: 'On This Page',
      items: {
        providers: 'Providers',
        agentsMd: 'AGENTS.md',
        strictMode: 'Strict Mode',
        cli: 'CLI Commands'
      }
    },
    pagination: {
      prev: 'Configuration',
      next: 'Skills'
    }
  },
  changelog: {
    title: 'Changelog',
    copyPage: 'Copy Page',
    description:
      'A concise release history for the npm package, focused on the milestones that shaped Guardian from the first beta to the latest published build.',
    latest: {
      badge: 'Latest on npm',
      version: '1.2.2',
      date: 'May 25, 2026',
      summary:
        'CLI now bundles React and Ink dependencies directly into the distribution, resolving compatibility issues with projects using React 18. Fixed spawn E2BIG error when processing large projects by routing prompts through stdin instead of CLI arguments.'
    },
    releases: {
      title: 'Release Timeline',
      items: {
        v122: {
          version: '1.2.2',
          date: 'May 25, 2026',
          summary:
            'CLI now bundles React and Ink dependencies directly into the distribution, resolving compatibility issues with projects using React 18. Fixed spawn E2BIG error when processing large projects by routing prompts through stdin instead of CLI arguments.'
        },
        v121: {
          version: '1.2.1',
          date: 'May 23, 2026',
          summary:
            'Introduces .guardianignore file support using familiar .gitignore-style patterns to exclude files from reviews.'
        },
        v120: {
          version: '1.2.0',
          date: 'May 21, 2026',
          summary:
            "Adds Antigravity provider support, leveraging Google's Go-based terminal agent announced at Google I/O 2026."
        },
        v110: {
          version: '1.1.0',
          date: 'May 19, 2026',
          summary:
            'Introduces guardian setup interactive wizard combining configuration, installation, and initial review in a unified flow. Upgraded build tooling from TypeScript to tsup/esbuild for ESM compatibility.'
        },
        beta4: {
          version: '1.0.0-beta.4',
          date: 'May 4, 2026',
          summary:
            'New guardian update command for automatic version checking. Version flag now supports both -v and -V syntax. Markdown file resolution improved for subdirectories.'
        },
        beta3: {
          version: '1.0.0-beta.3',
          date: 'May 4, 2026',
          summary:
            'Guardian-install and guardian-implement skills introduced. Enhanced markdown reference resolution for nested directories.'
        },
        stable: {
          version: '1.0.0',
          date: 'April 21, 2026',
          summary:
            'First stable 1.0.0 release published to npm for the Guardian CLI.'
        },
        beta1: {
          version: '1.0.0-beta.1',
          date: 'April 20, 2026',
          summary:
            'Initial public beta release of @ajosecortes/guardian-cli.'
        }
      }
    },
    note: 'For implementation details and day-to-day usage changes, pair this page with the API and Configuration docs.',
    toc: {
      title: 'On This Page',
      items: {
        latest: 'Latest Release',
        timeline: 'Release Timeline'
      }
    },
    pagination: {
      prev: 'Skills'
    }
  },
  skills: {
    title: 'Skills',
    copyPage: 'Copy Page',
    description:
      'Guardian ships a collection of reusable skills — structured conventions and patterns that any compatible coding agent can load when it starts working in your codebase.',
    whatAreSkills: {
      title: 'What are Skills?',
      p1: 'Skills are Markdown files that encode architectural decisions, naming conventions, framework patterns, and best practices specific to a tech stack. When a coding agent supports skills, those files become executable context — first-class constraints, not vague suggestions.',
      p2: 'Guardian keeps the format agent-agnostic on purpose. The goal is not to depend on a single vendor, but to make the same standards portable across Claude Code, OpenCode, and any other agent runtime that supports user-installed or project-local skills.'
    },
    installation: {
      title: 'Installation',
      description:
        'Install the skill folders in the location your coding agent expects. Some runtimes use a global directory, others support project-local skills. Guardian works with either model as long as the agent can load Markdown-based skills.',
      note: 'Do not couple your workflow to a single vendor path. Keep the skills in version control, then copy or link them into the runtime-specific directory only when your agent requires it.',
      examples: {
        title: 'Common installation patterns',
        global: {
          title: 'Recommended installer command',
          description:
            'Use the shared installer to fetch and register the Guardian skills in the runtime your coding agent already knows how to use.',
          command: 'npx skills add JoseCortezz25/guardian'
        },
        project: {
          title: 'Project-local skills',
          description:
            'Useful when your agent can load skills directly from the repository, keeping conventions versioned with the codebase.',
          command: 'mkdir -p ./.agent/skills && cp -R ./skills/* ./.agent/skills/'
        },
        link: {
          title: 'Symlink to avoid duplication',
          description:
            'Useful when you want one source of truth in the repository and a runtime-specific path that points to it.',
          command: 'ln -s "$(pwd)/skills" ~/.opencode/skills/guardian'
        }
      },
      compatibility: {
        title: 'Compatibility rule',
        description:
          'If an agent can discover and load Markdown skill folders, Guardian skills can be used there. The runtime path changes, but the skill content and conventions stay the same.',
        pillars: {
          runtime: {
            title: 'Runtime path varies',
            description:
              'Claude, OpenCode, and other agents may use different directories.'
          },
          format: {
            title: 'Skill format stays stable',
            description:
              'The Markdown rules remain the same across runtimes.'
          },
          source: {
            title: 'Repository is the source',
            description:
              'Keep the canonical version in Git and expose it where your agent expects.'
          }
        }
      }
    },
    githubLink: {
      label: 'Browse skills in the repository',
      description: 'Use the repository as the source of truth, then expose those files to the agent runtime you prefer.'
    },
    toc: {
      title: 'On This Page',
      items: {
        whatAreSkills: 'What are Skills?',
        installation: 'Installation',
        compatibility: 'Compatibility'
      }
    },
    pagination: {
      prev: 'API',
      next: 'Changelog'
    }
  },
  toc: {
    title: 'On This Page',
    items: {
      whatIsGuardian: 'What is Guardian?',
      features: 'Features',
      howGuardianWorks: 'How Guardian Works',
      step1: '1. Define your rules',
      step2: '2. AI evaluates the commit',
      step3: '3. Your workflow continues'
    }
  },
  pagination: {
    next: 'Installation'
  }
} as const;
