export const landingMessages = {
  nav: {
    brand: 'Guardian',
    integration: 'Integration',
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
    providers: { value: '3+', label: 'Providers' },
    cacheHits: { value: '0ms', label: 'Cache Hits' },
    localHooks: { value: '100%', label: 'Local Hooks' }
  },
  features: {
    heading: 'The Git-native Review Toolkit',
    description:
      'The open-source CLI designed to help teams enforce formatting, security, and logic rules on every commit using Claude, Gemini, or OpenCode.'
  },
  bento: {
    providers: {
      title: 'Configurable providers.',
      description:
        'Switch between Claude, Gemini, or OpenCode via a simple environment variable or dotfile configuration.',
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
        'A set of zero-config commands to initialize, run, and manage your local cache efficiently.',
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
    description: 'Get started with the CLI running in your repository.',
    installCommand: '$ npm i -g @ajosecortes/guardian-cli',
    cards: {
      init: {
        title: 'Init Configuration',
        description:
          'Generates default .guardian and AGENTS.md rule files at the root of your project.',
        command: 'guardian init'
      },
      install: {
        title: 'Install Hook',
        description:
          'Installs the automation script into .git/hooks/pre-commit to run on every commit.',
        command: 'guardian install'
      },
      run: {
        title: 'Manual Execution',
        description:
          'Scan files manually without committing. Use --no-cache or --ci flags as needed.',
        command: 'guardian run --no-cache'
      }
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
  issues: 'https://github.com/JoseCortezz25/guardian/issues'
} as const;
