import type { ReviewsContent } from "@/features/category-page/model/reviews.types";

// PLACEHOLDER: sourced from design mock, not verified Google review data —
// replace with a real Google Reviews export/API before production.
export const cupsReviewsContent: ReviewsContent = {
    eyebrow: "Google Customer Reviews",
    rating: 4.8,
    reviewCount: 145,
    reviews: [
        {
            quote: "Fantastic customer service and great quality. Our fully branded, recyclable cups arrived early — and cheaper than a lot of alternatives. Super impressed.",
            author: "Daniella · Old Amersham Gin",
        },
        {
            quote: "The 3D proof made approval effortless. What we designed on screen is exactly what turned up on the cups.",
            author: "Marcus · Tap + Brew",
        },
        {
            quote: "Ordered 25,000 for a festival. Best price we found, delivered on time, and the print looked razor-sharp.",
            author: "Priya · Five Senses",
        },
    ],
};
