import { CheckCircle2, Copy } from 'lucide-react';
import { CopyButton } from '@/components/atoms/copy-button';
import { landingMessages } from '@/config/messages';

const { integration } = landingMessages;

export function IntegrationSection() {
  const steps = Object.values(integration.steps);

  return (
    <section
      id="integration"
      className="mx-auto flex w-full max-w-5xl flex-col items-start px-4 py-24 text-left sm:px-6 lg:px-8"
    >
      <div className="mb-12 flex w-full flex-col justify-between gap-6 md:flex-row md:items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
            {integration.heading}
          </h2>
          <p className="mt-2 text-neutral-600">{integration.description}</p>
        </div>
        <div className="flex items-center rounded-md border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-sm">
          <code className="mr-2 font-mono text-neutral-600">
            {integration.installCommand}
          </code>
          <Copy className="h-3 w-3 text-neutral-400" />
        </div>
      </div>

      <div className="w-full overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
        <div className="border-b border-neutral-200 bg-neutral-50/70 px-6 py-6 sm:px-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
            <div className="max-w-2xl text-left">
              <p className="text-[11px] font-semibold tracking-[0.22em] text-neutral-400 uppercase">
                Quick setup
              </p>
              <h3 className="mt-3 text-2xl font-bold tracking-tight text-black">
                {integration.commandTitle}
              </h3>
              <p className="mt-3 text-sm leading-7 text-neutral-600">
                {integration.commandDescription}
              </p>
            </div>

            <div className="flex items-center justify-between gap-3 rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm shadow-sm md:min-w-[260px]">
              <code className="font-mono text-neutral-700">
                {integration.command}
              </code>
              <CopyButton
                text={integration.command}
                className="cursor-pointer text-neutral-400 transition-colors hover:text-black"
              />
            </div>
          </div>
        </div>

        <div className="grid gap-0 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step}
              className="border-neutral-200 p-6 text-left last:border-r-0 md:border-r"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200 bg-neutral-50 text-xs font-semibold text-neutral-700">
                  0{index + 1}
                </span>
              </div>
              <p className="text-sm leading-7 text-neutral-600">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
