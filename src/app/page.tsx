import { GoodToKnow } from "@/features/category-page/components/good-to-know";
import { GoogleReviews } from "@/features/category-page/components/google-reviews";
import { Hero } from "@/features/category-page/components/hero";
import { SocialProof } from "@/features/category-page/components/social-proof";
import { TrustStrip } from "@/features/category-page/components/trust-strip";
import { cupsGoodToKnowContent } from "@/features/category-page/data/good-to-know-content";
import { cupsHeroContent } from "@/features/category-page/data/hero-content";
import { cupsReviewsContent } from "@/features/category-page/data/reviews-content";
import { cupsSocialProofContent } from "@/features/category-page/data/social-proof-content";
import { cupsTrustContent } from "@/features/category-page/data/trust-content";
import { CupMatcher } from "@/features/product-selection/components/cup-matcher";

export default function PlasticCupsCategoryPage() {
    return (
        <main>
            <Hero content={cupsHeroContent} />
            <TrustStrip content={cupsTrustContent} />
            <CupMatcher />
            <SocialProof content={cupsSocialProofContent} />
            <GoodToKnow content={cupsGoodToKnowContent} />
            <GoogleReviews content={cupsReviewsContent} />
        </main>
    );
}
