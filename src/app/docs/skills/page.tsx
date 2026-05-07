import Link from 'next/link';
import { CopyButton } from '@/components/atoms/copy-button';
import { docsMessages, githubUrls } from '@/config/messages';
import { docsLlmContent } from '@/lib/docs-llm-content';

const { skills } = docsMessages;
const installationExamples = Object.values(skills.installation.examples).filter(
  (example): example is Exclude<(typeof skills.installation.examples)[keyof typeof skills.installation.examples], string> =>
    typeof example === 'object'
);
const compatibilityPillars = Object.values(skills.installation.compatibility.pillars);
const [recommendedExample] = installationExamples;

export default function SkillsPage() {
  return (
    <>
      <main className="min-w-0 flex-1 py-10 lg:px-12 lg:py-14 xl:px-16">
        <div className="mx-auto w-full max-w-[800px] xl:ml-0">
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
            <h1 className="font-sans text-[32px] font-bold tracking-tight text-neutral-950 sm:text-[40px]">
              {skills.title}
            </h1>
            <CopyButton
              text={docsLlmContent.skills}
              label={skills.copyPage}
              copiedLabel="Copied for LLM"
              variant="page"
            />
          </div>

          <p className="mb-10 max-w-3xl text-[15px] leading-[1.7] text-neutral-600 sm:text-[16px]">
            {skills.description}
          </p>

          <h2 id="what-are-skills" className="mt-14 mb-5 text-[24px] font-bold tracking-tight text-neutral-950">
            {skills.whatAreSkills.title}
          </h2>
          <div className="space-y-5 text-[15px] leading-[1.7] text-neutral-600 sm:text-[16px]">
            <p>{skills.whatAreSkills.p1}</p>
            <p>{skills.whatAreSkills.p2}</p>
          </div>

          <h2 id="installation" className="mt-16 mb-5 text-[24px] font-bold tracking-tight text-neutral-950">
            {skills.installation.title}
          </h2>
          <p className="mb-6 text-[15px] leading-[1.7] text-neutral-600 sm:text-[16px]">
            {skills.installation.description}
          </p>
          <div className="my-6 rounded-xl border border-neutral-200 bg-neutral-50 px-6 py-3 font-mono text-[13.5px] text-neutral-800 shadow-sm">
            <div className="flex items-center justify-between gap-3">
              <p className="overflow-x-auto whitespace-nowrap pr-2">
                <span className="text-neutral-400">$ </span>
                {recommendedExample.command}
              </p>
              <CopyButton
                text={recommendedExample.command}
                className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-neutral-200 text-neutral-500 transition-colors hover:bg-white hover:text-neutral-900"
              />
            </div>
          </div>

          <h2 id="compatibility" className="mt-16 mb-5 text-[24px] font-bold tracking-tight text-neutral-950">
            {skills.installation.compatibility.title}
          </h2>
          <p className="mb-6 text-[15px] leading-[1.7] text-neutral-600 sm:text-[16px]">
            {skills.installation.compatibility.description}
          </p>
          <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
            <div className="grid gap-4 sm:grid-cols-3">
              {compatibilityPillars.map((pillar) => (
                <div key={pillar.title} className="rounded-xl border border-neutral-200 bg-white px-4 py-4">
                  <p className="text-[12px] font-semibold tracking-[0.18em] text-neutral-500 uppercase">
                    {pillar.title}
                  </p>
                  <p className="mt-2 text-[14px] leading-[1.7] text-neutral-600">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
            <p className="text-[14px] font-semibold text-neutral-900">{skills.githubLink.label}</p>
            <p className="mt-2 text-[14px] leading-[1.7] text-neutral-600">
              {skills.githubLink.description}
            </p>
            <Link
              href={githubUrls.skills}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex max-w-full whitespace-normal break-all rounded-lg border border-neutral-200 bg-white px-4 py-2 text-[13px] font-medium leading-[1.6] text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-neutral-900"
            >
              {githubUrls.skills}
            </Link>
          </div>

          <div className="mt-16 flex items-center justify-between border-t border-neutral-200 pt-8 pb-10">
            <Link
              href="/docs/api"
              className="hidden items-center gap-1.5 rounded-lg px-4 py-2 text-[15px] font-semibold text-neutral-900 transition-colors hover:bg-neutral-50 hover:text-black sm:flex"
            >
              <span aria-hidden="true" className="mr-1 text-neutral-400">
                ←
              </span>
              {skills.pagination.prev}
            </Link>
            <Link
              href="/docs/changelog"
              className="hidden items-center gap-1.5 rounded-lg px-4 py-2 text-[15px] font-semibold text-neutral-900 transition-colors hover:bg-neutral-50 hover:text-black sm:flex"
            >
              {skills.pagination.next}
              <span aria-hidden="true" className="ml-1 text-neutral-400">
                →
              </span>
            </Link>
          </div>
        </div>
      </main>

      <aside className="sticky top-14 hidden h-[calc(100vh-3.5rem)] w-[260px] shrink-0 overflow-y-auto pt-10 pb-20 pl-8 xl:block">
        <h4 className="mb-4 pt-4 text-[11px] font-bold tracking-[0.2em] text-neutral-400 uppercase">
          {skills.toc.title}
        </h4>
        <ul className="flex flex-col space-y-3 border-l border-neutral-100 pb-2 text-[13px]">
          <li>
            <a href="#what-are-skills" className="block -ml-px border-l border-transparent pl-4 font-medium text-neutral-500 transition-colors hover:border-neutral-300 hover:text-neutral-900">
              {skills.toc.items.whatAreSkills}
            </a>
          </li>
          <li>
            <a href="#installation" className="block -ml-px border-l border-transparent pl-4 font-medium text-neutral-500 transition-colors hover:border-neutral-300 hover:text-neutral-900">
              {skills.toc.items.installation}
            </a>
          </li>
          <li>
            <a href="#compatibility" className="block -ml-px border-l border-transparent pl-4 font-medium text-neutral-500 transition-colors hover:border-neutral-300 hover:text-neutral-900">
              {skills.toc.items.compatibility}
            </a>
          </li>
        </ul>
      </aside>
    </>
  );
}
