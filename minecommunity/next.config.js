/** @type {import('next').NextConfig} */
const nextConfig = {
  
  reactStrictMode: true,
  images: {
    domains: ['media.discordapp.net'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  // httpAgentOptions: {
  //   rejectUnauthorized: false,
  // }
}

// const ContentSecurityPolicy = `
//   content 'upgrade-insecure-requests'; 
// `

module.exports = nextConfig
