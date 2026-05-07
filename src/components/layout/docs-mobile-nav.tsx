'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { docsMessages, landingMessages } from '@/config/messages';
import { cn } from '@/lib/utils';

const { sidebar } = docsMessages;
const { nav } = landingMessages;

const landingLinks = [
  { href: '/', label: nav.brand },
  { href: '/#integration', label: nav.integration },
  { href: '/#providers', label: nav.providers }
] as const;

const docsMobileLinks = [
  { href: '/docs', label: sidebar.links.introduction },
  { href: '/docs/installation', label: sidebar.links.installation },
  { href: '/docs/quick-start', label: sidebar.links.quickStart },
  { href: '/docs/configuration', label: sidebar.links.configuration },
  { href: '/docs/api', label: sidebar.links.api },
  { href: '/docs/skills', label: sidebar.links.skills },
  { href: '/docs/changelog', label: sidebar.links.changelog }
] as const;

export function DocsMobileNav() {
  const pathname = usePathname();

  return (
    <div className="sticky top-14 z-40 -mx-4 border-b border-neutral-200 bg-white/95 px-4 py-3 backdrop-blur sm:-mx-6 sm:px-6 md:hidden">
      <div className="mb-3 flex gap-2 overflow-x-auto pb-1">
        {landingLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="shrink-0 rounded-full border border-neutral-200 bg-white px-3 py-2 text-[13px] font-medium text-neutral-600 transition-colors hover:border-neutral-300 hover:text-neutral-900"
          >
            {link.label}
          </Link>
        ))}
      </div>

      <div className="mb-2 text-[11px] font-bold tracking-[0.18em] text-neutral-400 uppercase">
        Docs Navigation
      </div>
      <div className="scrollbar-none flex gap-2 overflow-x-auto pb-1">
        {docsMobileLinks.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'shrink-0 rounded-full border px-3 py-2 text-[13px] font-medium transition-all',
                isActive
                  ? 'border-black bg-black text-white shadow-sm'
                  : 'border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300 hover:text-neutral-900'
              )}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
