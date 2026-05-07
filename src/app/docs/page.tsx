import Link from 'next/link';
import { CopyButton } from '@/components/atoms/copy-button';
import { docsMessages } from '@/config/messages';
import { docsLlmContent } from '@/lib/docs-llm-content';

const { introduction, toc, pagination } = docsMessages;

export default function DocsPage() {
  return (
    <>
      {/* Main Content */}
      <main className="flex-1 py-10 lg:py-14 lg:px-12 xl:px-16 min-w-0">
        <div className="w-full max-w-[800px] mx-auto xl:ml-0">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-8 gap-4">
            <h1 className="font-sans text-[32px] sm:text-[40px] font-bold tracking-tight text-neutral-950">
              {introduction.title}
            </h1>
            <CopyButton
              text={docsLlmContent.introduction}
              label={introduction.copyPage}
              copiedLabel="Copied for LLM"
              variant="page"
            />
          </div>

          <p className="text-neutral-600 mb-10 text-[15px] sm:text-[16px] leading-[1.7] max-w-3xl">
            guardian-cli is a framework for{' '}
            <span className="font-semibold text-neutral-900">
              {introduction.descriptionHighlight}
            </span>{' '}
            — local gatekeepers that are safe, predictable, and run natively inside your Git hooks.
          </p>

          {/* What is Guardian */}
          <h2
            className="text-[24px] font-bold tracking-tight text-neutral-950 mt-14 mb-5"
            id="what-is-guardian"
          >
            {introduction.whatIsGuardian.title}
          </h2>

          <div className="space-y-5 text-neutral-600 text-[15px] sm:text-[16px] leading-[1.7]">
            <p>{introduction.whatIsGuardian.p1}</p>
            <p>
              <span className="font-bold text-neutral-900">{introduction.whatIsGuardian.p2Bold}</span>{' '}
              {introduction.whatIsGuardian.p2}
            </p>
            <p>{introduction.whatIsGuardian.p3}</p>
            <p>
              {introduction.whatIsGuardian.p4.split(introduction.whatIsGuardian.p4RulesBold).map((part, index) =>
                index === 0 ? (
                  <span key={index}>
                    {part}
                    <span className="font-semibold text-neutral-900">
                      {introduction.whatIsGuardian.p4RulesBold}
                    </span>
                  </span>
                ) : (
                  <span key={index}>{part}</span>
                )
              )}
            </p>
          </div>

          {/* Features */}
          <h2
            className="text-[24px] font-bold tracking-tight text-neutral-950 mt-16 mb-6"
            id="features"
          >
            {introduction.features.title}
          </h2>

          <ul className="space-y-3 text-neutral-600 text-[15px] sm:text-[16px] leading-[1.7]">
            {Object.values(introduction.features.items).map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="mt-[6px] flex-shrink-0 w-1.5 h-1.5 rounded-full bg-neutral-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* How Guardian Works */}
          <h2
            className="text-[24px] font-bold tracking-tight text-neutral-950 mt-16 mb-6"
            id="how-guardian-works"
          >
            {introduction.howGuardianWorks.title}
          </h2>

          <h3
            className="text-[18px] font-semibold text-neutral-900 mt-10 mb-4"
            id="1-define-your-rules"
          >
            {introduction.howGuardianWorks.step1.title}
          </h3>
          <p className="text-neutral-600 text-[15px] sm:text-[16px] leading-[1.7] mb-6">
            {introduction.howGuardianWorks.step1.description}
          </p>

          <div className="rounded-xl border border-neutral-200 bg-neutral-50 px-6 py-5 font-mono text-[13.5px] overflow-x-auto text-neutral-800 my-6 shadow-sm">
            <p className="mb-2">
              <span className="text-neutral-400"># AGENTS.md</span>
            </p>
            <p>
              <span className="text-fuchsia-600 font-semibold">## Global Rules</span>
            </p>
            <p className="text-neutral-700 mt-2">
              - Prevent API endpoints from returning raw database errors.
            </p>
            <p className="text-neutral-700">
              - Check UI guidelines:{' '}
              <code className="text-emerald-600 bg-emerald-50 px-1 py-0.5 rounded">
                `docs/ui-rules.md`
              </code>
            </p>
            <p className="text-neutral-700">
              - All public functions must have JSDoc comments.
            </p>
          </div>

          <p className="text-neutral-600 text-[14px] leading-[1.7] mb-6 pl-4 border-l-2 border-neutral-200">
            Guardian also expands backtick file references inline. If{' '}
            <code className="text-sm bg-neutral-100 px-1 py-0.5 rounded">docs/ui-rules.md</code> exists,
            its contents are appended to the prompt automatically.
          </p>

          <h3
            className="text-[18px] font-semibold text-neutral-900 mt-12 mb-4"
            id="2-hook-interception"
          >
            {introduction.howGuardianWorks.step2.title}
          </h3>
          <p className="text-neutral-600 text-[15px] sm:text-[16px] leading-[1.7] mb-6">
            {introduction.howGuardianWorks.step2.description}
          </p>

          <div className="rounded-xl border border-neutral-200 bg-neutral-50 px-6 py-5 font-mono text-[13.5px] overflow-x-auto text-neutral-800 my-6 shadow-sm">
            <p>
              <span className="text-neutral-400">$ </span>
              <span>git commit -m &quot;feat: add user auth&quot;</span>
            </p>
            <p className="mt-3 text-neutral-500">
              {'>'} Guardian intercepting pre-commit hook...
            </p>
            <p className="text-neutral-500">
              {'>'} Provider: claude — analyzing 4 staged files
            </p>
            <p className="text-neutral-500">
              {'>'} Cache: 2 hits, 2 files sent for review
            </p>
          </div>

          <h3
            className="text-[18px] font-semibold text-neutral-900 mt-12 mb-4"
            id="3-strict-enforcement"
          >
            {introduction.howGuardianWorks.step3.title}
          </h3>
          <p className="text-neutral-600 text-[15px] sm:text-[16px] leading-[1.7] mb-6">
            {introduction.howGuardianWorks.step3.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-5 py-4">
              <p className="font-mono text-[13px] text-emerald-700 font-semibold mb-2">STATUS: PASSED</p>
              <p className="text-[13px] text-emerald-800 leading-[1.6]">
                Commit applies instantly. Result is hashed and cached for future runs.
              </p>
            </div>
            <div className="rounded-xl border border-red-200 bg-red-50 px-5 py-4">
              <p className="font-mono text-[13px] text-red-700 font-semibold mb-2">STATUS: FAILED</p>
              <p className="text-[13px] text-red-800 leading-[1.6]">
                Commit is blocked before reaching origin. Feedback is printed to the terminal.
              </p>
            </div>
          </div>

          <div className="mt-16 flex items-center justify-between border-t border-neutral-200 pt-8 pb-10">
            <div />
            <Link
              href="/docs/installation"
              className="hidden sm:flex text-[15px] font-semibold text-neutral-900 hover:text-black transition-colors items-center gap-1.5 px-4 py-2 hover:bg-neutral-50 rounded-lg"
            >
              {pagination.next}{' '}
              <span aria-hidden="true" className="ml-1 text-neutral-400">
                →
              </span>
            </Link>
          </div>
        </div>
      </main>

      {/* Right Sidebar (TOC) */}
      <aside className="sticky top-14 hidden w-[260px] shrink-0 overflow-y-auto pt-10 pb-20 pl-8 xl:block h-[calc(100vh-3.5rem)]">
        <h4 className="mb-4 text-[11px] font-bold text-neutral-400 uppercase tracking-[0.2em] pt-4">
          {toc.title}
        </h4>
        <ul className="flex flex-col space-y-3 border-l border-neutral-100 pb-2 text-[13px]">
          <li>
            <a
              href="#what-is-guardian"
              className="block pl-4 text-neutral-500 hover:text-neutral-900 transition-colors font-medium border-l border-transparent hover:border-neutral-300 -ml-px"
            >
              {toc.items.whatIsGuardian}
            </a>
          </li>
          <li>
            <a
              href="#features"
              className="block pl-4 text-neutral-500 hover:text-neutral-900 transition-colors font-medium border-l border-transparent hover:border-neutral-300 -ml-px"
            >
              {toc.items.features}
            </a>
          </li>
          <li>
            <a
              href="#how-guardian-works"
              className="block pl-4 text-neutral-500 hover:text-neutral-900 transition-colors font-medium border-l border-transparent hover:border-neutral-300 -ml-px mt-1"
            >
              {toc.items.howGuardianWorks}
            </a>
            <ul className="flex flex-col space-y-2.5 mt-2.5">
              <li>
                <a
                  href="#1-define-your-rules"
                  className="block pl-7 text-neutral-500 hover:text-neutral-900 transition-colors border-l border-transparent"
                >
                  {toc.items.step1}
                </a>
              </li>
              <li>
                <a
                  href="#2-hook-interception"
                  className="block pl-7 text-neutral-500 hover:text-neutral-900 transition-colors border-l border-transparent"
                >
                  {toc.items.step2}
                </a>
              </li>
              <li>
                <a
                  href="#3-strict-enforcement"
                  className="block pl-7 text-neutral-500 hover:text-neutral-900 transition-colors border-l border-transparent"
                >
                  {toc.items.step3}
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </aside>
    </>
  );
}
