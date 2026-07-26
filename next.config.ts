import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "fruitbasket.limepack.com",
                pathname: "/**",
            },
        ],
    },
};

export default nextConfig;
