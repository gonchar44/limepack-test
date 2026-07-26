export type BrandLogo = {
    name: string;
    src: string;
    alt: string;
};

export type ValueProp = {
    title: string;
    description: string;
};

export type SocialProofContent = {
    eyebrow: string;
    heading: string;
    logos: BrandLogo[];
    values: ValueProp[];
};
