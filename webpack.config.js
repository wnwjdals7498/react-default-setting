const path = require('path');

const srcDir = path.resolve(__dirname, './src');
const publicDir = path.resolve(__dirname, './public');

const HtmlWebpackPlugin = require('html-webpack-plugin'); 

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
			},
      {
        test: /\.css$/i,
        exclude: /\.module\.css$/i, // 모듈 파일 제외 설정
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.module\.css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
      },  
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