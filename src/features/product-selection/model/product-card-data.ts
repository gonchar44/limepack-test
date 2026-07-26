import type { ProductOption } from "@/features/product-selection/model/product.types";

export type ProductCardData = {
    id: string;
    title: string;
    badgeLabel: string;
    tagline: string;
    placeholderLabel: string;
    specs: { label: string; value: string }[];
    ctaLabel: string;
    href: string;
    footnote?: string;
};

export function toProductCardData(product: ProductOption): ProductCardData {
    return {
        id: product.id,
        title: `${product.name} plastic cups`,
        badgeLabel: product.tag,
        tagline: product.tagline,
        placeholderLabel: `${product.name} cup shot`,
        specs: [
            { label: "Minimum order", value: `${product.minQuantity.toLocaleString("en-GB")} cups` },
            { label: "Indicative price", value: `${product.priceFrom}/cup` },
            { label: "Print colours", value: product.printColours },
            { label: "Delivery", value: product.deliveryTime },
            { label: "Best for", value: product.bestFor },
        ],
        ctaLabel: `See ${product.name} prices & configure →`,
        href: product.href,
        footnote: "Free 3D proof · order fully online",
    };
}
