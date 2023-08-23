
const TerserPlugin = require('terser-webpack-plugin');
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};
module.exports = {
  ...nextConfig,
  images: {
    domains: ['image.tmdb.org'],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization.minimize = true;
      config.optimization.minimizer = [
        new TerserPlugin({
          parallel: true,
          terserOptions: {
            compress: true,
            mangle: true,
          },
        }),
      ];
    }
    return config;
  },
};
