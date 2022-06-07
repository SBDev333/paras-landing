// This file sets a custom webpack configuration to use your Next.js app
// https://nextjs.org/docs/api-reference/next.config.js/introduction

const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
})

const moduleExports = {
	experimental: {
		scrollRestoration: true,
	},
	env: {
		APP_ENV: process.env.APP_ENV,
		BASE_URL: process.env.BASE_URL,
		API_URL: process.env.API_URL,
		V1_API_URL: process.env.V1_API_URL,
		V2_API_URL: process.env.V2_API_URL,
		MARKETPLACE_CONTRACT_ID: process.env.MARKETPLACE_CONTRACT_ID,
		NFT_CONTRACT_ID: process.env.NFT_CONTRACT_ID,
		WHITELIST_CONTRACT_ID: process.env.WHITELIST_CONTRACT_ID,
		COMIC_API_URL: process.env.COMIC_API_URL,
		DISABLE_OFFER_CONTRACT_ID: process.env.DISABLE_OFFER_CONTRACT_ID,
		REPORT_URL: process.env.REPORT_URL,
		PARAS_TOKEN_CONTRACT: process.env.PARAS_TOKEN_CONTRACT,
		GOOGLE_TAG_MANAGER_ID: process.env.GOOGLE_TAG_MANAGER_ID,
		RECAPTCHA_SITE_KEY: process.env.RECAPTCHA_SITE_KEY,
		FARM_CONTRACT_ID: process.env.FARM_CONTRACT_ID,
	},
	async redirects() {
		return [
			{
				source: '/:id/collection',
				destination: '/:id/collectibles',
				permanent: true,
			},
		]
	},
	i18n: {
		/**
		 * Provide the locales you want to support in your application
		 */
		locales: ['en', 'zh', 'es', 'ru', 'fr'], //, "fr", "ko", "ru", "vi"],
		/**
		 * This is the default locale you want to be used when visiting
		 * a non-locale prefixed path.
		 */
		defaultLocale: 'en',
	},
}

// ensure that your source maps include changes from all other Webpack plugins
module.exports = withBundleAnalyzer(moduleExports)
