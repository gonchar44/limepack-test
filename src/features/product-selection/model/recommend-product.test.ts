import { describe, expect, it } from "vitest";

import { recommendProduct } from "@/features/product-selection/model/recommend-product";
import type { ProductOption } from "@/features/product-selection/model/product.types";

const catalog: ProductOption[] = [
    {
        id: "bestseller",
        name: "Bestseller",
        tag: "Most popular",
        tagline: "",
        bestFor: "",
        minQuantity: 1000,
        priceFrom: "£0.16",
        printColours: "",
        deliveryTime: "",
        href: "",
        recommendationReason: "",
    },
    {
        id: "bulk",
        name: "Bulk",
        tag: "Best price",
        tagline: "",
        bestFor: "",
        minQuantity: 10000,
        priceFrom: "£0.09",
        printColours: "",
        deliveryTime: "",
        href: "",
        recommendationReason: "",
    },
    {
        id: "reusable",
        name: "Reusable",
        tag: "Durable",
        tagline: "",
        bestFor: "",
        minQuantity: 552,
        priceFrom: "£0.42",
        printColours: "",
        deliveryTime: "",
        href: "",
        recommendationReason: "",
    },
];

describe("recommendProduct", () => {
    it("recommends bestseller below the supported minimum quantity", () => {
        expect(recommendProduct({ usage: "single-use", quantity: 100 }, catalog)).toBe("bestseller");
    });

    it("recommends bestseller just under the bulk threshold", () => {
        expect(recommendProduct({ usage: "single-use", quantity: 9999 }, catalog)).toBe("bestseller");
    });

    it("recommends bulk exactly at the bulk threshold", () => {
        expect(recommendProduct({ usage: "single-use", quantity: 10000 }, catalog)).toBe("bulk");
    });

    it("recommends bulk just above the bulk threshold", () => {
        expect(recommendProduct({ usage: "single-use", quantity: 10001 }, catalog)).toBe("bulk");
    });

    it("recommends bulk for very large quantities", () => {
        expect(recommendProduct({ usage: "single-use", quantity: 1_000_000 }, catalog)).toBe("bulk");
    });

    it("falls back to bestseller for a negative quantity", () => {
        expect(recommendProduct({ usage: "single-use", quantity: -50 }, catalog)).toBe("bestseller");
    });

    it("falls back to bestseller for a NaN quantity", () => {
        expect(recommendProduct({ usage: "single-use", quantity: Number.NaN }, catalog)).toBe("bestseller");
    });

    it("recommends reusable whenever usage is reusable, regardless of quantity", () => {
        expect(recommendProduct({ usage: "reusable", quantity: 100 }, catalog)).toBe("reusable");
        expect(recommendProduct({ usage: "reusable", quantity: 50000 }, catalog)).toBe("reusable");
    });

    it("derives the bulk threshold from the catalog instead of a hardcoded value", () => {
        const customCatalog = catalog.map((product) =>
            product.id === "bulk" ? { ...product, minQuantity: 5000 } : product,
        );
        expect(recommendProduct({ usage: "single-use", quantity: 5000 }, customCatalog)).toBe("bulk");
        expect(recommendProduct({ usage: "single-use", quantity: 4999 }, customCatalog)).toBe("bestseller");
    });
});
