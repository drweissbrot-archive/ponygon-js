const mix = require('laravel-mix')
const path = require('path')

mix.setPublicPath('./public')
.ts('js/app.ts', 'public/js')
.extract()
.stylus('stylus/app.styl', 'public/css')
.webpackConfig({
	resolve: {
		alias: {
			'~Components': path.resolve(__dirname, 'js/Components'),
			'~Connection': path.resolve(__dirname, 'js/Connection.ts'),
			'~Mixins': path.resolve(__dirname, 'js/Mixins'),
		},
	},
})

// if (mix.inProduction()) {
// 	mix.version()
// }
