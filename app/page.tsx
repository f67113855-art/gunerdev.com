import { Hero } from '@/components/Hero';
import { ErciyesShowcase } from '@/components/ErciyesShowcase';
import { Services } from '@/components/Services';
import { Process } from '@/components/Process';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { CTA } from '@/components/CTA';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  path: '/',
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <ErciyesShowcase />
      <Services />
      <Process />
      <WhyChooseUs />
      <CTA />
    </>
  );
}
