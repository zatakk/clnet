/** @type {import('next').NextConfig} */
const nextConfig = {
    // Add this line if it's not already there
    output: 'export',
    trailingSlash: true,
    // ... any other configurations you have
    // For example, if your theme uses images from external domains:
    // images: {
    //   unoptimized: true, // Important for static export if using next/image with external URLs
    //   remotePatterns: [
    //     {
    //       protocol: 'https',
    //       hostname: 'example.com', // Add hostnames your images are served from
    //     },
    //   ],
    // },
    // Add this images configuration
    images: {
        unoptimized: true,
    },
    
};

export default nextConfig;
