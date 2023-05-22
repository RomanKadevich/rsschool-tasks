

1) для создания файла package.json:
$ npm init -y

2)установка webpack:
npm instal --save-dev webpack webpack-cli

3)затем в настройки package.json добавляется 

"scripts": {
    "build": "webpack"
  },

4)команда для сборки проекта -- уже в конце
$ npm run build


5)команда для установки Type script локально для разработки (-g -глобально)
$ npm i -D typescript ts-loader

6)npx tsc --init - установка ts компилятора глобально;  tsc --init - локально;

7) установка html плагина npm i -D html-webpack-plugin

const HtmlWebpackPlugin = require('html-webpack-plugin'); в настройки webpack.config.js добавляется 

8)    Для билда картинок проекта в настройки webpack.config.js добавляется 

module: {
        rules: [
            {
                test: /\.(png|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            }
        ]
    }
 а также:

      output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        assetModuleFilename: 'assets/[hash][ext]'
    },

     чтобы картинки хэшировались:
     assetModuleFilename: 'assets/[name][ext]', а также в файл index.ts добавить - 
     const img = require('./assets/image.jpg');
     import {test} from './test';

      пример  -document.body.innerHTML = `<img src= "${img}" alt="test">`;

8)    Для билда шрифтов проекта в настройки webpack.config.js добавляется 
  {
                test: /\.(woff|woff2|eot|ttf|otf|svg)$/i,
                type: 'asset/inline',
                // свг буде вставляться прямо в html, а не как картинка благодаря "inline"
              },

9) добавить плагин:
npm i -D copy-webpack-plugin

в настройки webpack.config.js добавить:

const CopyPlugin = require('copy-webpack-plugin');

  plugins: [
        new CopyPlugin({
            patterns: [
                {from: './public'}
            ]
        })
    ],

10)добавить плагин:
npm i -D clean webpack plugin

в настройки webpack.config.js добавить:

const { CleanWebpackPlugin} = require('clean-webpack-plugin');

  plugins: [

        new CleanWebpackPlugin({
            cleanStaleWebpackAssets: false,
        }),
    ],
};


11) установка поддержки стилей:
  npm i -D scss-loader sass-loader sass mini-css-extract-plugin

в настройки webpack.config.js добавить:
  {
  test: /\.css$/i,
  use: ["style-loader", "css-loader"],
   },

также:

   const MiniCssExtractPlugin = require("mini-css-extract-plugin");
     plugins: [
     
        new MiniCssExtractPlugin({
            // filename: StyleSheet.css
            filwname: '[name].[contenthash].css'
        }),
    ],
};

также:
    module: {
        rules: [
              {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
              },
              {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
              },
        ]
    },

12) установка es lint
npm i -D eslint-webpack-plugin eslint

npm i -D eslint-plugin-import eslint-config-airbnb-typescript @typescript-eslint/parser npm i @typescript-eslint/eslint-plugin
