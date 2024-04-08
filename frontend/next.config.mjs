/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  poweredByHeader: false,
  compress: true,
  swcMinify: true,
  async headers() {
    // we're serving only public details, so adding public to all responses
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'cache-control',
            value: 'public, s-maxage=600',
          },
        ],
      },
    ]
  },
}

export default nextConfig;
