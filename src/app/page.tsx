import { Button } from "@/shared/components/button";

export default function Home() {
    return (
        <main className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 py-16">
            <p className="text-brand-600 mb-3 text-sm font-medium tracking-wide uppercase">Limepack prototype</p>
            <h1 className="max-w-3xl text-4xl leading-tight font-semibold text-neutral-950 md:text-6xl">
                Custom printed plastic cups
            </h1>
            <p className="text-ink-secondary mt-6 max-w-2xl text-lg leading-8">
                This scaffold is ready for the category page implementation. Product selection components, product data,
                and recommendation logic will be added in the next step.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
                <Button href="#matcher" variant="primary">
                    Find your cup →
                </Button>
                <Button href="#products" variant="secondary">
                    Compare the 3 options
                </Button>
            </div>
        </main>
    );
}
