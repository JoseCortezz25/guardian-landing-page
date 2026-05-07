import { DocsMobileNav } from '@/components/layout/docs-mobile-nav';
import { DocsSidebar } from '@/components/layout/docs-sidebar';

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-black selection:bg-neutral-200">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <DocsMobileNav />
        <div className="flex items-start">
          <DocsSidebar />
          {children}
        </div>
      </div>
    </div>
  );
}
