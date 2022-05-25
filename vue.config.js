const { defineConfig } = require('@vue/cli-service')
const fs = require('fs')

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production'
    ? '/voucher-builder/'
    : '/',
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    https: {
      key: fs.readFileSync('.certs/key.pem'),
      cert: fs.readFileSync('.certs/cert.pem'),
    }
  }
})
