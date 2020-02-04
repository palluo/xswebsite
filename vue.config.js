const TerserPlugin = require("terser-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");

const path = require("path");

const productionGzipExtensions = ["js", "css"];

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  //   publicPath: process.env.NODE_ENV === "development" ? "/" : "./",
  publicPath: "./",
  devServer: {
    host: "0.0.0.0",
    port: 8080,
    open: true
  },
  css: {
    loaderOptions: {
      // 给 sass-loader 传递选项
      sass: {
        prependData: `@import "@/styles/index.scss";`
      }
    }
  },
  chainWebpack: config => {
    // 别名
    config.resolve.alias.set("@", resolve("src"));
    config.module
      .rule("mouse")
      .test(/\.(ico|cur)(\?.*)?$/)
      .use("file-loader")
      .loader("file-loader")
      .options({
        name: "[path][name].[ext]"
      })
      .end();

    config.plugin("html").tap(args => {
      if (process.env.NODE_ENV === "development") {
        args[0].favicon = path.resolve("public/favicon_dev.ico");
      }
      return args;
    });

    // use svg
    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
    svgRule.include
      .add(resolve("src/icon/svg"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]"
      })
      .end();
    // image exclude svg
    const imagesRule = config.module.rule("images");
    imagesRule
      .test(/\.(png|jpe?g|gif|webp|svg)(\?.*)?$/)
      .exclude.add(resolve("src/icon/svg"))
      .end();
  },
  // 生产环境打包去除console.log
  configureWebpack: {
    devtool: "source-map",
    // devtool:
    //   process.env.NODE_ENV === "development"
    //     ? "cheap-module-eval-source-map"
    //     : "source-map",
    optimization:
      process.env.NODE_ENV === "development"
        ? {}
        : {
            minimize: true,
            minimizer: [
              // 新版已经用 terser-webpack-plugin 替代
              new TerserPlugin()
            ]
          },
    // gzip
    plugins:
      process.env.NODE_ENV === "production"
        ? [
            new CompressionPlugin({
              filename: "[path].gz[query]",
              algorithm: "gzip",
              test: new RegExp(
                "\\.(" + productionGzipExtensions.join("|") + ")$"
              ),
              threshold: 10240,
              minRatio: 0.8
            })
          ]
        : []
  }
};
