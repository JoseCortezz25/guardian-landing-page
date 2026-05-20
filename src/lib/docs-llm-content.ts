import { docsMessages, githubUrls, packageUrls } from '@/config/messages';

const codeBlock = (content: string, language = 'bash') =>
  ['```' + language, content, '```'].join('\n');

const bulletList = (items: string[]) => items.map((item) => `- ${item}`).join('\n');

const orderedList = (items: string[]) =>
  items.map((item, index) => `${index + 1}. ${item}`).join('\n');

const introduction = docsMessages.introduction;
const installation = docsMessages.installation;
const quickStart = docsMessages.quickStart;
const configuration = docsMessages.configuration;
const api = docsMessages.api;
const skills = docsMessages.skills;
const changelog = docsMessages.changelog;
const skillInstallationExamples = Object.values(skills.installation.examples).filter(
  (example): example is Exclude<(typeof skills.installation.examples)[keyof typeof skills.installation.examples], string> =>
    typeof example === 'object'
);

export const docsLlmContent = {
  introduction: [
    `# ${introduction.title}`,
    '',
    '## Summary',
    `guardian-cli is a framework for ${introduction.descriptionHighlight} that runs natively inside Git hooks.`,
    '',
    `## ${introduction.whatIsGuardian.title}`,
    introduction.whatIsGuardian.p1,
    `${introduction.whatIsGuardian.p2Bold} ${introduction.whatIsGuardian.p2}`,
    introduction.whatIsGuardian.p3,
    introduction.whatIsGuardian.p4,
    '',
    `## ${introduction.features.title}`,
    bulletList(Object.values(introduction.features.items)),
    '',
    `## ${introduction.howGuardianWorks.title}`,
    `### ${introduction.howGuardianWorks.step1.title}`,
    introduction.howGuardianWorks.step1.description,
    codeBlock(
      [
        '# AGENTS.md',
        '## Global Rules',
        '- Prevent API endpoints from returning raw database errors.',
        '- Check UI guidelines: `docs/ui-rules.md`',
        '- All public functions must have JSDoc comments.'
      ].join('\n'),
      'md'
    ),
    `### ${introduction.howGuardianWorks.step2.title}`,
    introduction.howGuardianWorks.step2.description,
    codeBlock(
      [
        'git commit -m "feat: add user auth"',
        '> Guardian intercepting pre-commit hook...',
        '> Provider: claude — analyzing 4 staged files',
        '> Cache: 2 hits, 2 files sent for review'
      ].join('\n')
    ),
    `### ${introduction.howGuardianWorks.step3.title}`,
    introduction.howGuardianWorks.step3.description,
    bulletList([
      'STATUS: PASSED — commit applies instantly and the result is cached.',
      'STATUS: FAILED — commit is blocked before reaching origin.'
    ])
  ].join('\n'),
  installation: [
    `# ${installation.title}`,
    '',
    installation.description,
    '',
    `## ${installation.requirements.title}`,
    installation.requirements.description,
    bulletList(Object.values(installation.requirements.items)),
    '',
    `## ${installation.globalInstall.title}`,
    installation.globalInstall.description,
    codeBlock('npm install -g @ajosecortes/guardian-cli'),
    '',
    `### ${installation.verify.title}`,
    installation.verify.description,
    codeBlock('guardian --help'),
    '',
    `## ${installation.providerCLIs.title}`,
    installation.providerCLIs.description,
    bulletList([
      'Claude — CLI name: claude — install info: anthropic.com/claude-code',
      'Gemini — CLI name: gemini — install info: ai.google.dev/gemini-api/docs',
      'OpenCode — CLI name: opencode — install info: opencode.ai',
      'Codex — CLI name: codex — install info: developers.openai.com/codex/quickstart'
    ]),
    installation.providerCLIs.note,
    '',
    `## ${installation.localDev.title}`,
    installation.localDev.description,
    codeBlock(
      ['git clone https://github.com/JoseCortezz25/guardian.git', 'cd guardian', 'npm install', 'npm run build', '# Output: dist/cli.mjs (built with tsup)'].join('\n')
    ),
    `### ${installation.localDev.scripts.title}`,
    bulletList([
      `npm run build — ${installation.localDev.scripts.build}`,
      `npm test — ${installation.localDev.scripts.test}`,
      `npm run test:watch — ${installation.localDev.scripts.testWatch}`,
      `npm run lint — ${installation.localDev.scripts.lint}`,
      `npm run format — ${installation.localDev.scripts.format}`
    ])
  ].join('\n'),
  quickStart: [
    `# ${quickStart.title}`,
    '',
    quickStart.description,
    '',
    `## ${quickStart.step1.title}`,
    quickStart.step1.description,
    `Package: ${packageUrls.npm}`,
    bulletList(Object.values(quickStart.step1.requirements)),
    bulletList(
      Object.values(quickStart.step1.methods).map(
        (method) => `${method.title}: ${method.description}\n${codeBlock(method.command)}`
      )
    ),
    `Tip: ${quickStart.step1.tip}`,
    '',
    `## ${quickStart.step2.title}`,
    quickStart.step2.description,
    codeBlock(quickStart.step2.verifyCommand),
    codeBlock(
      [quickStart.step2.initCommand, '> Launches the interactive setup flow and finishes with a preview run'].join('\n')
    ),
    bulletList(Object.values(quickStart.step2.files)),
    '',
    `## ${quickStart.step3.title}`,
    quickStart.step3.description,
    bulletList(Object.values(quickStart.step3.flow)),
    `Tip: ${quickStart.step3.tip}`,
    '',
    `## ${quickStart.step4.title}`,
    quickStart.step4.description,
    codeBlock(
      [
        '# AGENTS.md',
        '## Global Rules',
        '- Never expose raw database errors in API responses.',
        '- All exported functions must have JSDoc comments.',
        '- UI components must follow: `docs/ui-rules.md`',
        '',
        '## TypeScript',
        '- No use of the any type. Use unknown instead.',
        '- All async functions must handle their errors explicitly.'
      ].join('\n'),
      'md'
    ),
    '',
    `## ${quickStart.step5.title}`,
    quickStart.step5.description,
    codeBlock(
      [
        'git add .',
        'git commit -m "feat: initial setup"',
        '> Guardian running pre-commit review...',
        '> Analyzing 3 staged files with claude',
        '> STATUS: PASSED — commit applied'
      ].join('\n')
    ),
    bulletList([
      `STATUS: PASSED — ${quickStart.step5.pass}`,
      `STATUS: FAILED — ${quickStart.step5.fail}`
    ]),
    '',
    `## ${quickStart.nextSteps.title}`,
    bulletList([
      quickStart.nextSteps.configuration,
      quickStart.nextSteps.agentsMd,
      quickStart.nextSteps.providers
    ])
  ].join('\n'),
  configuration: [
    `# ${configuration.title}`,
    '',
    configuration.description,
    '',
    `## ${configuration.precedence.title}`,
    configuration.precedence.description,
    orderedList(Object.values(configuration.precedence.items)),
    '',
    `## ${configuration.guardianFile.title}`,
    configuration.guardianFile.description,
    codeBlock(
      [
        'PROVIDER="claude"',
        'FILE_PATTERNS="*.ts,*.tsx,*.js,*.jsx"',
        'EXCLUDE_PATTERNS="*.test.ts,*.spec.ts,*.stories.tsx"',
        'RULES_FILE="AGENTS.md"',
        'STRICT_MODE="true"',
        'TIMEOUT="300"',
        'CACHE="true"'
      ].join('\n')
    ),
    '',
    `## ${configuration.supportedKeys.title}`,
    bulletList(
      Object.values(configuration.supportedKeys.keys).map(
        (entry) => `${entry.key} — ${entry.description}`
      )
    ),
    '',
    `## ${configuration.envVars.title}`,
    configuration.envVars.description,
    bulletList(
      Object.values(configuration.envVars.vars).map(
        (entry) => `${entry.name} — ${entry.description}`
      )
    ),
    '',
    `## ${configuration.providerValues.title}`,
    configuration.providerValues.description,
    bulletList([
      'PROVIDER="claude"',
      'PROVIDER="gemini"',
      'PROVIDER="opencode"',
      'PROVIDER="codex"',
      'PROVIDER="opencode:anthropic/claude-opus-4"'
    ])
  ].join('\n'),
  api: [
    `# ${api.title}`,
    '',
    api.description,
    '',
    `## ${api.providers.title}`,
    api.providers.description,
    bulletList(Object.values(api.providers.items)),
    '',
    `## ${api.agentsMd.title}`,
    api.agentsMd.description,
    codeBlock(
      [
        '# AGENTS.md',
        '## Backend',
        '- Never expose raw database errors in API responses.',
        '- All public functions must include JSDoc.',
        '- Follow `docs/api-rules.md` for endpoint conventions.'
      ].join('\n'),
      'md'
    ),
    `### ${api.agentsMd.examples.title}`,
    bulletList(Object.values(api.agentsMd.examples.items)),
    '',
    `## ${api.strictMode.title}`,
    api.strictMode.description,
    bulletList([
      `STRICT_MODE="true" — ${api.strictMode.pass}`,
      `STRICT_MODE="false" — ${api.strictMode.fail}`
    ]),
    '',
    `## ${api.cli.title}`,
    api.cli.description,
    bulletList(
      Object.values(api.cli.commands).map(
        (command) => `${command.name} — ${command.description}`
      )
    )
  ].join('\n'),
  skills: [
    `# ${skills.title}`,
    '',
    skills.description,
    '',
    `## ${skills.whatAreSkills.title}`,
    skills.whatAreSkills.p1,
    skills.whatAreSkills.p2,
    '',
    `## ${skills.installation.title}`,
    skills.installation.description,
    bulletList(
      skillInstallationExamples.map(
        (example) => `${example.title} — ${example.description}\n${codeBlock(example.command)}`
      )
    ),
    skills.installation.note,
    '',
    `## ${skills.installation.compatibility.title}`,
    skills.installation.compatibility.description,
    bulletList(
      Object.values(skills.installation.compatibility.pillars).map(
        (pillar) => `${pillar.title} — ${pillar.description}`
      )
    ),
    '',
    `## ${skills.githubLink.label}`,
    `${skills.githubLink.description}: ${githubUrls.skills}`
  ].join('\n'),
  changelog: [
    `# ${changelog.title}`,
    '',
    changelog.description,
    '',
    '## Latest Release',
    `${changelog.latest.version} — ${changelog.latest.date}`,
    changelog.latest.summary,
    `Package URL: ${packageUrls.npm}`,
    '',
    `## ${changelog.releases.title}`,
    bulletList(
      Object.values(changelog.releases.items).map(
        (release) => `${release.version} — ${release.date} — ${release.summary}`
      )
    ),
    '',
    `Note: ${changelog.note}`
  ].join('\n')
} as const;
