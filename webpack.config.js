const path = require('path')

module.exports = {
  devtool: 'source-map',
  entry: {
    bundle: './src/index.js'
  },
  output: {
    library: ['bundle'],
    libraryTarget: 'var',
    publicPath: '/',
    filename: '[name].js',
    path: path.join(__dirname, './dist')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /\.(css)$/,
        exclude: /(node_modules)/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  devServer: {
    host: '0.0.0.0',
    quiet: false,
    noInfo: false,
    contentBase: './',
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    },
    publicPath: '/',
    // headers: { "X-Custom-Header": "yes" },
    stats: {
      colors: true
    }
  }
}
