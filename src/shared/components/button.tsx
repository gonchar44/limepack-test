import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/shared/lib/cn";

type ButtonVariant = "primary" | "secondary";

const baseClasses =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2";

const variantClasses: Record<ButtonVariant, string> = {
    primary: "bg-brand-500 text-brand-950 hover:bg-brand-600",
    secondary: "border border-border bg-white text-neutral-950 hover:border-neutral-950",
};

type ButtonBaseProps = {
    variant?: ButtonVariant;
    className?: string;
    children: ReactNode;
};

type ButtonAsLinkProps = ButtonBaseProps &
    Omit<ComponentPropsWithoutRef<typeof Link>, "className" | "children"> & {
        href: string;
    };

type ButtonAsButtonProps = ButtonBaseProps &
    Omit<ComponentPropsWithoutRef<"button">, "className" | "children"> & {
        href?: undefined;
    };

type ButtonProps = ButtonAsLinkProps | ButtonAsButtonProps;

export function Button({ variant = "primary", className, children, ...props }: ButtonProps) {
    const classes = cn(baseClasses, variantClasses[variant], className);

    if (props.href !== undefined) {
        const { href, ...linkProps } = props;
        return (
            <Link href={href} className={classes} {...linkProps}>
                {children}
            </Link>
        );
    }

    const { type = "button", ...buttonProps } = props;
    return (
        <button type={type} className={cn(classes, "disabled:cursor-not-allowed disabled:opacity-50")} {...buttonProps}>
            {children}
        </button>
    );
}
