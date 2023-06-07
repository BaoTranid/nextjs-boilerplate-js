const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  distDir: 'build',
};

module.exports = {
  ...nextConfig,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};
