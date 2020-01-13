// Vendors
const HtmlWebpackPlugin = require("html-webpack-plugin");


const generateTitle = filename => (
    filename
        .replace(/_/g, " ")
        .replace('.html', '')
        .charAt(0).toUpperCase()
        + filename.slice(1)
);

const getHtmlConfig = paths => {
    const 
        DEFAULT_SRC = 'src/html/',
        HtmlWebpackConfig = paths.map(path => {
            const
                filename = `html/${path.replace(DEFAULT_SRC, '')}`,
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