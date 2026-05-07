import Link from 'next/link';
import { CopyButton } from '@/components/atoms/copy-button';
import { docsMessages, packageUrls } from '@/config/messages';
import { docsLlmContent } from '@/lib/docs-llm-content';

const { changelog } = docsMessages;

export default function ChangelogPage() {
  return (
    <>
      <main className="min-w-0 flex-1 py-10 lg:px-12 lg:py-14 xl:px-16">
        <div className="mx-auto w-full max-w-[800px] xl:ml-0">
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
            <h1 className="font-sans text-[32px] font-bold tracking-tight text-neutral-950 sm:text-[40px]">
              {changelog.title}
            </h1>
            <CopyButton
              text={docsLlmContent.changelog}
              label={changelog.copyPage}
              copiedLabel="Copied for LLM"
              variant="page"
            />
          </div>

          <p className="mb-10 max-w-3xl text-[15px] leading-[1.7] text-neutral-600 sm:text-[16px]">
            {changelog.description}
          </p>

          <section
            id="latest-release"
            className="rounded-2xl border border-neutral-200 bg-gradient-to-br from-white to-neutral-50 p-6 shadow-sm"
          >
            <p className="text-[11px] font-semibold tracking-[0.2em] text-neutral-400 uppercase">
              {changelog.latest.badge}
            </p>
            <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="font-mono text-[28px] font-semibold text-neutral-950">
                  {changelog.latest.version}
                </h2>
                <p className="mt-1 text-[14px] text-neutral-500">{changelog.latest.date}</p>
              </div>
              <Link
                href={packageUrls.npm}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-lg border border-neutral-200 bg-white px-4 py-2 text-[13px] font-medium text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-neutral-900"
              >
                View on npm
              </Link>
            </div>
            <p className="mt-4 max-w-2xl text-[15px] leading-[1.7] text-neutral-600">
              {changelog.latest.summary}
            </p>
          </section>

          <h2 id="release-timeline" className="mt-16 mb-6 text-[24px] font-bold tracking-tight text-neutral-950">
            {changelog.releases.title}
          </h2>
          <div className="space-y-4">
            {Object.values(changelog.releases.items).map((release) => (
              <article
                key={release.version}
                className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-[0_1px_2px_rgba(0,0,0,0.03)]"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="font-mono text-[16px] font-semibold text-neutral-900">
                    {release.version}
                  </h3>
                  <span className="text-[13px] text-neutral-500">{release.date}</span>
                </div>
                <p className="mt-3 text-[14px] leading-[1.7] text-neutral-600">
                  {release.summary}
                </p>
              </article>
            ))}
          </div>

          <p className="mt-8 rounded-r-lg border-l-2 border-blue-200 bg-blue-50 py-3 pr-4 pl-4 text-[14px] leading-[1.7] text-neutral-600">
            <span className="font-semibold text-blue-900">Note: </span>
            {changelog.note}
          </p>

          <div className="mt-16 flex items-center justify-between border-t border-neutral-200 pt-8 pb-10">
            <Link
              href="/docs/skills"
              className="hidden items-center gap-1.5 rounded-lg px-4 py-2 text-[15px] font-semibold text-neutral-900 transition-colors hover:bg-neutral-50 hover:text-black sm:flex"
            >
              <span aria-hidden="true" className="mr-1 text-neutral-400">
                ←
              </span>
              {changelog.pagination.prev}
            </Link>
            <div />
          </div>
        </div>
      </main>

      <aside className="sticky top-14 hidden h-[calc(100vh-3.5rem)] w-[260px] shrink-0 overflow-y-auto pt-10 pb-20 pl-8 xl:block">
        <h4 className="mb-4 pt-4 text-[11px] font-bold tracking-[0.2em] text-neutral-400 uppercase">
          {changelog.toc.title}
        </h4>
        <ul className="flex flex-col space-y-3 border-l border-neutral-100 pb-2 text-[13px]">
          <li>
            <a href="#latest-release" className="block -ml-px border-l border-transparent pl-4 font-medium text-neutral-500 transition-colors hover:border-neutral-300 hover:text-neutral-900">
              {changelog.toc.items.latest}
            </a>
          </li>
          <li>
            <a href="#release-timeline" className="block -ml-px border-l border-transparent pl-4 font-medium text-neutral-500 transition-colors hover:border-neutral-300 hover:text-neutral-900">
              {changelog.toc.items.timeline}
            </a>
          </li>
        </ul>
      </aside>
    </>
  );
}
