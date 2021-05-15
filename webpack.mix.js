const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.webpackConfig({
    "resolve": {
        "alias": {
            "react": "preact/compat",
            "react-dom": "preact/compat"
        }
    }
});


mix.babelConfig({
    "plugins": [
        "@babel/plugin-proposal-class-properties"
    ],
});

mix.js('resources/js/app.js', 'public/js').react();

mix.sass('resources/css/app.scss', 'public/css');
