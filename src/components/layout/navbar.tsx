import Image from 'next/image';
import Link from 'next/link';
import { Github } from 'lucide-react';
import { githubUrls, landingMessages } from '@/config/messages';

const { nav } = landingMessages;

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2 font-medium">
            <div className="h-[24px]">
              <Image src="/guardian-logo.png" alt="Guardian" width={24} height={24} className="h-full w-auto" />
            </div>
            <span className="font-bold tracking-tight">{nav.brand}</span>
          </Link>
          <div className="hidden items-center gap-6 text-sm text-neutral-500 md:flex">
            <Link
              href="/#integration"
              className="transition-colors hover:text-black"
            >
              {nav.integration}
            </Link>
            <Link
              href="/#providers"
              className="transition-colors hover:text-black"
            >
              {nav.providers}
            </Link>
            <Link
              href="/docs"
              className="transition-colors hover:text-black"
            >
              {nav.docs}
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href={githubUrls.issues}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden text-sm font-medium text-neutral-500 transition-colors hover:text-black sm:block"
          >
            {nav.feedback}
          </Link>
          <Link
            href={githubUrls.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-8 items-center justify-center rounded-md bg-black px-4 text-sm font-medium text-white transition-colors hover:bg-neutral-800 focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 focus:outline-none"
          >
            <Github className="mr-2 h-4 w-4" />
            {nav.starOnGithub}
          </Link>
        </div>
      </div>
    </nav>
  );
}
