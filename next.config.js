/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	swcMinify: true,
	compiler: {
		styledComponents: true,
	},
	pageExtensions: ['tsx', 'jsx', 'ts', 'js'],
};

module.exports = nextConfig;
