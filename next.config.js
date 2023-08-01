/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  // module: {
  //   rules: [
  //     {
  //       test: /\.mp3$/,
  //       use: ['file-loader'],
  //     },
  //   ],
  // },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(mp3|m4a)$/,
      use: ['file-loader'],
    });
    return config;
  },
};

module.exports = nextConfig;
