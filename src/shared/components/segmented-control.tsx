"use client";

import { cn } from "@/shared/lib/cn";

type SegmentedControlOption<TValue extends string> = {
    value: TValue;
    label: string;
};

type SegmentedControlProps<TValue extends string> = {
    name: string;
    legend: string;
    options: SegmentedControlOption<TValue>[];
    value: TValue;
    onChange: (value: TValue) => void;
    className?: string;
};

export function SegmentedControl<TValue extends string>({
    name,
    legend,
    options,
    value,
    onChange,
    className,
}: SegmentedControlProps<TValue>) {
    return (
        <fieldset
            className={cn("border-border inline-flex items-center gap-1.5 rounded-full border bg-white p-1", className)}
        >
            <legend className="sr-only">{legend}</legend>
            {options.map((option) => (
                <label
                    key={option.value}
                    className="text-ink-secondary has-[:checked]:bg-brand-500 has-[:checked]:text-brand-950 has-[:focus-visible]:ring-brand-500 cursor-pointer rounded-full px-4 py-2.5 text-center text-sm font-semibold whitespace-nowrap transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-offset-2"
                >
                    <input
                        type="radio"
                        name={name}
                        value={option.value}
                        checked={value === option.value}
                        onChange={() => onChange(option.value)}
                        className="sr-only"
                    />
                    {option.label}
                </label>
            ))}
        </fieldset>
    );
}
