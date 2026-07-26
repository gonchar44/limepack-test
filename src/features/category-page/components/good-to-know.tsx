import type { GoodToKnowContent } from "@/features/category-page/model/good-to-know.types";
import { Accordion } from "@/shared/components/accordion";

type GoodToKnowProps = {
    content: GoodToKnowContent;
};

export function GoodToKnow({ content }: GoodToKnowProps) {
    const accordionItems = content.items.map((item) => ({
        id: item.question,
        trigger: item.question,
        content: item.answer,
    }));

    return (
        <section className="mx-auto max-w-3xl px-6 py-12 sm:px-10 md:py-16">
            <div className="mb-8">
                <div className="text-brand-700 mb-3 text-xs font-bold tracking-widest uppercase">{content.eyebrow}</div>
                <h2 className="text-2xl leading-tight font-bold tracking-tight text-neutral-950 md:text-4xl">
                    {content.heading}
                </h2>
            </div>
            <Accordion items={accordionItems} defaultOpenIds={[accordionItems[0].id]} />
        </section>
    );
}
