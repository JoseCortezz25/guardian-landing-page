'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { docsMessages } from '@/config/messages';

const { sidebar } = docsMessages;

interface NavLinkProps {
  href: string;
  label: string;
  pathname: string;
}

function NavLink({ href, label, pathname }: NavLinkProps) {
  const isActive = pathname === href;
  const isDisabled = href === '#';

  if (isDisabled) {
    return (
      <li>
        <span className="cursor-default text-[14px] text-neutral-400 select-none">
          {label}
        </span>
      </li>
    );
  }

  return (
    <li>
      <Link
        href={href}
        className={
          isActive
            ? '-ml-3 border-l-2 border-black pl-3 text-[14px] font-semibold text-neutral-900'
            : 'text-[14px] text-neutral-600 transition-colors hover:text-neutral-900'
        }
      >
        {label}
      </Link>
    </li>
  );
}

export function DocsSidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-14 hidden h-[calc(100vh-3.5rem)] w-[240px] shrink-0 overflow-y-auto pt-10 pr-6 pb-20 md:block lg:w-[260px]">
      <div className="flex flex-col gap-10">
        <div>
          <h4 className="mb-4 text-[11px] font-bold tracking-[0.2em] text-neutral-400 uppercase">
            {sidebar.sections.gettingStarted}
          </h4>
          <ul className="flex flex-col space-y-3 pb-2">
            <NavLink
              href="/docs"
              label={sidebar.links.introduction}
              pathname={pathname}
            />
            <NavLink
              href="/docs/installation"
              label={sidebar.links.installation}
              pathname={pathname}
            />
            <NavLink
              href="/docs/quick-start"
              label={sidebar.links.quickStart}
              pathname={pathname}
            />
            <NavLink
              href="/docs/configuration"
              label={sidebar.links.configuration}
              pathname={pathname}
            />
            <NavLink
              href="/docs/changelog"
              label={sidebar.links.changelog}
              pathname={pathname}
            />
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-[11px] font-bold tracking-[0.2em] text-neutral-400 uppercase">
            {sidebar.sections.reference}
          </h4>
          <ul className="flex flex-col space-y-3 pb-2">
            <NavLink
              href="/docs/api"
              label={sidebar.links.api}
              pathname={pathname}
            />
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-[11px] font-bold tracking-[0.2em] text-neutral-400 uppercase">
            {sidebar.sections.skills}
          </h4>
          <ul className="flex flex-col space-y-3 pb-2">
            <NavLink
              href="/docs/skills"
              label={sidebar.links.skills}
              pathname={pathname}
            />
          </ul>
        </div>
      </div>
    </aside>
  );
}
