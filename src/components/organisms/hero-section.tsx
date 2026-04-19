import { CopyButton } from '@/components/atoms/copy-button';
import { landingMessages } from '@/config/messages';

const { hero } = landingMessages;

export function HeroSection() {
  return (
    <section className="mx-auto w-full max-w-5xl px-4 pt-24 pb-16 text-center sm:px-6 lg:px-8">
      <h1 className="mx-auto max-w-4xl font-sans text-5xl font-bold tracking-tight text-neutral-900 sm:text-6xl md:text-7xl">
        {hero.heading}
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
        {hero.description}
      </p>

      <div className="mt-10 flex flex-col items-center gap-6 text-sm">
        <div className="flex items-center gap-6 border-b border-neutral-200 pb-4 text-neutral-500">
          <span className="-mb-[17px] border-b-2 border-black pb-4 font-medium text-black">
            {hero.tabLabel}
          </span>
        </div>

        <div className="flex items-center justify-between rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-sm shadow-sm">
          <code className="mr-8 font-mono text-neutral-600">
            {hero.installCommand}
          </code>
          <CopyButton
            text="npm install -D guardian-cli"
            className="text-neutral-400 transition-colors hover:text-black"
          />
        </div>
      </div>

      {/* Showcase Code Window */}
      <div className="mx-auto mt-16 flex max-w-5xl flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-1 ring-neutral-200/50 md:flex-row">
        {/* Config panel */}
        <div className="flex flex-1 flex-col border-b border-neutral-200 bg-neutral-50/50 p-6 text-left md:border-r md:border-b-0">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex gap-1.5">
              <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <div className="h-2.5 w-2.5 rounded-full bg-amber-400" />
              <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </div>
            <span className="font-mono text-[10px] tracking-widest text-neutral-400 uppercase">
              {hero.configLabel}
            </span>
          </div>
          <div className="space-y-1.5 overflow-x-auto font-mono text-xs text-neutral-600 sm:text-sm">
            <p>
              <span className="text-purple-600">PROVIDER</span>=
              <span className="text-emerald-600">&quot;claude&quot;</span>
            </p>
            <p>
              <span className="text-purple-600">FILE_PATTERNS</span>=
              <span className="text-emerald-600">
                &quot;*.ts,*.tsx,*.js,*.jsx&quot;
              </span>
            </p>
            <p>
              <span className="text-purple-600">RULES_FILE</span>=
              <span className="text-emerald-600">&quot;AGENTS.md&quot;</span>
            </p>
            <p>
              <span className="text-purple-600">STRICT_MODE</span>=
              <span className="text-emerald-600">&quot;true&quot;</span>
            </p>
            <p>
              <span className="text-purple-600">CACHE</span>=
              <span className="text-emerald-600">&quot;true&quot;</span>
            </p>
          </div>
        </div>

        {/* Terminal panel */}
        <div className="relative flex flex-1 flex-col bg-white p-6 text-left">
          <div className="mb-4 flex items-center justify-between">
            <span className="rounded border border-neutral-200 bg-neutral-50 px-2 py-0.5 font-mono text-[10px] tracking-widest text-neutral-400 uppercase">
              {hero.terminalLabel}
            </span>
          </div>
          <div className="relative flex-1 overflow-hidden rounded-lg bg-black p-5 font-mono text-[13px] leading-relaxed text-white shadow-inner">
            <p className="mb-2 text-neutral-400">
              $ git commit -m &quot;add payment gateway&quot;
            </p>
            <p className="mb-1 text-blue-400">
              [Guardian] Analyzing 3 staged files...
            </p>
            <p className="mb-1 text-neutral-400">
              [Guardian] Cache hit for utils.ts
            </p>
            <p className="mb-3 text-blue-400">
              [Guardian] Reviewing api.ts with Claude...
            </p>

            <div className="mb-3 border-l-2 border-red-500 bg-red-500/10 py-1 pl-3">
              <p className="font-bold text-red-400">STATUS: FAILED</p>
              <p className="mt-1 text-neutral-300">
                Violation: Payment processing code lacks required try/catch
                error handling as specified in AGENTS.md rules.
              </p>
            </div>

            <p className="text-neutral-400">
              Commit aborted due to strict mode.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 text-sm text-neutral-500">
        See all{' '}
        <a href="#providers" className="font-medium text-black hover:underline">
          {hero.supportedProviders}
        </a>
      </div>
    </section>
  );
}
