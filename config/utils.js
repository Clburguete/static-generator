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
    htmlInfo.map(htmlView => htmlView.path.replace('src/', ''))
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
            htmlPaths
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
    console.log('INFOOO ---->',getHtmlPaths(htmlViews))
    return htmlViews.map(htmlView => createHtmlPlugin(htmlView, htmlPaths));

    // const
    //     DEFAULT_SRC = 'src/html/',
    //     HtmlWebpackConfig = paths.map(path => {
    //         const
    //             filename = `html/${path.replace(DEFAULT_SRC, '')}`,
    //             template = path,
    //             title = getTitle(filename);

    //         return new HtmlWebpackPlugin({
    //             filename,
    //             template,
    //             title,
    //             customLinks: [
    //             ]
    //         });
    //     });

    // return HtmlWebpackConfig;
};

module.exports = {
    getHtmlConfig
}