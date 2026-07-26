export type TrustStat = {
    value: string;
    label: string;
    variant?: "stat" | "note";
};

export type TrustContent = {
    stats: TrustStat[];
};
