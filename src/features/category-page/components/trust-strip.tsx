import { CircleCheck } from "lucide-react";
import type { TrustContent } from "@/features/category-page/model/trust.types";
import { cn } from "@/shared/lib/cn";

type TrustStripProps = {
    content: TrustContent;
};

export function TrustStrip({ content }: TrustStripProps) {
    return (
        <section className="w-full bg-neutral-950">
            <div className="mx-auto max-w-6xl px-6 py-3">
                <div className="grid grid-cols-2 sm:grid-cols-4">
                    {content.stats.map((stat) => (
                        <div key={stat.label} className="flex items-start gap-3 px-4 py-2 sm:px-6">
                            <CircleCheck
                                aria-hidden="true"
                                className="text-brand-500 bg-brand-500/20 mt-1.5 size-5 shrink-0 rounded-full"
                            />
                            <div>
                                <p
                                    className={cn("text-xl font-bold md:text-2xl", {
                                        "text-brand-500": stat.emphasis === "brand",
                                        "text-white": stat.emphasis !== "brand",
                                    })}
                                >
                                    {stat.value}
                                </p>
                                <p className="mt-0.5 text-sm text-white/60">{stat.label}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
