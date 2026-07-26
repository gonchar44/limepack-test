import { Check } from "lucide-react";

import { Button } from "@/shared/components/button";
import { cn } from "@/shared/lib/cn";
import type { ProductCardData } from "@/features/product-selection/model/product-card-data";

type ProductCardProps = {
    data: ProductCardData;
    isRecommended: boolean;
};

export function ProductCard({ data, isRecommended }: ProductCardProps) {
    return (
        <div
            className={cn(
                "relative flex flex-col rounded-3xl bg-white",
                isRecommended ? "border-brand-500 border-2" : "border-border border",
            )}
        >
            {isRecommended ? (
                <span className="bg-brand-500 text-brand-950 absolute -top-3.5 left-5 z-10 inline-flex items-center gap-1 rounded-full px-3.5 py-1.5 text-xs font-bold shadow-sm">
                    <Check className="h-3.5 w-3.5" aria-hidden="true" />
                    Recommended for you
                </span>
            ) : null}

            <div
                aria-hidden="true"
                className="border-border-subtle relative flex h-44 items-center justify-center overflow-hidden rounded-t-[calc(1.5rem-1px)] border-b bg-[repeating-linear-gradient(135deg,var(--color-surface-muted)_0,var(--color-surface-muted)_12px,var(--color-border-subtle)_12px,var(--color-border-subtle)_24px)]"
            >
                <span className="border-border text-brand-700 absolute top-3 left-3 rounded-full border bg-white px-2.5 py-1 text-xs font-bold">
                    {data.badgeLabel}
                </span>
                <span className="text-ink-secondary font-mono text-xs tracking-wide">{data.placeholderLabel}</span>
            </div>

            <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-bold tracking-tight text-neutral-950">{data.title}</h3>
                <p className="text-ink-secondary mt-2 text-sm leading-relaxed">{data.tagline}</p>

                <dl className="border-border-subtle mt-4 border-t">
                    {data.specs.map((spec) => (
                        <div
                            key={spec.label}
                            className="border-border-subtle flex items-baseline justify-between gap-4 border-b py-2.5 last:border-b-0"
                        >
                            <dt className="text-ink-secondary text-xs">{spec.label}</dt>
                            <dd className="max-w-[9rem] text-right text-sm font-semibold text-neutral-950">
                                {spec.value}
                            </dd>
                        </div>
                    ))}
                </dl>

                <Button href={data.href} variant="primary" className="mt-5 w-full">
                    {data.ctaLabel}
                </Button>
                {data.footnote ? <p className="text-ink-secondary mt-3 text-center text-xs">{data.footnote}</p> : null}
            </div>
        </div>
    );
}
