export type HeroAction = {
    label: string;
    href: string;
};

export type HeroContent = {
    eyebrow: string;
    heading: string;
    description: string;
    primaryAction: HeroAction;
    secondaryAction?: HeroAction;
    image: {
        src: string;
        alt: string;
    };
    video?: {
        label: string;
    };
};
