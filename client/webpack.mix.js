const mix = require('laravel-mix')
const path = require('path')

mix.setPublicPath('./public')
.js('js/app.js', 'public/js')
.extract()
.stylus('stylus/app.styl', 'public/css')
.webpackConfig({
	resolve: {
		alias: {
			'connection': path.resolve(__dirname, 'js/Connection.js'),
			'mixins': path.resolve(__dirname, 'js/mixins/'),
		},
	},
})

// if (mix.inProduction()) {
// 	mix.version()
// }
