// Vendors
const HtmlWebpackPlugin = require("html-webpack-plugin");


const generateTitle = filename => (
    filename.replace(/_/g, " ").replace('.html', '')
);

const getHtmlConfig = paths => {
    const 
        DEFAULT_SRC = 'src/html/',
        HtmlWebpackConfig = paths.map(path => {
            const
                filename = path.replace(DEFAULT_SRC, ''),
                template = path,
                title = generateTitle(filename);

            return new HtmlWebpackPlugin({
                filename,
                template,
                title
            });
        });

    return HtmlWebpackConfig;
};

module.exports = {
    getHtmlConfig
}