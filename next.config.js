/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    swcMinify: true,
    images: {
        domains: [
            'tackle.parsa.today',
        ],
    },
}

module.exports = nextConfig
