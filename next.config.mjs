/** @type {import('next').NextConfig} */


// security headers
const securityHeaders = [
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin'
  },
  // Add Content Security Policy (CSP) as needed
]

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
    },
    async headers() {
      return [
        {
          source: '/:path*',
          headers: securityHeaders,
        },
      ]
    }
};

export default nextConfig;
