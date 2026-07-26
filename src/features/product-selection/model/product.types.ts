export type ProductId = "bestseller" | "bulk" | "reusable";

export type UsageMode = "single-use" | "reusable";

export type ProductOption = {
    id: ProductId;
    name: string;
    tag: string;
    tagline: string;
    bestFor: string;
    minQuantity: number;
    priceFrom: string;
    printColours: string;
    deliveryTime: string;
    href: string;
    recommendationReason: string;
};
