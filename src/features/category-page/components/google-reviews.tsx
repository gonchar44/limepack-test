"use client";

import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from "lucide-react";
import { useState } from "react";

import type { ReviewsContent } from "@/features/category-page/model/reviews.types";
import { Button } from "@/shared/components/button";
import { cn } from "@/shared/lib/cn";

type GoogleReviewsProps = {
    content: ReviewsContent;
};

export function GoogleReviews({ content }: GoogleReviewsProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const total = content.reviews.length;

    function goTo(index: number) {
        setCurrentIndex(((index % total) + total) % total);
    }

    return (
        <section className="bg-surface-muted border-border-subtle border-t">
            <div className="mx-auto max-w-4xl px-6 py-12 sm:px-10 md:py-16">
                <div className="mb-10 text-center md:mb-11">
                    <p className="text-sm font-bold text-neutral-950">{content.eyebrow}</p>
                    <div className="mt-2 inline-flex items-center gap-2">
                        <span className="flex items-center gap-0.5 text-amber-500" aria-hidden="true">
                            {Array.from({ length: 5 }, (_, index) => (
                                <StarIcon key={index} className="size-4" fill="currentColor" strokeWidth={0} />
                            ))}
                        </span>
                        <span className="text-ink-secondary text-sm">
                            <b className="text-neutral-950">{content.rating}</b> · {content.reviewCount} reviews
                        </span>
                    </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-6">
                    <Button
                        variant="icon"
                        className="shrink-0 cursor-pointer"
                        onClick={() => goTo(currentIndex - 1)}
                        aria-label="Previous review"
                    >
                        <ChevronLeftIcon className="size-5" aria-hidden="true" />
                    </Button>

                    <div aria-live="polite" className="grid flex-1 text-center">
                        {content.reviews.map((reviewItem, index) => (
                            <blockquote
                                key={reviewItem.author}
                                aria-hidden={index !== currentIndex}
                                className={cn(
                                    "col-start-1 row-start-1 m-0 transition-opacity duration-200 motion-reduce:transition-none",
                                    index === currentIndex ? "opacity-100" : "pointer-events-none opacity-0",
                                )}
                            >
                                <p className="text-lg leading-relaxed font-medium text-pretty text-neutral-950 md:text-xl">
                                    “{reviewItem.quote}”
                                </p>
                                <cite className="text-ink-secondary mt-4 block text-sm font-semibold not-italic">
                                    {reviewItem.author}
                                </cite>
                            </blockquote>
                        ))}
                    </div>

                    <Button
                        variant="icon"
                        className="shrink-0 cursor-pointer"
                        onClick={() => goTo(currentIndex + 1)}
                        aria-label="Next review"
                    >
                        <ChevronRightIcon className="size-5" aria-hidden="true" />
                    </Button>
                </div>

                <div className="mt-7 flex justify-center gap-2">
                    {content.reviews.map((reviewItem, index) => (
                        <button
                            key={reviewItem.author}
                            type="button"
                            onClick={() => goTo(index)}
                            aria-label={`Go to review ${index + 1}`}
                            aria-current={index === currentIndex}
                            className={cn(
                                "focus-visible:ring-brand-500 h-1.5 cursor-pointer rounded-full transition-all duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none motion-reduce:transition-none",
                                index === currentIndex ? "bg-brand-500 w-5.5" : "w-1.5 bg-neutral-300",
                            )}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
