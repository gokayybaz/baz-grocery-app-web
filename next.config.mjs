/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn2.a101.com.tr',
            },
        ]
    }
};

export default nextConfig;
