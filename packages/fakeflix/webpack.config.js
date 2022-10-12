const baseConfig = require('../../webpack.config');

module.exports = baseConfig({
    final: config => {
        // ...

        return config;
    },
    root: __dirname,
    title: 'BETA 1.0',
});
