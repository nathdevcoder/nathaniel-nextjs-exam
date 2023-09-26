/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'alleyway-files.s3.amazonaws.com',
                port: '',
                pathname: '/media/products/**'
            }
        ]
    }
}

module.exports = nextConfig
