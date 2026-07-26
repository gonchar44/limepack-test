import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "fruitbasket.limepack.com",
                pathname: "/img/**",
            },
            {
                protocol: "https",
                hostname: "fruitbasket.limepack.com",
                pathname: "/themes/limepack/assets/images/brands/**",
            },
        ],
    },
};

export default nextConfig;
