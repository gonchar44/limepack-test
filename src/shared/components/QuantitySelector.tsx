"use client";

type QuantitySelectorProps = {
    name: string;
    legend: string;
    value: number;
    onChange: (value: number) => void;
    min: number;
    max: number;
    step: number;
    presets: number[];
    unitLabel?: string;
    formatValue?: (value: number) => string;
    className?: string;
};

const defaultFormatValue = (value: number) => value.toLocaleString();

export function QuantitySelector({
    name,
    legend,
    value,
    onChange,
    min,
    max,
    step,
    presets,
    unitLabel,
    formatValue = defaultFormatValue,
    className,
}: QuantitySelectorProps) {
    const wrapperClasses = ["flex flex-col gap-4", className].filter(Boolean).join(" ");

    return (
        <div className={wrapperClasses}>
            <fieldset className="flex flex-wrap gap-2">
                <legend className="sr-only">{legend}</legend>
                {presets.map((preset) => (
                    <label
                        key={preset}
                        className="text-ink-secondary has-[:checked]:border-brand-500 has-[:checked]:bg-brand-100 has-[:focus-visible]:ring-brand-500 border-border cursor-pointer rounded-full border bg-white px-4 py-2.5 text-center text-sm font-semibold transition-colors has-[:checked]:text-neutral-950 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-offset-2"
                    >
                        <input
                            type="radio"
                            name={name}
                            value={preset}
                            checked={value === preset}
                            onChange={() => onChange(preset)}
                            className="sr-only"
                        />
                        {formatValue(preset)}
                    </label>
                ))}
            </fieldset>

            <div className="flex items-center gap-4">
                <input
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    value={value}
                    onChange={(event) => onChange(Number(event.target.value))}
                    aria-label={legend}
                    className="accent-brand-500 focus-visible:ring-brand-500 h-1.5 flex-1 cursor-pointer focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                />
                <p className="text-ink-secondary min-w-[7rem] text-right text-sm" aria-live="polite">
                    <span className="text-lg font-bold text-neutral-950">
                        {formatValue(value)}
                        {value >= max ? "+" : ""}
                    </span>
                    {unitLabel ? ` ${unitLabel}` : ""}
                </p>
            </div>
        </div>
    );
}
