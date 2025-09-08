import { Hero } from "../components/Hero";
import { IntroductionSection } from "../components/IntroductionSection";
import { RoutesSection } from "../components/RoutesSection";

export function HomePage() {
  return (
    <main>
      <Hero />
      <IntroductionSection />
      <RoutesSection />
    </main>
  );
}