import { TerminalSquare, Zap } from 'lucide-react';
import { landingMessages } from '@/config/messages';

const { bento } = landingMessages;

export function BentoGrid() {
  return (
    <section className="mx-auto grid w-full max-w-[1200px] grid-cols-1 border-x border-t border-neutral-200 bg-white md:grid-cols-3">
      {/* Row 1 */}
      <div className="flex flex-col border-b border-neutral-200 p-8 md:border-r">
        <h3 className="mb-2 text-lg font-bold text-black">
          {bento.providers.title}
        </h3>
        <p className="mb-8 flex-1 text-sm text-neutral-500">
          {bento.providers.description}
        </p>
        <div className="mt-auto rounded-lg border border-neutral-200 bg-neutral-50 p-4 font-mono text-xs text-neutral-600">
          {bento.providers.code}
        </div>
      </div>

      <div className="flex flex-col border-b border-neutral-200 p-8 md:border-r">
        <h3 className="mb-2 text-lg font-bold text-black">
          {bento.caching.title}
        </h3>
        <p className="mb-6 flex-1 text-sm text-neutral-500">
          {bento.caching.description}
        </p>
        <div className="mt-auto flex items-center gap-2 rounded-lg border border-blue-100 bg-blue-50/50 p-4 font-mono text-xs text-neutral-500">
          <Zap className="h-4 w-4 text-blue-500" />
          <span>{bento.caching.badge}</span>
        </div>
      </div>

      <div className="flex flex-col border-b border-neutral-200 p-8">
        <h3 className="mb-2 text-lg font-bold text-black">
          {bento.agentsMd.title}
        </h3>
        <p className="mb-6 flex-1 text-sm text-neutral-500">
          {bento.agentsMd.description}
        </p>
        <div className="mt-auto overflow-hidden rounded-lg bg-neutral-900 p-4 font-mono text-xs text-neutral-300">
          <span className="text-neutral-500">## Rules</span>
          <br />
          - Ensure all APIs are documented
          <br />- Reject SQL injection vectors
        </div>
      </div>

      {/* Row 2 */}
      <div className="flex flex-col border-b border-neutral-200 p-8 md:border-r">
        <h3 className="mb-2 text-lg font-bold text-black">
          {bento.cliCore.title}
        </h3>
        <p className="mb-8 text-sm text-neutral-500">
          {bento.cliCore.description}
        </p>
        <button className="mt-auto w-fit rounded-md bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-800">
          {bento.cliCore.cta}
        </button>
        <div className="mt-8 border-t border-neutral-200 pt-6">
          <p className="mb-4 text-xs font-semibold tracking-widest text-neutral-500 uppercase">
            {bento.cliCore.scriptsLabel}
          </p>
          <div className="flex flex-wrap gap-2">
            {(['init', 'install', 'run', 'cache'] as const).map(script => (
              <span
                key={script}
                className="flex items-center gap-1.5 rounded border border-neutral-200 bg-neutral-100 px-2.5 py-1 font-mono text-xs text-neutral-600"
              >
                <TerminalSquare className="h-3 w-3" />
                {script}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Hook execution — spans 2 cols */}
      <div className="flex flex-col border-b border-neutral-200 bg-neutral-50 md:col-span-2">
        <div className="relative flex w-full flex-1 flex-col items-center justify-center p-8">
          <div className="absolute top-4 right-4 text-[10px] font-bold tracking-widest text-neutral-400 uppercase">
            {bento.hookExecution.title}
          </div>
          <div className="flex w-full max-w-lg flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white text-sm shadow-sm">
            <div className="flex items-center justify-between border-b border-neutral-100 bg-neutral-50 px-4 py-3">
              <span className="font-mono text-xs font-semibold text-neutral-600">
                {bento.hookExecution.hookLabel}
              </span>
              <span className="text-xs text-neutral-400">
                {bento.hookExecution.strictMode}
              </span>
            </div>
            <div className="space-y-4 p-4 font-mono text-xs">
              <div className="flex items-start gap-4">
                <span className="mt-0.5 text-neutral-400">&gt;</span>
                <p className="font-semibold text-black">
                  npx guardian-cli run || exit 1
                </p>
              </div>
              <div className="space-y-2 border-l-2 border-neutral-200 pl-6 text-neutral-600">
                <p>Loading config from .guardian...</p>
                <p>Found 2 staged files matching *.ts</p>
                <p className="animate-pulse text-blue-600">
                  Requesting analysis from Claude...
                </p>
                <div className="mt-2 inline-block rounded border border-green-200 bg-green-50 p-2 text-green-700">
                  ✓ STATUS: PASSED
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
