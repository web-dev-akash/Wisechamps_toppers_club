/** @type {import('next').NextConfig} */
const nextConfig = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};

module.exports = nextConfig;
