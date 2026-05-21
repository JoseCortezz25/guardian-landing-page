import Image from 'next/image';
import { landingMessages } from '@/config/messages';

const { features } = landingMessages;

const providerLogos = [
  {
    name: 'Claude',
    src: '/claude-logo.svg',
    alt: 'Claude',
    width: 111,
    height: 35
  },
  {
    name: 'Gemini',
    src: '/gemini-logo.png',
    alt: 'Gemini',
    width: 35,
    height: 35
  },
  {
    name: 'OpenCode',
    src: '/opencode-wordmark-light.svg',
    alt: 'OpenCode',
    width: 127,
    height: 35
  },
  {
    name: 'Codex',
    src: '/codex-color.svg',
    alt: 'OpenAI Codex',
    width: 35,
    height: 35
  },
  {
    name: 'Antigravity CLI',
    src: '/antigravity.svg',
    alt: 'Antigravity CLI',
    width: 37,
    height: 35
  }
] as const;

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

      <div className="mt-12 grid w-full max-w-4xl grid-cols-2 gap-8 md:grid-cols-5 md:gap-10">
        {providerLogos.map(provider => (
          <div
            key={provider.name}
            className="text-md flex flex-col items-center gap-1.5 font-semibold tracking-tight text-neutral-800"
          >
            <div className="flex h-[35px] items-center justify-center">
              <Image
                src={provider.src}
                alt={provider.alt}
                width={provider.width}
                height={provider.height}
                className="h-full w-auto"
              />
            </div>
            {provider.name}
          </div>
        ))}
      </div>
    </section>
  );
}
