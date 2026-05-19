import { Copy } from 'lucide-react';
import { CopyButton } from '@/components/atoms/copy-button';
import { landingMessages } from '@/config/messages';

const { integration } = landingMessages;

interface IntegrationCardProps {
  title: string;
  description: string;
  command: string;
}

function IntegrationCard({
  title,
  description,
  command
}: IntegrationCardProps) {
  return (
    <div className="flex flex-col rounded-xl border border-neutral-200 bg-white p-6 transition-all hover:border-neutral-300 hover:shadow-md">
      <h3 className="mb-2 text-lg font-bold text-black">{title}</h3>
      <p className="mb-6 flex-1 text-sm text-neutral-500">{description}</p>
      <div className="flex items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-2">
        <code className="font-mono text-xs text-neutral-700">{command}</code>
        <CopyButton
          text={command}
          className="cursor-pointer text-neutral-400 transition-colors hover:text-black"
        />
      </div>
    </div>
  );
}

export function IntegrationSection() {
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

      <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
        <IntegrationCard
          title={integration.cards.init.title}
          description={integration.cards.init.description}
          command={integration.cards.init.command}
        />
        <IntegrationCard
          title={integration.cards.install.title}
          description={integration.cards.install.description}
          command={integration.cards.install.command}
        />
        <IntegrationCard
          title={integration.cards.run.title}
          description={integration.cards.run.description}
          command={integration.cards.run.command}
        />
      </div>
    </section>
  );
}
