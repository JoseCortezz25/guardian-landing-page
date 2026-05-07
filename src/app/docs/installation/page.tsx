import Link from 'next/link';
import { CopyButton } from '@/components/atoms/copy-button';
import { docsMessages } from '@/config/messages';
import { docsLlmContent } from '@/lib/docs-llm-content';

const { installation } = docsMessages;

export default function InstallationPage() {
  return (
    <>
      {/* Main Content */}
      <main className="flex-1 py-10 lg:py-14 lg:px-12 xl:px-16 min-w-0">
        <div className="w-full max-w-[800px] mx-auto xl:ml-0">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-8 gap-4">
            <h1 className="font-sans text-[32px] sm:text-[40px] font-bold tracking-tight text-neutral-950">
              {installation.title}
            </h1>
            <CopyButton
              text={docsLlmContent.installation}
              label={installation.copyPage}
              copiedLabel="Copied for LLM"
              variant="page"
            />
          </div>

          <p className="text-neutral-600 mb-10 text-[15px] sm:text-[16px] leading-[1.7] max-w-3xl">
            {installation.description}
          </p>

          {/* Requirements */}
          <h2
            className="text-[24px] font-bold tracking-tight text-neutral-950 mt-14 mb-5"
            id="requirements"
          >
            {installation.requirements.title}
          </h2>
          <p className="text-neutral-600 text-[15px] sm:text-[16px] leading-[1.7] mb-6">
            {installation.requirements.description}
          </p>
          <ul className="space-y-3">
            {Object.values(installation.requirements.items).map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-[15px] text-neutral-700">
                <span className="mt-[7px] flex-shrink-0 w-1.5 h-1.5 rounded-full bg-neutral-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Global Installation */}
          <h2
            className="text-[24px] font-bold tracking-tight text-neutral-950 mt-16 mb-5"
            id="global-installation"
          >
            {installation.globalInstall.title}
          </h2>
          <p className="text-neutral-600 text-[15px] sm:text-[16px] leading-[1.7] mb-6">
            {installation.globalInstall.description}
          </p>

          <div className="rounded-xl border border-neutral-200 bg-neutral-50 px-6 py-5 font-mono text-[13.5px] overflow-x-auto text-neutral-800 my-6 shadow-sm">
            <p>
              <span className="text-neutral-400">$ </span>
              npm install -g @ajosecortes/guardian-cli
            </p>
          </div>

          {/* Verify */}
          <h3
            className="text-[18px] font-semibold text-neutral-900 mt-10 mb-4"
            id="verify"
          >
            {installation.verify.title}
          </h3>
          <p className="text-neutral-600 text-[15px] sm:text-[16px] leading-[1.7] mb-4">
            {installation.verify.description}
          </p>

          <div className="rounded-xl border border-neutral-200 bg-neutral-50 px-6 py-5 font-mono text-[13.5px] overflow-x-auto text-neutral-800 my-6 shadow-sm">
            <p>
              <span className="text-neutral-400">$ </span>
              guardian --help
            </p>
          </div>

          {/* Provider CLIs */}
          <h2
            className="text-[24px] font-bold tracking-tight text-neutral-950 mt-16 mb-5"
            id="provider-clis"
          >
            {installation.providerCLIs.title}
          </h2>
          <p className="text-neutral-600 text-[15px] sm:text-[16px] leading-[1.7] mb-6">
            {installation.providerCLIs.description}
          </p>

          <div className="overflow-x-auto rounded-xl border border-neutral-200 my-6">
            <table className="w-full text-[14px]">
              <thead>
                <tr className="border-b border-neutral-200 bg-neutral-50">
                  <th className="text-left px-5 py-3 font-semibold text-neutral-700">Provider</th>
                  <th className="text-left px-5 py-3 font-semibold text-neutral-700">CLI name</th>
                  <th className="text-left px-5 py-3 font-semibold text-neutral-700">Install</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-100">
                  <td className="px-5 py-3 text-neutral-800 font-medium">Claude</td>
                  <td className="px-5 py-3 font-mono text-neutral-600 text-[13px]">claude</td>
                  <td className="px-5 py-3 font-mono text-neutral-500 text-[13px]">See anthropic.com/claude-code</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="px-5 py-3 text-neutral-800 font-medium">Gemini</td>
                  <td className="px-5 py-3 font-mono text-neutral-600 text-[13px]">gemini</td>
                  <td className="px-5 py-3 font-mono text-neutral-500 text-[13px]">See ai.google.dev/gemini-api/docs</td>
                </tr>
                <tr>
                  <td className="px-5 py-3 text-neutral-800 font-medium">OpenCode</td>
                  <td className="px-5 py-3 font-mono text-neutral-600 text-[13px]">opencode</td>
                  <td className="px-5 py-3 font-mono text-neutral-500 text-[13px]">See opencode.ai</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-[14px] text-neutral-500 leading-[1.7] pl-4 border-l-2 border-amber-200 bg-amber-50 py-3 pr-4 rounded-r-lg">
            {installation.providerCLIs.note}
          </p>

          {/* Local Development */}
          <h2
            className="text-[24px] font-bold tracking-tight text-neutral-950 mt-16 mb-5"
            id="local-development"
          >
            {installation.localDev.title}
          </h2>
          <p className="text-neutral-600 text-[15px] sm:text-[16px] leading-[1.7] mb-6">
            {installation.localDev.description}
          </p>

          <div className="rounded-xl border border-neutral-200 bg-neutral-50 px-6 py-5 font-mono text-[13.5px] overflow-x-auto text-neutral-800 my-6 shadow-sm space-y-1">
            <p>
              <span className="text-neutral-400">$ </span>
              git clone https://github.com/JoseCortezz25/guardian.git
            </p>
            <p>
              <span className="text-neutral-400">$ </span>
              cd guardian
            </p>
            <p>
              <span className="text-neutral-400">$ </span>
              npm install
            </p>
            <p>
              <span className="text-neutral-400">$ </span>
              npm run build
            </p>
          </div>

          <h3 className="text-[16px] font-semibold text-neutral-900 mt-8 mb-4">
            {installation.localDev.scripts.title}
          </h3>

          <div className="overflow-x-auto rounded-xl border border-neutral-200 my-4">
            <table className="w-full text-[14px]">
              <thead>
                <tr className="border-b border-neutral-200 bg-neutral-50">
                  <th className="text-left px-5 py-3 font-semibold text-neutral-700">Script</th>
                  <th className="text-left px-5 py-3 font-semibold text-neutral-700">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-100">
                  <td className="px-5 py-3 font-mono text-neutral-600 text-[13px]">npm run build</td>
                  <td className="px-5 py-3 text-neutral-600">{installation.localDev.scripts.build}</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="px-5 py-3 font-mono text-neutral-600 text-[13px]">npm test</td>
                  <td className="px-5 py-3 text-neutral-600">{installation.localDev.scripts.test}</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="px-5 py-3 font-mono text-neutral-600 text-[13px]">npm run test:watch</td>
                  <td className="px-5 py-3 text-neutral-600">{installation.localDev.scripts.testWatch}</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="px-5 py-3 font-mono text-neutral-600 text-[13px]">npm run lint</td>
                  <td className="px-5 py-3 text-neutral-600">{installation.localDev.scripts.lint}</td>
                </tr>
                <tr>
                  <td className="px-5 py-3 font-mono text-neutral-600 text-[13px]">npm run format</td>
                  <td className="px-5 py-3 text-neutral-600">{installation.localDev.scripts.format}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-16 flex items-center justify-between border-t border-neutral-200 pt-8 pb-10">
            <Link
              href="/docs"
              className="hidden sm:flex text-[15px] font-semibold text-neutral-900 hover:text-black transition-colors items-center gap-1.5 px-4 py-2 hover:bg-neutral-50 rounded-lg"
            >
              <span aria-hidden="true" className="mr-1 text-neutral-400">←</span>
              {installation.pagination.prev}
            </Link>
            <Link
              href="/docs/quick-start"
              className="hidden sm:flex text-[15px] font-semibold text-neutral-900 hover:text-black transition-colors items-center gap-1.5 px-4 py-2 hover:bg-neutral-50 rounded-lg"
            >
              {installation.pagination.next}
              <span aria-hidden="true" className="ml-1 text-neutral-400">→</span>
            </Link>
          </div>
        </div>
      </main>

      {/* Right Sidebar (TOC) */}
      <aside className="sticky top-14 hidden w-[260px] shrink-0 overflow-y-auto pt-10 pb-20 pl-8 xl:block h-[calc(100vh-3.5rem)]">
        <h4 className="mb-4 text-[11px] font-bold text-neutral-400 uppercase tracking-[0.2em] pt-4">
          {installation.toc.title}
        </h4>
        <ul className="flex flex-col space-y-3 border-l border-neutral-100 pb-2 text-[13px]">
          <li>
            <a href="#requirements" className="block pl-4 text-neutral-500 hover:text-neutral-900 transition-colors font-medium border-l border-transparent hover:border-neutral-300 -ml-px">
              {installation.toc.items.requirements}
            </a>
          </li>
          <li>
            <a href="#global-installation" className="block pl-4 text-neutral-500 hover:text-neutral-900 transition-colors font-medium border-l border-transparent hover:border-neutral-300 -ml-px">
              {installation.toc.items.globalInstall}
            </a>
          </li>
          <li>
            <a href="#provider-clis" className="block pl-4 text-neutral-500 hover:text-neutral-900 transition-colors font-medium border-l border-transparent hover:border-neutral-300 -ml-px">
              {installation.toc.items.providerCLIs}
            </a>
          </li>
          <li>
            <a href="#local-development" className="block pl-4 text-neutral-500 hover:text-neutral-900 transition-colors font-medium border-l border-transparent hover:border-neutral-300 -ml-px">
              {installation.toc.items.localDev}
            </a>
          </li>
        </ul>
      </aside>
    </>
  );
}
