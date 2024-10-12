/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        // Updated to use the new configuration format
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'basinasbase.com',
                port: '',
                pathname: '/**',
            }
        ]
    },
    distDir: 'out',
    webpack: (
        config,
        { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
      ) => {
        if (config.cache && !dev) {
          config.cache = Object.freeze({
            type: 'memory',
          })
        }
        // Important: return the modified config
        return config
    }
};

export default nextConfig;
