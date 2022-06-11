module.exports = {
  async redirects() {
    return [
      {
        source: '*',
        destination: '/auth/logout',
        permanent: true,
      },
    ]
  },
  reactStrictMode: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      'res.cloudinary.com'
    ],
  },
};
