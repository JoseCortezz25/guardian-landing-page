import Link from 'next/link';
import { CopyButton } from '@/components/atoms/copy-button';
import { docsMessages } from '@/config/messages';
import { docsLlmContent } from '@/lib/docs-llm-content';

const { configuration } = docsMessages;

export default function ConfigurationPage() {
  return (
    <>
      <main className="min-w-0 flex-1 py-10 lg:px-12 lg:py-14 xl:px-16">
        <div className="mx-auto w-full max-w-[800px] xl:ml-0">
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
            <h1 className="font-sans text-[32px] font-bold tracking-tight text-neutral-950 sm:text-[40px]">
              {configuration.title}
            </h1>
            <CopyButton
              text={docsLlmContent.configuration}
              label={configuration.copyPage}
              copiedLabel="Copied for LLM"
              variant="page"
            />
          </div>

          <p className="mb-10 max-w-3xl text-[15px] leading-[1.7] text-neutral-600 sm:text-[16px]">
            {configuration.description}
          </p>

          <h2
            id="precedence"
            className="mt-14 mb-5 text-[24px] font-bold tracking-tight text-neutral-950"
          >
            {configuration.precedence.title}
          </h2>
          <p className="mb-6 text-[15px] leading-[1.7] text-neutral-600 sm:text-[16px]">
            {configuration.precedence.description}
          </p>
          <ol className="space-y-3">
            {Object.values(configuration.precedence.items).map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-[15px] text-neutral-700">
                <span className="mt-[2px] inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-neutral-200 bg-neutral-50 font-mono text-[12px] text-neutral-500">
                  {index + 1}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ol>

          <h2
            id="guardian-file"
            className="mt-16 mb-5 text-[24px] font-bold tracking-tight text-neutral-950"
          >
            {configuration.guardianFile.title}
          </h2>
          <p className="mb-6 text-[15px] leading-[1.7] text-neutral-600 sm:text-[16px]">
            {configuration.guardianFile.description}
          </p>
          <div className="my-6 overflow-x-auto rounded-xl border border-neutral-200 bg-neutral-50 px-6 py-5 font-mono text-[13.5px] text-neutral-800 shadow-sm">
            <p>
              <span className="text-neutral-400"># .guardian</span>
            </p>
            <p className="mt-2">PROVIDER=&quot;claude&quot;</p>
            <p>FILE_PATTERNS=&quot;*.ts,*.tsx,*.js,*.jsx&quot;</p>
            <p>EXCLUDE_PATTERNS=&quot;*.test.ts,*.spec.ts,*.stories.tsx&quot;</p>
            <p>RULES_FILE=&quot;AGENTS.md&quot;</p>
            <p>STRICT_MODE=&quot;true&quot;</p>
            <p>TIMEOUT=&quot;300&quot;</p>
            <p>CACHE=&quot;true&quot;</p>
          </div>

          <h2
            id="supported-keys"
            className="mt-16 mb-5 text-[24px] font-bold tracking-tight text-neutral-950"
          >
            {configuration.supportedKeys.title}
          </h2>
          <div className="my-4 overflow-x-auto rounded-xl border border-neutral-200">
            <table className="w-full text-[14px]">
              <thead>
                <tr className="border-b border-neutral-200 bg-neutral-50">
                  <th className="px-5 py-3 text-left font-semibold text-neutral-700">Key</th>
                  <th className="px-5 py-3 text-left font-semibold text-neutral-700">Description</th>
                </tr>
              </thead>
              <tbody>
                {Object.values(configuration.supportedKeys.keys).map((entry, index, items) => (
                  <tr
                    key={entry.key}
                    className={index < items.length - 1 ? 'border-b border-neutral-100' : ''}
                  >
                    <td className="px-5 py-3 font-mono text-[13px] text-neutral-700">
                      {entry.key}
                    </td>
                    <td className="px-5 py-3 text-neutral-600">{entry.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2
            id="environment-variables"
            className="mt-16 mb-5 text-[24px] font-bold tracking-tight text-neutral-950"
          >
            {configuration.envVars.title}
          </h2>
          <p className="mb-6 text-[15px] leading-[1.7] text-neutral-600 sm:text-[16px]">
            {configuration.envVars.description}
          </p>
          <div className="my-4 overflow-x-auto rounded-xl border border-neutral-200">
            <table className="w-full text-[14px]">
              <thead>
                <tr className="border-b border-neutral-200 bg-neutral-50">
                  <th className="px-5 py-3 text-left font-semibold text-neutral-700">Variable</th>
                  <th className="px-5 py-3 text-left font-semibold text-neutral-700">Description</th>
                </tr>
              </thead>
              <tbody>
                {Object.values(configuration.envVars.vars).map((entry, index, items) => (
                  <tr
                    key={entry.name}
                    className={index < items.length - 1 ? 'border-b border-neutral-100' : ''}
                  >
                    <td className="px-5 py-3 font-mono text-[13px] text-neutral-700">
                      {entry.name}
                    </td>
                    <td className="px-5 py-3 text-neutral-600">{entry.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2
            id="provider-values"
            className="mt-16 mb-5 text-[24px] font-bold tracking-tight text-neutral-950"
          >
            {configuration.providerValues.title}
          </h2>
          <p className="mb-6 text-[15px] leading-[1.7] text-neutral-600 sm:text-[16px]">
            {configuration.providerValues.description}
          </p>
          <div className="my-6 overflow-x-auto rounded-xl border border-neutral-200 bg-neutral-50 px-6 py-5 font-mono text-[13.5px] text-neutral-800 shadow-sm">
            <p>PROVIDER=&quot;claude&quot;</p>
            <p>PROVIDER=&quot;gemini&quot;</p>
            <p>PROVIDER=&quot;opencode&quot;</p>
            <p>PROVIDER=&quot;codex&quot;</p>
            <p>PROVIDER=&quot;antigravity&quot;</p>
            <p>PROVIDER=&quot;opencode:anthropic/claude-opus-4&quot;</p>
          </div>

          <div className="mt-16 flex items-center justify-between border-t border-neutral-200 pt-8 pb-10">
            <Link
              href="/docs/quick-start"
              className="hidden items-center gap-1.5 rounded-lg px-4 py-2 text-[15px] font-semibold text-neutral-900 transition-colors hover:bg-neutral-50 hover:text-black sm:flex"
            >
              <span aria-hidden="true" className="mr-1 text-neutral-400">
                ←
              </span>
              {configuration.pagination.prev}
            </Link>
            <Link
              href="/docs/api"
              className="hidden items-center gap-1.5 rounded-lg px-4 py-2 text-[15px] font-semibold text-neutral-900 transition-colors hover:bg-neutral-50 hover:text-black sm:flex"
            >
              {configuration.pagination.next}
              <span aria-hidden="true" className="ml-1 text-neutral-400">
                →
              </span>
            </Link>
          </div>
        </div>
      </main>

      <aside className="sticky top-14 hidden h-[calc(100vh-3.5rem)] w-[260px] shrink-0 overflow-y-auto pt-10 pb-20 pl-8 xl:block">
        <h4 className="mb-4 pt-4 text-[11px] font-bold tracking-[0.2em] text-neutral-400 uppercase">
          {configuration.toc.title}
        </h4>
        <ul className="flex flex-col space-y-3 border-l border-neutral-100 pb-2 text-[13px]">
          <li>
            <a href="#precedence" className="block -ml-px border-l border-transparent pl-4 font-medium text-neutral-500 transition-colors hover:border-neutral-300 hover:text-neutral-900">
              {configuration.toc.items.precedence}
            </a>
          </li>
          <li>
            <a href="#guardian-file" className="block -ml-px border-l border-transparent pl-4 font-medium text-neutral-500 transition-colors hover:border-neutral-300 hover:text-neutral-900">
              {configuration.toc.items.guardianFile}
            </a>
          </li>
          <li>
            <a href="#supported-keys" className="block -ml-px border-l border-transparent pl-4 font-medium text-neutral-500 transition-colors hover:border-neutral-300 hover:text-neutral-900">
              {configuration.toc.items.supportedKeys}
            </a>
          </li>
          <li>
            <a href="#environment-variables" className="block -ml-px border-l border-transparent pl-4 font-medium text-neutral-500 transition-colors hover:border-neutral-300 hover:text-neutral-900">
              {configuration.toc.items.envVars}
            </a>
          </li>
          <li>
            <a href="#provider-values" className="block -ml-px border-l border-transparent pl-4 font-medium text-neutral-500 transition-colors hover:border-neutral-300 hover:text-neutral-900">
              {configuration.toc.items.providerValues}
            </a>
          </li>
        </ul>
      </aside>
    </>
  );
}
