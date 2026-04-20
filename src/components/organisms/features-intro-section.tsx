import { landingMessages } from '@/config/messages';

const { features } = landingMessages;

export function FeaturesIntroSection() {
  return (
    <section
      id="providers"
      className="mx-auto flex w-full max-w-5xl flex-col items-center px-4 py-24 text-center text-balance sm:px-6 lg:px-8"
    >
      <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
        {features.heading}
      </h2>
      <p className="mt-4 max-w-2xl text-lg text-neutral-600">
        {features.description}
      </p>

      <div className="mt-12 flex items-center justify-center gap-[30px] text-neutral-400 md:gap-[60px]">
        <div className="text-md flex flex-col items-center gap-1.5 font-semibold tracking-tight text-neutral-800">
          <div className="h-[35px] [&>img]:h-full">
            <img src="/claude-logo.svg" alt="Claude" />
          </div>
          Claude
        </div>
        <div className="text-md flex flex-col items-center gap-1.5 font-semibold tracking-tight text-neutral-800">
          <div className="h-[35px] [&>img]:h-full">
            <img src="/gemini-logo.png" alt="" />
          </div>
          Gemini
        </div>
        <div className="text-md flex flex-col items-center gap-1.5 font-semibold tracking-tight text-neutral-800">
          <div className="h-[35px] [&>img]:h-full">
            <img src="/opencode-wordmark-light.svg" alt="" />
          </div>
          OpenCode
        </div>
      </div>
    </section>
  );
}
