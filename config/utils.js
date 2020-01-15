// Vendors
const HtmlWebpackPlugin = require("html-webpack-plugin");

const getTitle = filename => (
    filename
        .replace(/_/g, ' ')
        .charAt(5).toUpperCase()
        + filename
        .slice(6)
        .replace('.html', '')
);

const getHtmlInfo = paths => (
    paths.map(path => {
        const
            DEFAULT_SRC = 'src/html/',
            filename = `html/${path.replace(DEFAULT_SRC, '')}`,
            template = path,
            title = getTitle(filename);
        return {
            filename,
            template,
            title,
            path
        }
    })
);

const getHtmlPaths = htmlInfo => (
    htmlInfo.map(htmlView => ({
        path: htmlView.path.replace('src', ''),
        title: htmlView.title
        })
    )
)

const createHtmlPlugin = (htmlView, htmlPaths) => {
    const
        { title, template, filename } = htmlView,
        isIndex = htmlView.title === 'Index';
    return isIndex ?
        new HtmlWebpackPlugin({
            title,
            template,
            filename,
            htmlPaths,
            excludeChunks: ['app']
        })
        :
        new HtmlWebpackPlugin({
            title,
            template,
            filename,
        })
}

const getHtmlConfig = paths => {
    const 
        htmlViews = getHtmlInfo(paths),
        htmlPaths = getHtmlPaths(htmlViews);

    return htmlViews
        .map(htmlView => createHtmlPlugin(htmlView, htmlPaths));
};

module.exports = {
    getHtmlConfig
}