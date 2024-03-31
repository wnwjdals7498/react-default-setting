const  path = require('path');
const  HtmlWebpackPlugin = require('html-webpack-plugin'); 
const  srcDir = path.resolve(__dirname, './src');
const  publicDir = path.resolve(__dirname, './public');

module.exports = {
  name: "default-setting", 
  mode: 'development', // 배포 : production
  resolve: {
    extensions: [".js", ".jsx"],
  },
  entry: {
    app: srcDir + "/index",
  },
  devServer: {
    port: 8080
  },
  module: {
    rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			}
		]
  },
  plugins: [
		new  HtmlWebpackPlugin({
			template:  publicDir + '/index.html',
			filename:  './index.html'
		}),
	],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "app.js",
  },
};