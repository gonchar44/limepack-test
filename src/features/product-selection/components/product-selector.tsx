import { Button } from "@/shared/components/button";
import { QuantitySelector } from "@/shared/components/quantity-selector";
import { SegmentedControl } from "@/shared/components/segmented-control";
import type { ProductOption, UsageMode } from "@/features/product-selection/model/product.types";

export const QUANTITY_PRESETS = [1000, 5000, 10000, 25000, 50000];
export const QUANTITY_MIN = 1000;
export const QUANTITY_MAX = 100000;
export const QUANTITY_STEP = 100;
export const DEFAULT_QUANTITY = 5000;

export const formatQuantity = (value: number) => value.toLocaleString("en-GB");

type ProductSelectorProps = {
    usage: UsageMode;
    quantity: number;
    onUsageChange: (usage: UsageMode) => void;
    onQuantityChange: (quantity: number) => void;
    recommended: ProductOption;
};

export function ProductSelector({
    usage,
    quantity,
    onUsageChange,
    onQuantityChange,
    recommended,
}: ProductSelectorProps) {
    const contextLabel = usage === "reusable" ? "reusable cups" : `${formatQuantity(quantity)} single-use cups`;

    return (
        <section id="matcher" className="bg-surface-muted border-border-subtle scroll-mt-5 border-y">
            <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 py-14 md:py-20 lg:grid-cols-2 lg:gap-14">
                <div>
                    <div className="text-brand-600 mb-3 text-xs font-bold tracking-widest uppercase">
                        Find your cup · 10 seconds
                    </div>
                    <h2 className="text-2xl leading-tight font-bold tracking-tight text-neutral-950 md:text-4xl">
                        Tell us two things and we&apos;ll point you to the right cup.
                    </h2>

                    <div className="mt-8">
                        <p className="mb-3 text-sm font-bold text-neutral-950">1 · How will they be used?</p>
                        <SegmentedControl
                            name="usage-mode"
                            legend="How will the cups be used?"
                            value={usage}
                            onChange={onUsageChange}
                            options={[
                                { value: "single-use", label: "Single-use" },
                                { value: "reusable", label: "Reusable" },
                            ]}
                        />
                    </div>

                    <div className="mt-8">
                        <p className="mb-3 text-sm font-bold text-neutral-950">2 · Roughly how many cups?</p>
                        <QuantitySelector
                            name="quantity"
                            legend="Roughly how many cups do you need?"
                            value={quantity}
                            onChange={onQuantityChange}
                            min={QUANTITY_MIN}
                            max={QUANTITY_MAX}
                            step={QUANTITY_STEP}
                            presets={QUANTITY_PRESETS}
                            unitLabel="cups"
                            formatValue={formatQuantity}
                        />
                    </div>
                </div>

                <div
                    className="rounded-3xl bg-neutral-950 p-8 text-white md:p-10"
                    aria-live="polite"
                    aria-atomic="true"
                >
                    <p className="text-sm text-white/60">For {contextLabel} we recommend</p>
                    <p className="mt-2 text-3xl leading-tight font-bold tracking-tight md:text-4xl">
                        {recommended.name} <span className="text-brand-400">cups</span>
                    </p>
                    <p className="mt-4 leading-relaxed text-white/80">{recommended.recommendationReason}</p>
                    <div className="mt-5 flex items-center gap-2 text-sm text-white/70">
                        <span className="text-brand-400" aria-hidden="true">
                            ●
                        </span>
                        Ready {recommended.deliveryTime}
                    </div>
                    <Button href={recommended.href} variant="primary" className="mt-6">
                        See {recommended.name} cups →
                    </Button>
                    <p className="mt-4 text-xs text-white/40">Highlighted in the comparison below</p>
                </div>
            </div>
        </section>
    );
}
