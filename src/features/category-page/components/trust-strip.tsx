import type { TrustContent } from "@/features/category-page/model/trust.types";
import { cn } from "@/shared/lib/cn";

type TrustStripProps = {
    content: TrustContent;
};

export function TrustStrip({ content }: TrustStripProps) {
    return (
        <section className="w-full bg-neutral-950">
            <div className="mx-auto max-w-6xl px-6 py-5 sm:px-10">
                <div className="grid grid-cols-2 items-start gap-x-8 gap-y-5 sm:grid-cols-[repeat(auto-fit,minmax(138px,1fr))]">
                    {content.stats.map((stat) => (
                        <div key={stat.label}>
                            <p
                                className={cn("font-bold", {
                                    "text-brand-500 text-2xl leading-none md:text-3xl": stat.variant !== "note",
                                    "text-base leading-tight text-white": stat.variant === "note",
                                })}
                            >
                                {stat.value}
                            </p>
                            <p className="mt-1.5 text-sm text-white/60">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
