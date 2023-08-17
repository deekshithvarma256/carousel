
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}
module.exports = {
  ...nextConfig,
  images: {
    domains: ['image.tmdb.org'],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization.minimizer = [
        new UglifyJsPlugin({
          parallel: true,
          sourceMap: false,
          uglifyOptions: {
            compress: true,
            mangle: true,
          },
        }),
      ];
    }
    return config;
  },
};
