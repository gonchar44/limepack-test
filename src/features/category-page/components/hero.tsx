import { Play } from "lucide-react";
import Image from "next/image";

import { Button } from "@/shared/components/button";
import type { HeroContent } from "@/features/category-page/model/hero.types";

type HeroProps = {
    content: HeroContent;
};

export function Hero({ content }: HeroProps) {
    return (
        <section className="mx-auto max-w-6xl px-6 py-12 md:py-16">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[3fr_2fr] lg:gap-14">
                <div>
                    <div className="bg-brand-100 text-brand-700 mb-5 inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-sm font-bold">
                        <span className="bg-brand-500 h-1.5 w-1.5 rounded-full" aria-hidden="true" />
                        {content.eyebrow}
                    </div>

                    <h1 className="text-4xl leading-tight font-bold tracking-tight text-neutral-950 md:text-6xl">
                        {content.heading}
                    </h1>

                    <p className="text-ink-secondary mt-5 max-w-lg text-lg leading-relaxed text-pretty">
                        {content.description}
                    </p>

                    <div className="mt-7 flex flex-wrap gap-3">
                        <Button href={content.primaryAction.href} variant="primary">
                            {content.primaryAction.label}
                        </Button>
                        {content.secondaryAction ? (
                            <Button href={content.secondaryAction.href} variant="secondary">
                                {content.secondaryAction.label}
                            </Button>
                        ) : null}
                    </div>
                </div>

                <div className="border-border relative aspect-video overflow-hidden rounded-3xl border lg:aspect-5/4">
                    <Image
                        src={content.image.src}
                        alt={content.image.alt}
                        fill
                        sizes="(min-width: 1024px) 420px, 90vw"
                        priority
                        className="object-cover"
                    />
                    {content.video ? (
                        <div
                            className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/10"
                            aria-hidden="true"
                        >
                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-neutral-950 text-white">
                                <Play className="ml-0.5 h-5 w-5" fill="currentColor" />
                            </div>
                            <div className="rounded-full bg-white/90 px-3 py-1 text-sm font-semibold text-neutral-800">
                                {content.video.label}
                            </div>
                        </div>
                    ) : null}
                </div>
            </div>
        </section>
    );
}
