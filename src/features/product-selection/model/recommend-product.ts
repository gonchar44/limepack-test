import { cupProducts } from "@/features/product-selection/data/products";
import type { ProductId, ProductOption, UsageMode } from "@/features/product-selection/model/product.types";

export type RecommendationInput = {
    usage: UsageMode;
    quantity: number;
};

export function recommendProduct(
    { usage, quantity }: RecommendationInput,
    catalog: ProductOption[] = cupProducts,
): ProductId {
    if (usage === "reusable") return "reusable";

    const bulkThreshold = catalog.find((product) => product.id === "bulk")?.minQuantity ?? 10000;
    const safeQuantity = Number.isFinite(quantity) ? quantity : 0;

    return safeQuantity >= bulkThreshold ? "bulk" : "bestseller";
}
