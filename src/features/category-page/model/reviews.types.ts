export type Review = {
    quote: string;
    author: string;
};

export type ReviewsContent = {
    eyebrow: string;
    rating: number;
    reviewCount: number;
    reviews: Review[];
};
