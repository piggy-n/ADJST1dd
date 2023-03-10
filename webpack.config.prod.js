const merge = require("webpack-merge");
const common = require("./webpack.config.js");
const path = require("path");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(common, {
    mode: "production",
    devtool: "",
    entry: {
        index: "./src/index",
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "./dist"),
        libraryTarget: "commonjs2",
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
    plugins: [new CleanWebpackPlugin()],
    externals: {
        react: {
            root: "React",
            commonjs2: "react",
            commonjs: "react",
            amd: "react",
        },
        "react-dom": {
            root: "ReactDOM",
            commonjs2: "react-dom",
            commonjs: "react-dom",
            amd: "react-dom",
        },
    },
});
