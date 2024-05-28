/** @type {import('next').NextConfig} */
import { PHASE_DEVELOPMENT_SERVER } from 'next/constants.js';

const nextConfig = (phase) => {
    const isDev = phase === PHASE_DEVELOPMENT_SERVER;
    return {
        // output: !isDev ? 'export' : undefined,

        images: {
            remotePatterns: [
                {
                    protocol: 'https',
                    hostname: 's3-alpha-sig.figma.com',
                    // port: '',
                    pathname: '/img/**',
                },
                {
                    protocol: 'https',
                    hostname: 'live.staticflickr.com',
                    // port: '',
                    pathname: '/**',
                }
            ]
        }
    }
};

export default nextConfig;
