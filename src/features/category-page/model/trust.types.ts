export type TrustStat = {
    value: string;
    label: string;
    emphasis?: "brand" | "neutral";
};

export type TrustContent = {
    stats: TrustStat[];
};
