/*
 |--------------------------------------------------------------------------
 | Browser-sync config file
 |--------------------------------------------------------------------------
 |
 | For up-to-date information about the options:
 |   http://www.browsersync.io/docs/options/
 |
 | There are more options than you see here, these are just the ones that are
 | set internally. See the website for more info.
 |
 |
 */
module.exports = {
    files: ['public/**/*'],
    watchOptions: {
        ignoreInitial: true,
    },
    server: {
        baseDir: './public',
        directory: true,
    },
    port: 3100,
    logLevel: 'info',
    open: true,
    browser: 'default',
};
