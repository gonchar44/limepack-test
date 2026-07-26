import { Hero } from "@/features/category-page/components/hero";
import { TrustStrip } from "@/features/category-page/components/trust-strip";
import { cupsHeroContent } from "@/features/category-page/data/hero-content";
import { cupsTrustContent } from "@/features/category-page/data/trust-content";
import { ProductSelector } from "@/features/product-selection/components/product-selector";

export default function Home() {
    return (
        <main>
            <Hero content={cupsHeroContent} />
            <TrustStrip content={cupsTrustContent} />
            <ProductSelector />
        </main>
    );
}
