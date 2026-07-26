import Link from "next/link";

export type CrossSellStripProps = {
    prompt: string;
    description: string;
    href: string;
    linkLabel: string;
};

export function CrossSellStrip({ prompt, description, href, linkLabel }: CrossSellStripProps) {
    return (
        <div className="bg-surface-muted border-border-subtle mt-7 flex flex-wrap items-center gap-3 rounded-2xl border px-5 py-4">
            <span className="text-ink-secondary text-sm">{prompt}</span>
            <span className="text-sm font-semibold text-neutral-950">{description}</span>
            <Link
                href={href}
                className="text-brand-700 hover:text-brand-800 focus-visible:ring-brand-500 ml-auto rounded-sm text-sm font-bold focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
            >
                {linkLabel}
            </Link>
        </div>
    );
}
