import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";

export const metadata: Metadata = {
    title: {
        default: "Custom Printed Plastic Cups | Limepack",
        template: "%s | Limepack",
    },
    description:
        "Compare custom printed plastic cups for small and bulk orders. Find the right quantity, printing option and delivery fit.",
    openGraph: {
        title: "Custom Printed Plastic Cups | Limepack",
        description:
            "Compare custom printed plastic cups for small and bulk orders before choosing the right product page.",
        type: "website",
    },
    robots: {
        index: false,
        follow: false,
    },
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
