import { cupProducts } from "@/features/product-selection/data/products";
import { cupLidsUpsell } from "@/features/product-selection/data/accessories";
import { CrossSellStrip } from "@/features/product-selection/components/cross-sell-strip";
import { ProductCard } from "@/features/product-selection/components/product-card";
import { toProductCardData } from "@/features/product-selection/model/product-card-data";
import type { ProductId } from "@/features/product-selection/model/product.types";

type ProductComparisonProps = {
    recommendedId: ProductId;
};

export function ProductComparison({ recommendedId }: ProductComparisonProps) {
    return (
        <section id="products" className="scroll-mt-5">
            <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
                <div className="max-w-xl">
                    <div className="text-brand-600 mb-3 text-xs font-bold tracking-widest uppercase">
                        Three ways to print
                    </div>
                    <h2 className="text-2xl leading-tight font-bold tracking-tight text-neutral-950 md:text-4xl">
                        Same cup, three production routes
                    </h2>
                    <p className="text-ink-secondary mt-3.5 text-base leading-relaxed text-pretty">
                        They look alike, but the way we print them changes your minimum order, price, colours and
                        delivery. Here&apos;s the difference at a glance.
                    </p>
                </div>

                <div className="mt-10 grid grid-cols-1 items-start gap-7 md:grid-cols-3">
                    {cupProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            data={toProductCardData(product)}
                            isRecommended={product.id === recommendedId}
                        />
                    ))}
                </div>

                <CrossSellStrip {...cupLidsUpsell} />
            </div>
        </section>
    );
}
