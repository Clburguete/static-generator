// Vendors
const
    globby = require("globby"),
    HtmlWebpackPlugin = require("html-webpack-plugin");

const generateTitle = filename => (
    filename.replace(/_/g, " ").replace('.html', '')
);

const getHtmlPaths = async () => {
    const 
        DEFAULT_SRC = 'src/html/',
        paths = await globby(['src/html/**']),
        HtmlWebpackConfig = paths.map(path => {
            const
                filename = path.replace(DEFAULT_SRC, ''),
                template = path,
                title = generateTitle(filename);

            console.log('filename', filename)

            return new HtmlWebpackPlugin({
                filename,
                template,
                title
            })
        });



    console.log(HtmlWebpackConfig);
};

module.exports = {
    getHtmlPaths
}