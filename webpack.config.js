// @ts-nocheck
/* eslint-disable no-undef */
const path = require("path");
const ESLintPlugin = require("eslint-webpack-plugin");
// var BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const Dotenv = require("dotenv-webpack");

module.exports = {
	target: "node",
	entry: path.resolve(__dirname, "./src/index.js"),
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader",
				options: {
					presets: [
						"@babel/preset-env"
					],
					"plugins": [
						"@babel/plugin-proposal-class-properties"
					],
				}
			},
		]
	},
	resolve: {
		extensions: ["*", ".js"]
	},
	// output: {
	// 	filename: "hello-world.js",
	// 	path: path.resolve(__dirname, "dist"),
	// 	libraryTarget: "var",
	// 	library: "HelloWorld"
	// },
	output: {
		path: path.resolve(__dirname, "./dist"),
		filename: "paymob.js",
		libraryTarget: "commonjs",
		globalObject: "Paymob",
		// library: "Paymob"
	},
	devServer: {
		contentBase: path.resolve(__dirname, "./dist"),
	},
	plugins: [
		new ESLintPlugin(),
		// new BundleAnalyzerPlugin({
		// 	analyzerPort: "auto",
		// }),
		new Dotenv({
			path: "./.env",
			safe: true,
			systemvars: true,
			defaults: true
		})
	],
};