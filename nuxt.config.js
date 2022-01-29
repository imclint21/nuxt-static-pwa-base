export default {
	// Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
	ssr: false,

	// Target: https://go.nuxtjs.dev/config-target
	target: 'static',

	// Used for vercel deploy
	generate: {
		dir: 'public'
	},

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'nuxt-static-pwa-base',
		htmlAttrs: {
			lang: 'en'
		},
		meta: [
			{charset: 'utf-8'},
			{name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no'},
			{hid: 'description', name: 'description', content: ''},
			{hid: 'keywords', name: 'keywords', content: ''},
			{name: 'twitter:image:src', content: 'https://via.placeholder.com/1920x1080'},
			{name: 'twitter:card', content: 'summary_large_image'},
			{name: 'og:image', content: 'https://via.placeholder.com/1920x1080'},
			{name: 'theme-color', content: '#000000'},
			{name: 'msapplication-navbutton-color', content: '#000000'},
			{name: 'apple-mobile-web-app-status-bar-style', content: '#000000'},
			{name: 'apple-mobile-web-app-capable', content: 'yes'},
			{name: 'format-detection', content: 'telephone=no'}
		],
		link: [
			{rel: 'icon', type: 'image/svg', href: '/favicon.svg'},
		]
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
		'~/assets/scss/application.scss'
	],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [],

	tailwindcss: {
		viewer: false
	},

	pwa: {
		twitterCard: 'summary_large_image',
		twitterCreator: '@twitter_username',
		author: 'Empty Project',
		manifest: {
			name: 'Empty Project',
			lang: 'en',
			background_color: "#000000",
			theme_color: "#000000",
			useWebmanifestExtension: false
		}
	},

	googleAnalytics: {
		id: 'G-000000000'
	},

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/tailwindcss
		'@nuxtjs/tailwindcss',
		'@nuxtjs/pwa',
		'@nuxtjs/google-analytics',
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [],

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {}
}
