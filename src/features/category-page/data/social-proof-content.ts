import type { SocialProofContent } from "@/features/category-page/model/social-proof.types";

const BRAND_LOGO_BASE = "https://fruitbasket.limepack.com/themes/limepack/assets/images/brands/";

export const cupsSocialProofContent: SocialProofContent = {
    eyebrow: "Why Limepack",
    heading: "A supplier thousands of brands already trust",
    logos: [
        { name: "Gordon Ramsay", src: `${BRAND_LOGO_BASE}gordonramsay_v2.svg`, alt: "Gordon Ramsay logo" },
        { name: "Nando's", src: `${BRAND_LOGO_BASE}nandos.svg`, alt: "Nando's logo" },
        { name: "Popl Burger", src: `${BRAND_LOGO_BASE}poplburger.svg`, alt: "Popl Burger logo" },
        { name: "Vapiano", src: `${BRAND_LOGO_BASE}vapiano.svg`, alt: "Vapiano logo" },
        { name: "Original Coffee", src: `${BRAND_LOGO_BASE}originalcoffee.svg`, alt: "Original Coffee logo" },
        { name: "First Hotels", src: `${BRAND_LOGO_BASE}firsthotels.svg`, alt: "First Hotels logo" },
    ],
    values: [
        { title: "Free design setup", description: "Plus a 3D design proof before we ever print." },
        { title: "Transparent prices", description: "Real online prices with free UK shipping." },
        { title: "Order fully online", description: "Configure, approve and check out — no back-and-forth." },
        { title: "Personal advice", description: "Real people, by phone or email, whenever you need." },
    ],
};
