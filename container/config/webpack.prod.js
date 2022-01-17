const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const packJson = require('../package.json')
const domain = process.env.PRODUCTION_DOMAIN

const prodConfig = {
  mode: 'production',
  output : '[name].[contenthash].js',
  plugins: [
    new ModuleFederationPlugin({
      name : 'container',
      remotes : {
        marketing : 'marketing@' + domain + 'marketing/remoteEntry.js'
      },
      shared : packJson.dependencies
    })
  ],
};

module.exports = merge(commonConfig, prodConfig);
