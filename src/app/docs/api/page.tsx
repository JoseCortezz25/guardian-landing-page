import Link from 'next/link';
import { CopyButton } from '@/components/atoms/copy-button';
import { docsMessages } from '@/config/messages';
import { docsLlmContent } from '@/lib/docs-llm-content';

const { api } = docsMessages;

export default function ApiPage() {
  return (
    <>
      <main className="min-w-0 flex-1 py-10 lg:px-12 lg:py-14 xl:px-16">
        <div className="mx-auto w-full max-w-[800px] xl:ml-0">
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
            <h1 className="font-sans text-[32px] font-bold tracking-tight text-neutral-950 sm:text-[40px]">
              {api.title}
            </h1>
            <CopyButton
              text={docsLlmContent.api}
              label={api.copyPage}
              copiedLabel="Copied for LLM"
              variant="page"
            />
          </div>

          <p className="mb-10 max-w-3xl text-[15px] leading-[1.7] text-neutral-600 sm:text-[16px]">
            {api.description}
          </p>

          <h2 id="providers" className="mt-14 mb-5 text-[24px] font-bold tracking-tight text-neutral-950">
            {api.providers.title}
          </h2>
          <p className="mb-6 text-[15px] leading-[1.7] text-neutral-600 sm:text-[16px]">
            {api.providers.description}
          </p>
          <ul className="space-y-3">
            {Object.values(api.providers.items).map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-[15px] text-neutral-700">
                <span className="mt-[7px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h2 id="agents-md" className="mt-16 mb-5 text-[24px] font-bold tracking-tight text-neutral-950">
            {api.agentsMd.title}
          </h2>
          <p className="mb-6 text-[15px] leading-[1.7] text-neutral-600 sm:text-[16px]">
            {api.agentsMd.description}
          </p>
          <div className="my-6 overflow-x-auto rounded-xl border border-neutral-200 bg-neutral-50 px-6 py-5 font-mono text-[13.5px] text-neutral-800 shadow-sm">
            <p>
              <span className="text-neutral-400"># AGENTS.md</span>
            </p>
            <p className="mt-2">
              <span className="font-semibold text-fuchsia-600">## Backend</span>
            </p>
            <p className="mt-2">- Never expose raw database errors in API responses.</p>
            <p>- All public functions must include JSDoc.</p>
            <p>- Follow `docs/api-rules.md` for endpoint conventions.</p>
          </div>
          <h3 className="mt-10 mb-4 text-[18px] font-semibold text-neutral-900">
            {api.agentsMd.examples.title}
          </h3>
          <ul className="space-y-3">
            {Object.values(api.agentsMd.examples.items).map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-[15px] text-neutral-700">
                <span className="mt-[7px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h2 id="strict-mode" className="mt-16 mb-5 text-[24px] font-bold tracking-tight text-neutral-950">
            {api.strictMode.title}
          </h2>
          <p className="mb-6 text-[15px] leading-[1.7] text-neutral-600 sm:text-[16px]">
            {api.strictMode.description}
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-5 py-4">
              <p className="mb-2 font-mono text-[13px] font-semibold text-emerald-700">
                STRICT_MODE=&quot;true&quot;
              </p>
              <p className="text-[13px] leading-[1.6] text-emerald-800">{api.strictMode.pass}</p>
            </div>
            <div className="rounded-xl border border-amber-200 bg-amber-50 px-5 py-4">
              <p className="mb-2 font-mono text-[13px] font-semibold text-amber-700">
                STRICT_MODE=&quot;false&quot;
              </p>
              <p className="text-[13px] leading-[1.6] text-amber-800">{api.strictMode.fail}</p>
            </div>
          </div>

          <h2 id="cli-commands" className="mt-16 mb-5 text-[24px] font-bold tracking-tight text-neutral-950">
            {api.cli.title}
          </h2>
          <p className="mb-6 text-[15px] leading-[1.7] text-neutral-600 sm:text-[16px]">
            {api.cli.description}
          </p>
          <div className="overflow-x-auto rounded-xl border border-neutral-200">
            <table className="w-full text-[14px]">
              <thead>
                <tr className="border-b border-neutral-200 bg-neutral-50">
                  <th className="px-5 py-3 text-left font-semibold text-neutral-700">Command</th>
                  <th className="px-5 py-3 text-left font-semibold text-neutral-700">Description</th>
                </tr>
              </thead>
              <tbody>
                {Object.values(api.cli.commands).map((command, index, items) => (
                  <tr
                    key={command.name}
                    className={index < items.length - 1 ? 'border-b border-neutral-100' : ''}
                  >
                    <td className="px-5 py-3 font-mono text-[13px] text-neutral-700">
                      {command.name}
                    </td>
                    <td className="px-5 py-3 text-neutral-600">{command.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-16 flex items-center justify-between border-t border-neutral-200 pt-8 pb-10">
            <Link
              href="/docs/configuration"
              className="hidden items-center gap-1.5 rounded-lg px-4 py-2 text-[15px] font-semibold text-neutral-900 transition-colors hover:bg-neutral-50 hover:text-black sm:flex"
            >
              <span aria-hidden="true" className="mr-1 text-neutral-400">
                ←
              </span>
              {api.pagination.prev}
            </Link>
            <Link
              href="/docs/skills"
              className="hidden items-center gap-1.5 rounded-lg px-4 py-2 text-[15px] font-semibold text-neutral-900 transition-colors hover:bg-neutral-50 hover:text-black sm:flex"
            >
              {api.pagination.next}
              <span aria-hidden="true" className="ml-1 text-neutral-400">
                →
              </span>
            </Link>
          </div>
        </div>
      </main>

      <aside className="sticky top-14 hidden h-[calc(100vh-3.5rem)] w-[260px] shrink-0 overflow-y-auto pt-10 pb-20 pl-8 xl:block">
        <h4 className="mb-4 pt-4 text-[11px] font-bold tracking-[0.2em] text-neutral-400 uppercase">
          {api.toc.title}
        </h4>
        <ul className="flex flex-col space-y-3 border-l border-neutral-100 pb-2 text-[13px]">
          <li>
            <a href="#providers" className="block -ml-px border-l border-transparent pl-4 font-medium text-neutral-500 transition-colors hover:border-neutral-300 hover:text-neutral-900">
              {api.toc.items.providers}
            </a>
          </li>
          <li>
            <a href="#agents-md" className="block -ml-px border-l border-transparent pl-4 font-medium text-neutral-500 transition-colors hover:border-neutral-300 hover:text-neutral-900">
              {api.toc.items.agentsMd}
            </a>
          </li>
          <li>
            <a href="#strict-mode" className="block -ml-px border-l border-transparent pl-4 font-medium text-neutral-500 transition-colors hover:border-neutral-300 hover:text-neutral-900">
              {api.toc.items.strictMode}
            </a>
          </li>
          <li>
            <a href="#cli-commands" className="block -ml-px border-l border-transparent pl-4 font-medium text-neutral-500 transition-colors hover:border-neutral-300 hover:text-neutral-900">
              {api.toc.items.cli}
            </a>
          </li>
        </ul>
      </aside>
    </>
  );
}
