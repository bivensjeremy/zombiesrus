import Hero from '../components/Hero';
import Features from '../components/Features';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import SocialLinks from '../components/SocialLinks';

export default function Home() {
  return (
    <section className="">
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
      <CTA />
      <SocialLinks />
    </section>
  );
}
