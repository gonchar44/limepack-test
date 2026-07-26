import { Hero } from "@/features/category-page/components/hero";
import { TrustStrip } from "@/features/category-page/components/trust-strip";
import { cupsHeroContent } from "@/features/category-page/data/hero-content";
import { cupsTrustContent } from "@/features/category-page/data/trust-content";

export default function Home() {
    return (
        <main>
            <Hero content={cupsHeroContent} />
            <TrustStrip content={cupsTrustContent} />
        </main>
    );
}
