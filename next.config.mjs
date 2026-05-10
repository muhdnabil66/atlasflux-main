import withPWA from "next-pwa";

const nextConfig = withPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
})({
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/docs-content",
        destination: "https://ai.atlasflux.my/api/docs-content",
      },
      {
        source: "/api/models",
        destination: "https://ai.atlasflux.my/api/models",
      },
    ];
  },
});

export default nextConfig;
