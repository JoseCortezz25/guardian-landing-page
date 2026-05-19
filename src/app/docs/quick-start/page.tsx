import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { CopyButton } from '@/components/atoms/copy-button';
import { docsMessages, packageUrls } from '@/config/messages';
import { docsLlmContent } from '@/lib/docs-llm-content';
import { cn } from '@/lib/utils';

const { quickStart } = docsMessages;
const quickStartMethods = Object.values(quickStart.step1.methods);
const quickStartFlowSteps = Object.values(quickStart.step3.flow);

export default function QuickStartPage() {
  return (
    <>
      {/* Main Content */}
      <main className="flex-1 py-10 lg:py-14 lg:px-12 xl:px-16 min-w-0">
        <div className="w-full max-w-[800px] mx-auto xl:ml-0">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-8 gap-4">
            <h1 className="font-sans text-[32px] sm:text-[40px] font-bold tracking-tight text-neutral-950">
              {quickStart.title}
            </h1>
            <CopyButton
              text={docsLlmContent.quickStart}
              label={quickStart.copyPage}
              copiedLabel="Copied for LLM"
              variant="page"
            />
          </div>

          <p className="text-neutral-600 mb-10 text-[15px] sm:text-[16px] leading-[1.7] max-w-3xl">
            {quickStart.description}
          </p>

          <div className="mb-10 flex flex-col gap-4 rounded-2xl border border-neutral-200 bg-gradient-to-br from-white to-neutral-50 p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-neutral-400">
                {quickStart.step1.packageLabel}
              </p>
              <p className="mt-2 font-mono text-[14px] text-neutral-900">
                @ajosecortes/guardian-cli
              </p>
            </div>
            <Link
              href={packageUrls.npm}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-4 py-2 text-[13px] font-medium text-neutral-700 transition-colors hover:bg-neutral-50 hover:text-neutral-900"
            >
              {quickStart.step1.packageHrefLabel}
              <ExternalLink className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Step 1 */}
          <h2
            className="text-[24px] font-bold tracking-tight text-neutral-950 mt-14 mb-5"
            id="step-1"
          >
            {quickStart.step1.title}
          </h2>
          <p className="text-neutral-600 text-[15px] sm:text-[16px] leading-[1.7] mb-4">
            {quickStart.step1.description}
          </p>
          <ul className="space-y-3 mb-6">
            {Object.values(quickStart.step1.requirements).map((requirement, index) => (
              <li key={index} className="flex items-start gap-3 text-[14px] text-neutral-600">
                <span className="mt-[6px] flex h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-400" />
                <span>{requirement}</span>
              </li>
            ))}
          </ul>

          <div className="grid gap-4 md:grid-cols-3">
            {quickStartMethods.map((method, index) => (
              <div
                key={index}
                className={cn(
                  'group relative overflow-hidden rounded-[28px] border bg-white p-5 shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_40px_rgba(0,0,0,0.08)]',
                  index === 0
                    ? 'border-neutral-900/10 bg-gradient-to-b from-neutral-50 via-white to-white shadow-[0_16px_50px_rgba(0,0,0,0.08)]'
                    : 'border-neutral-200 hover:border-neutral-300'
                )}
              >
                <div
                  className={cn(
                    'absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent',
                    index === 0 && 'via-neutral-900/20'
                  )}
                />

                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={cn(
                        'flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl border text-[13px] font-semibold',
                        index === 0
                          ? 'border-neutral-900/10 bg-neutral-900 text-white'
                          : 'border-neutral-200 bg-neutral-50 text-neutral-500'
                      )}
                    >
                      0{index + 1}
                    </div>
                    <h3 className="text-[16px] font-semibold leading-[1.35] text-neutral-950">
                      {method.title}
                    </h3>
                  </div>
                </div>

                <p className="mt-4 min-h-[96px] text-[14px] leading-[1.75] text-neutral-600">
                  {method.description}
                </p>

                <div
                  className={cn(
                    'mt-5 rounded-2xl border px-4 py-4',
                    index === 0
                      ? 'border-neutral-900/10 bg-neutral-950 text-white'
                      : 'border-neutral-200 bg-neutral-50 text-neutral-800'
                  )}
                >
                  <div className="flex items-start justify-between gap-3">
                    <p className="pr-2 font-mono text-[12.5px] leading-[1.8] break-all">
                      <span className={cn(index === 0 ? 'text-white/45' : 'text-neutral-400')}>$ </span>
                      {method.command}
                    </p>
                    <CopyButton
                      text={method.command}
                      className={cn(
                        'mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border transition-colors',
                        index === 0
                          ? 'border-white/10 text-white/80 hover:bg-white/10 hover:text-white'
                          : 'border-neutral-200 text-neutral-500 hover:bg-white hover:text-neutral-900'
                      )}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 rounded-r-lg border-l-2 border-blue-200 bg-blue-50 py-3 pr-4 pl-4 text-[14px] leading-[1.7] text-neutral-600">
            <span className="font-semibold text-blue-900">Tip: </span>
            {quickStart.step1.tip}
          </p>

          {/* Step 2 */}
          <h2
            className="text-[24px] font-bold tracking-tight text-neutral-950 mt-14 mb-5"
            id="step-2"
          >
            {quickStart.step2.title}
          </h2>
          <p className="text-neutral-600 text-[15px] sm:text-[16px] leading-[1.7] mb-4">
            {quickStart.step2.description}
          </p>
          <div className="rounded-xl border border-neutral-200 bg-neutral-50 px-6 py-5 font-mono text-[13.5px] overflow-x-auto text-neutral-800 my-6 shadow-sm">
            <p>
              <span className="text-neutral-400">$ </span>
              {quickStart.step2.verifyCommand}
            </p>
            <p className="mt-2 text-neutral-500">
              {'>'} Shows available commands and confirms the binary is installed
            </p>
          </div>
          <div className="rounded-xl border border-neutral-200 bg-neutral-50 px-6 py-5 font-mono text-[13.5px] overflow-x-auto text-neutral-800 my-6 shadow-sm">
            <p>
              <span className="text-neutral-400">$ </span>
              {quickStart.step2.initCommand}
            </p>
            <p className="mt-2 text-neutral-500">
              {'>'} Launches the interactive setup flow and finishes with a preview run
            </p>
          </div>
          <ul className="space-y-3 mt-4">
            {Object.values(quickStart.step2.files).map((file, index) => (
              <li key={index} className="flex items-start gap-3 text-[14px] text-neutral-600">
                <span className="mt-[6px] flex-shrink-0 w-1.5 h-1.5 rounded-full bg-neutral-400" />
                <span>
                  <code className="font-mono text-neutral-800 bg-neutral-100 px-1.5 py-0.5 rounded text-[13px]">
                    {file.split(' — ')[0]}
                  </code>
                  {' — '}
                  {file.split(' — ')[1]}
                </span>
              </li>
            ))}
          </ul>

          {/* Step 3 */}
          <h2
            className="text-[24px] font-bold tracking-tight text-neutral-950 mt-14 mb-5"
            id="step-3"
          >
            {quickStart.step3.title}
          </h2>
          <p className="text-neutral-600 text-[15px] sm:text-[16px] leading-[1.7] mb-6">
            {quickStart.step3.description}
          </p>

          <div className="grid gap-4 md:grid-cols-3 my-6">
            {quickStartFlowSteps.map((step, index) => (
              <div
                key={step}
                className="rounded-2xl border border-neutral-200 bg-neutral-50 px-5 py-5 shadow-sm"
              >
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-neutral-400">
                  Step 0{index + 1}
                </p>
                <p className="mt-3 text-[14px] leading-[1.75] text-neutral-700">{step}</p>
              </div>
            ))}
          </div>

          <p className="text-[14px] text-neutral-600 leading-[1.7] pl-4 border-l-2 border-blue-200 py-3 pr-4 rounded-r-lg bg-blue-50">
            <span className="font-semibold text-blue-900">Tip: </span>
            {quickStart.step3.tip}
          </p>

          {/* Step 4 */}
          <h2
            className="text-[24px] font-bold tracking-tight text-neutral-950 mt-14 mb-5"
            id="step-4"
          >
            {quickStart.step4.title}
          </h2>
          <p className="text-neutral-600 text-[15px] sm:text-[16px] leading-[1.7] mb-6">
            {quickStart.step4.description}
          </p>
          <div className="rounded-xl border border-neutral-200 bg-neutral-50 px-6 py-5 font-mono text-[13.5px] overflow-x-auto text-neutral-800 my-6 shadow-sm">
            <p className="mb-2">
              <span className="text-neutral-400"># AGENTS.md</span>
            </p>
            <p>
              <span className="text-fuchsia-600 font-semibold">## Global Rules</span>
            </p>
            <p className="text-neutral-700 mt-2">- Never expose raw database errors in API responses.</p>
            <p className="text-neutral-700">- All exported functions must have JSDoc comments.</p>
            <p className="text-neutral-700">
              - UI components must follow:{' '}
              <code className="text-emerald-600 bg-emerald-50 px-1 py-0.5 rounded">`docs/ui-rules.md`</code>
            </p>
            <p className="mt-4">
              <span className="text-fuchsia-600 font-semibold">## TypeScript</span>
            </p>
            <p className="text-neutral-700 mt-2">- No use of the <code className="text-amber-700">any</code> type. Use <code className="text-amber-700">unknown</code> instead.</p>
            <p className="text-neutral-700">- All async functions must handle their errors explicitly.</p>
          </div>

          {/* Step 5 */}
          <h2
            className="text-[24px] font-bold tracking-tight text-neutral-950 mt-14 mb-5"
            id="step-5"
          >
            {quickStart.step5.title}
          </h2>
          <p className="text-neutral-600 text-[15px] sm:text-[16px] leading-[1.7] mb-6">
            {quickStart.step5.description}
          </p>

          <div className="rounded-xl border border-neutral-200 bg-neutral-50 px-6 py-5 font-mono text-[13.5px] overflow-x-auto text-neutral-800 my-6 shadow-sm space-y-1">
            <p>
              <span className="text-neutral-400">$ </span>
              git add .
            </p>
            <p>
              <span className="text-neutral-400">$ </span>
              git commit -m &quot;feat: initial setup&quot;
            </p>
            <p className="mt-3 text-neutral-500">{'>'} Guardian running pre-commit review...</p>
            <p className="text-neutral-500">{'>'} Analyzing 3 staged files with claude</p>
            <p className="text-emerald-600 font-semibold mt-2">{'>'} STATUS: PASSED — commit applied</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-5 py-4">
              <p className="font-mono text-[13px] text-emerald-700 font-semibold mb-1">STATUS: PASSED</p>
              <p className="text-[13px] text-emerald-800 leading-[1.6]">{quickStart.step5.pass}</p>
            </div>
            <div className="rounded-xl border border-red-200 bg-red-50 px-5 py-4">
              <p className="font-mono text-[13px] text-red-700 font-semibold mb-1">STATUS: FAILED</p>
              <p className="text-[13px] text-red-800 leading-[1.6]">{quickStart.step5.fail}</p>
            </div>
          </div>

          {/* Next Steps */}
          <h2
            className="text-[24px] font-bold tracking-tight text-neutral-950 mt-16 mb-6"
            id="next-steps"
          >
            {quickStart.nextSteps.title}
          </h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-[15px] text-neutral-600">
              <span className="mt-[7px] flex-shrink-0 w-1.5 h-1.5 rounded-full bg-neutral-400" />
              <Link href="/docs/configuration" className="hover:text-neutral-900 transition-colors underline underline-offset-2 decoration-neutral-300">
                {quickStart.nextSteps.configuration}
              </Link>
            </li>
            <li className="flex items-start gap-3 text-[15px] text-neutral-600">
              <span className="mt-[7px] flex-shrink-0 w-1.5 h-1.5 rounded-full bg-neutral-400" />
              <span>{quickStart.nextSteps.agentsMd}</span>
            </li>
            <li className="flex items-start gap-3 text-[15px] text-neutral-600">
              <span className="mt-[7px] flex-shrink-0 w-1.5 h-1.5 rounded-full bg-neutral-400" />
              <span>{quickStart.nextSteps.providers}</span>
            </li>
          </ul>

          <div className="mt-16 flex items-center justify-between border-t border-neutral-200 pt-8 pb-10">
            <Link
              href="/docs/installation"
              className="hidden sm:flex text-[15px] font-semibold text-neutral-900 hover:text-black transition-colors items-center gap-1.5 px-4 py-2 hover:bg-neutral-50 rounded-lg"
            >
              <span aria-hidden="true" className="mr-1 text-neutral-400">←</span>
              {quickStart.pagination.prev}
            </Link>
            <Link
              href="/docs/configuration"
              className="hidden sm:flex text-[15px] font-semibold text-neutral-900 hover:text-black transition-colors items-center gap-1.5 px-4 py-2 hover:bg-neutral-50 rounded-lg"
            >
              {quickStart.pagination.next}
              <span aria-hidden="true" className="ml-1 text-neutral-400">→</span>
            </Link>
          </div>
        </div>
      </main>

      {/* Right Sidebar (TOC) */}
      <aside className="sticky top-14 hidden w-[260px] shrink-0 overflow-y-auto pt-10 pb-20 pl-8 xl:block h-[calc(100vh-3.5rem)]">
        <h4 className="mb-4 text-[11px] font-bold text-neutral-400 uppercase tracking-[0.2em] pt-4">
          {quickStart.toc.title}
        </h4>
        <ul className="flex flex-col space-y-3 border-l border-neutral-100 pb-2 text-[13px]">
          <li>
            <a href="#step-1" className="block pl-4 text-neutral-500 hover:text-neutral-900 transition-colors font-medium border-l border-transparent hover:border-neutral-300 -ml-px">
              {quickStart.toc.items.step1}
            </a>
          </li>
          <li>
            <a href="#step-2" className="block pl-4 text-neutral-500 hover:text-neutral-900 transition-colors font-medium border-l border-transparent hover:border-neutral-300 -ml-px">
              {quickStart.toc.items.step2}
            </a>
          </li>
          <li>
            <a href="#step-3" className="block pl-4 text-neutral-500 hover:text-neutral-900 transition-colors font-medium border-l border-transparent hover:border-neutral-300 -ml-px">
              {quickStart.toc.items.step3}
            </a>
          </li>
          <li>
            <a href="#step-4" className="block pl-4 text-neutral-500 hover:text-neutral-900 transition-colors font-medium border-l border-transparent hover:border-neutral-300 -ml-px">
              {quickStart.toc.items.step4}
            </a>
          </li>
          <li>
            <a href="#step-5" className="block pl-4 text-neutral-500 hover:text-neutral-900 transition-colors font-medium border-l border-transparent hover:border-neutral-300 -ml-px">
              {quickStart.toc.items.step5}
            </a>
          </li>
          <li>
            <a href="#next-steps" className="block pl-4 text-neutral-500 hover:text-neutral-900 transition-colors font-medium border-l border-transparent hover:border-neutral-300 -ml-px">
              {quickStart.toc.items.nextSteps}
            </a>
          </li>
        </ul>
      </aside>
    </>
  );
}
