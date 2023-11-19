const withFonts = require('next-fonts')

const nextConfig = withFonts({
  images: {
    domains: [
      process.env.NEXT_PUBLIC_WORDPRESS_API_URL,
      process.env.NEXT_PUBLIC_WORDPRESS_IMAGES
    ]
  }
})
module.exports = nextConfig
