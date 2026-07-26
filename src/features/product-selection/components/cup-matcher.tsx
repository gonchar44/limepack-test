"use client";

import { useState } from "react";

import { cupProducts } from "@/features/product-selection/data/products";
import { recommendProduct } from "@/features/product-selection/model/recommend-product";
import type { UsageMode } from "@/features/product-selection/model/product.types";
import { DEFAULT_QUANTITY, ProductSelector } from "@/features/product-selection/components/product-selector";
import { ProductComparison } from "@/features/product-selection/components/product-comparison";

export function CupMatcher() {
    const [usage, setUsage] = useState<UsageMode>("single-use");
    const [quantity, setQuantity] = useState(DEFAULT_QUANTITY);

    const recommendedId = recommendProduct({ usage, quantity });
    const recommended = cupProducts.find((product) => product.id === recommendedId) ?? cupProducts[0];

    return (
        <>
            <ProductSelector
                usage={usage}
                quantity={quantity}
                onUsageChange={setUsage}
                onQuantityChange={setQuantity}
                recommended={recommended}
            />
            <ProductComparison recommendedId={recommendedId} />
        </>
    );
}
