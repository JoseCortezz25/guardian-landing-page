import { landingMessages } from '@/config/messages';

const { stats } = landingMessages;

export function StatsStrip() {
  return (
    <section className="w-full border-y border-neutral-200 bg-neutral-50/30">
      <div className="mx-auto flex max-w-5xl flex-row items-center justify-around px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
            {stats.providers.value}
          </p>
          <p className="mt-2 text-xs font-medium tracking-wider text-neutral-500 uppercase sm:text-sm">
            {stats.providers.label}
          </p>
        </div>
        <div className="border-l border-neutral-200 pl-8 text-center sm:pl-20">
          <p className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
            {stats.cacheHits.value}
          </p>
          <p className="mt-2 text-xs font-medium tracking-wider text-neutral-500 uppercase sm:text-sm">
            {stats.cacheHits.label}
          </p>
        </div>
        <div className="border-l border-neutral-200 pl-8 text-center sm:pl-20">
          <p className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
            {stats.localHooks.value}
          </p>
          <p className="mt-2 text-xs font-medium tracking-wider text-neutral-500 uppercase sm:text-sm">
            {stats.localHooks.label}
          </p>
        </div>
      </div>
    </section>
  );
}
