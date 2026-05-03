import { Hero } from '@/components/Hero';
import { KayseriCarousel } from '@/components/KayseriCarousel';
import { Services } from '@/components/Services';
import { Process } from '@/components/Process';
import { Parallax } from '@/components/Parallax';
import { Reviews } from '@/components/Reviews';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { FAQ } from '@/components/FAQ';
import { CTA } from '@/components/CTA';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  path: '/',
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <KayseriCarousel />
      <Services />
      <Process />
      <Parallax />
      <Reviews />
      <WhyChooseUs />
      <FAQ />
      <CTA />
    </>
  );
}
