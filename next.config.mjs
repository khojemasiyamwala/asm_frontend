import webpack from "webpack";
const nextConfig = {
  reactStrictMode: false, // Disable React Strict Mode
  webpack(config, { isServer }) {
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
      })
    );

    return config;
  },
};
export default nextConfig;
