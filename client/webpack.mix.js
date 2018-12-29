const mix = require('laravel-mix')
const path = require('path')

mix.js('js/app.js', 'public/js')
.extract()
.stylus('stylus/app.styl', 'public/css')
.webpackConfig({
	resolve: {
		alias: {
			'connection': path.resolve(__dirname, 'js/Connection.js'),
		},
	},
})

if (mix.inProduction()) {
	mix.version()
}
