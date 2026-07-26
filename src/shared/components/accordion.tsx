"use client";

import { PlusIcon } from "lucide-react";
import { useId, useState, type ReactNode } from "react";

import { cn } from "@/shared/lib/cn";

export type AccordionItem = {
    id: string;
    trigger: ReactNode;
    content: ReactNode;
};

type AccordionProps = {
    items: AccordionItem[];
    defaultOpenIds?: string[];
    allowMultiple?: boolean;
    className?: string;
};

export function Accordion({ items, defaultOpenIds = [], allowMultiple = true, className }: AccordionProps) {
    const [openIds, setOpenIds] = useState<Set<string>>(() => new Set(defaultOpenIds));
    const baseId = useId();

    function toggle(id: string) {
        setOpenIds((current) => {
            const isOpen = current.has(id);
            if (!allowMultiple) {
                return isOpen ? new Set<string>() : new Set([id]);
            }
            const next = new Set(current);
            if (isOpen) {
                next.delete(id);
            } else {
                next.add(id);
            }
            return next;
        });
    }

    return (
        <div className={cn("border-border-subtle border-t", className)}>
            {items.map((item, index) => {
                const isOpen = openIds.has(item.id);
                const buttonId = `${baseId}-trigger-${index}`;
                const panelId = `${baseId}-panel-${index}`;

                return (
                    <div key={item.id} className="border-border-subtle border-b">
                        <h3 className="text-lg">
                            <button
                                type="button"
                                id={buttonId}
                                aria-expanded={isOpen}
                                aria-controls={panelId}
                                onClick={() => toggle(item.id)}
                                className="focus-visible:ring-brand-500 flex w-full cursor-pointer items-center justify-between gap-4 py-5 text-left font-semibold text-neutral-950 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                            >
                                <span>{item.trigger}</span>
                                <PlusIcon
                                    aria-hidden="true"
                                    className={cn(
                                        "border-border size-7 shrink-0 rounded-full border p-1.5 text-neutral-950 transition-transform duration-200 motion-reduce:transition-none",
                                        isOpen && "rotate-45",
                                    )}
                                />
                            </button>
                        </h3>
                        <div
                            id={panelId}
                            role="region"
                            aria-labelledby={buttonId}
                            className={cn(
                                "grid transition-[grid-template-rows] duration-200 ease-out motion-reduce:transition-none",
                                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                            )}
                        >
                            <div className="overflow-hidden">
                                <div className="text-ink-secondary max-w-2xl pb-5 text-base leading-relaxed">
                                    {item.content}
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
