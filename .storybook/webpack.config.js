module.exports = ({ config }) => {
    config.module.rules.push({
        test: /\.mdx?$/,
        use: [
            {
                loader: '@mdx-js/loader',
                options: {}
            }
        ]
    });

    return config;
};