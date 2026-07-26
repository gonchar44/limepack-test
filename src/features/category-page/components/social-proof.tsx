import { CheckIcon } from "lucide-react";
import Image from "next/image";

import type { SocialProofContent } from "@/features/category-page/model/social-proof.types";

type SocialProofProps = {
    content: SocialProofContent;
};

export function SocialProof({ content }: SocialProofProps) {
    return (
        <section className="bg-neutral-950">
            <div className="mx-auto max-w-6xl px-6 py-12 sm:px-10 md:py-16">
                <div className="mx-auto max-w-xl text-center">
                    <div className="text-brand-400 mb-3 text-xs font-bold tracking-widest uppercase">
                        {content.eyebrow}
                    </div>
                    <h2 className="text-2xl leading-tight font-bold tracking-tight text-white md:text-4xl">
                        {content.heading}
                    </h2>
                </div>

                <div className="mx-auto mt-10 flex max-w-4xl flex-wrap items-center justify-center gap-x-10 gap-y-6 border-b border-white/10 pb-10">
                    {content.logos.map((logo) => (
                        <Image
                            key={logo.name}
                            src={logo.src}
                            alt={logo.alt}
                            width={120}
                            height={40}
                            loading="lazy"
                            className="h-8 w-auto object-contain opacity-80 brightness-0 invert transition-opacity hover:opacity-100 motion-reduce:transition-none"
                        />
                    ))}
                </div>

                <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-x-10 gap-y-7 sm:grid-cols-2">
                    {content.values.map((value) => (
                        <div key={value.title} className="flex items-start gap-3.5">
                            <span
                                className="bg-brand-500/16 text-brand-400 flex h-7 w-7 shrink-0 items-center justify-center rounded-full"
                                aria-hidden="true"
                            >
                                <CheckIcon className="h-4 w-4" strokeWidth={3} />
                            </span>
                            <div>
                                <div className="text-base font-semibold text-white">{value.title}</div>
                                <div className="mt-1 text-sm leading-relaxed text-white/60">{value.description}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
