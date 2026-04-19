import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/organisms/hero-section';
import { StatsStrip } from '@/components/organisms/stats-strip';
import { FeaturesIntroSection } from '@/components/organisms/features-intro-section';
import { BentoGrid } from '@/components/organisms/bento-grid';
import { IntegrationSection } from '@/components/organisms/integration-section';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black selection:bg-neutral-200">
      <Navbar />
      <main className="flex w-full flex-col items-center">
        <HeroSection />
        <StatsStrip />
        <FeaturesIntroSection />
        <BentoGrid />
        <IntegrationSection />
      </main>
      <Footer />
    </div>
  );
}
