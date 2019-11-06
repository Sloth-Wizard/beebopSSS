## **Beebop super simple slider**

As the name states it, very simple, two options available right now.

### **How to use**

Install it with npm
```cmd
npm install beebopsss@latest
```

Or copy it from this github repository
```cmd
git clone https://github.com/Sloth-Wizard/beebopSSS.git
```

Initialize the slider
```js
import { Beebop } from "beebopssLocation/main.js";

new Beebop('yourWrapperID', {
    // Here comes all the options we want to set, there are default values for each of them
    controls: true, // This is to show or not the controls, set to true because there is no automatic slide yet
    type: 'img', // This is for the tagName of the element that will be in the slider
    controlsColor: '#bada55' // Gives a color to the arrows (hexadecimal preferred)
});
```

Basic webpack configuration is you want to compile this module
Modify yours if needed but don't overwrite it, this is just an example
webpack config and package goes together ofc

webpack.config.js
```js
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("mini-css-extract-plugin");
 
 module.exports = {
     entry: ['./js/index.js', './css/index.scss'],
     output: {
         filename: 'js/index.js',
         path: path.resolve(__dirname, '../assets')
     },
     plugins: [
         new ExtractTextPlugin({
             filename: 'css/[name].css',
             chunkFilename: 'css/[id].css',
         }),
         new webpack.ProvidePlugin({
             $: 'jquery',
             jQuery: 'jquery'
         })
     ],
     module: {
         rules: [
             // SCSS loader
             {
                 test:/\.(s*)css$/,
                 use: [
                     {
                         loader: ExtractTextPlugin.loader,
                         options: {
                             publicPath: (resourcePath, context) => {
                                 return path.relative(path.dirname(resourcePath), context) + '/';
                             }
                         }
                     },
                     'css-loader',
                     'sass-loader'
                 ],
             },
             // JS loader
             {
                 test: /\.js$/,
                 loader: 'babel-loader',
                 query: {
                     presets: ['@babel/preset-env'],
                     plugins: ['@babel/plugin-proposal-class-properties']
                 }
             },
             // Image loader
             {
                 test: /\.(png|jp(e*)g|svg)$/,
                 use: [
                     {
                         loader: 'url-loader',
                         options: {
                             limit: 8000,
                             name: 'img/[hash].[ext]'
                         }
                     }
                 ]
             },
             // Fonts loader
             {
                 test: /\.(woff|woff2|eot|ttf|otf)$/,
                 use: [
                     {
                         loader: 'file-loader',
                         options: {
                             name: 'fonts/[hash].[ext]'
                         }
                     }
                 ]
             }
         ]
     }
 };
 ```
 
package.json
```json
{
   "main": "main.js",
   "scripts": {
     "watch": "webpack -w --mode='development'",
     "build": "webpack --mode='production'"
   },
   "devDependencies": {
     "@babel/core": "^7.6.4",
     "@babel/preset-env": "^7.6.3",
     "@babel/plugin-proposal-class-properties": "^7.5.5",
     "babel-core": "^6.26.3",
     "babel-loader": "^8.0.6",
     "babel-preset-es2015": "^6.24.1",
     "css-loader": "^3.2.0",
     "file-loader": "^4.2.0",
     "jquery": "^3.4.1",
     "mini-css-extract-plugin": "^0.8.0",
     "node-sass": "^4.12.0",
     "path": "^0.12.7",
     "sass-loader": "^8.0.0",
     "style-loader": "^1.0.0",
     "url-loader": "^2.2.0",
     "webpack": "^4.41.2",
     "webpack-cli": "^3.3.9"
   },
   "dependencies": {
     "beebopsss": "^1.2.2"
   }
}
```
