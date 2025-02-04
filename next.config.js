const withFonts = require('next-fonts')

const nextConfig = withFonts({
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
  images: {
    domains: [
      process.env.NEXT_PUBLIC_WORDPRESS_API_URL,
      process.env.NEXT_PUBLIC_WORDPRESS_IMAGES
    ]
  }
})
module.exports = nextConfig
