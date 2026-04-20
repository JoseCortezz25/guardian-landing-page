import Link from 'next/link';
import { githubUrls, landingMessages } from '@/config/messages';

const { footer } = landingMessages;

export function Footer() {
  return (
    <footer className="mx-auto flex w-full max-w-7xl flex-col justify-between gap-8 px-4 py-16 text-sm sm:px-6 md:flex-row lg:px-8">
      <div className="space-y-4">
        <h4 className="text-xs font-bold tracking-wider text-black uppercase">
          {footer.resourcesTitle}
        </h4>
        <ul className="space-y-3 text-neutral-500">
          <li>
            <Link
              href="#integration"
              className="transition-colors hover:text-black"
            >
              {footer.links.integration}
            </Link>
          </li>
          <li>
            <Link
              href="#providers"
              className="transition-colors hover:text-black"
            >
              {footer.links.providers}
            </Link>
          </li>
          <li>
            <a
              href={githubUrls.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-black"
            >
              {footer.links.githubRepo}
            </a>
          </li>
          <li>
            <a
              href={githubUrls.issues}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-black"
            >
              {footer.links.issues}
            </a>
          </li>
        </ul>
      </div>

      <div className="flex flex-col items-start justify-between text-neutral-500 md:items-end">
        <div className="mt-4 mb-4 flex flex-col items-start gap-1 md:mt-0 md:mb-0 md:items-end">
          <div className="flex items-center gap-1.5 font-bold text-black">
            <div className="h-[24px] [&>img]:h-full">
              <img src="/guardian-logo.png" alt="" />
            </div>
            {footer.brand}
          </div>
          <a
            href={githubUrls.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium transition-colors hover:text-black"
          >
            {footer.author}
          </a>
        </div>
        <p className="mt-auto pt-8 text-xs text-neutral-400">
          {footer.copyright}
        </p>
      </div>
    </footer>
  );
}
