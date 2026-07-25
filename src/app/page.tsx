import { Hero } from "@/features/category-page/components/hero";
import { cupsHeroContent } from "@/features/category-page/data/hero-content";

export default function Home() {
    return (
        <main>
            <Hero content={cupsHeroContent} />
        </main>
    );
}
