const withPlugins = require("next-compose-plugins")
const withBundleAnalyzer = require("@next/bundle-analyzer")
const nextRuntimeDotenv = require("next-runtime-dotenv")
// const withPurgeCss = require("next-purgecss");

const withConfig = nextRuntimeDotenv({ public: ["API_URL", "API_KEY"] })
const path = require("path")
const nextConfig = {
  analyzeServer: ["server", "both"].includes(process.env.BUNDLE_ANALYZE),
  analyzeBrowser: ["browser", "both"].includes(process.env.BUNDLE_ANALYZE),
  bundleAnalyzerConfig: {
    server: {
      analyzerMode: "static",
      reportFilename: "../bundles/server.html",
    },
    browser: {
      analyzerMode: "static",
      reportFilename: "../bundles/client.html",
    },
  },
  publicRuntimeConfig: {
    PROXY_MODE: process.env.PROXY_MODE,
    API_URL: process.env.API_URL,
    API_KEY: process.env.API_KEY,
    STATIC_PATH: process.env.STATIC_PATH,
  },
  reactStrictMode: true,

  // exportPathMap: async function (
  //     defaultPathMap,
  //     { dev, dir, outDir, distDir, buildId }
  // ) {
  //     return {
  //         //   '/': { page: '/_app' },
  //         "/about": { page: "/_error" },
  //         //   '/home': { page: '/home' },
  //         //   '/p/hello-nextjs': { page: '/post', query: { title: 'hello-nextjs' } },
  //         //   '/p/learn-nextjs': { page: '/post', query: { title: 'learn-nextjs' } },
  //         //   '/p/deploy-nextjs': { page: '/post', query: { title: 'deploy-nextjs' } },
  //     };
  // },
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
}
//  withPurgeCss({
//   purgeCssEnabled: ({ dev, isServer }) => !dev && !isServer, // Only enable PurgeCSS for client-side production builds
// })
module.exports = withConfig(withPlugins([[withBundleAnalyzer]], nextConfig))
