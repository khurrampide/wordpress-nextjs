/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'], // Allow images from the localhost

    // Add your custom patterns for localhost
    localhostPatterns: [
      {
        protocol: 'http', // or 'https' if your local server uses HTTPS
        hostname: 'localhost',
        port: '', // Specify the port if your local server uses a non-standard port
        pathname: '/**', // Adjust to match your image paths
      },
    ],
  },
}

module.exports = nextConfig
