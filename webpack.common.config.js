module.exports = {
  entry: [
    'whatwg-fetch',
    '@babel/polyfill',
    './src/index.tsx'
  ],
  output: {
    filename: 'js/[name].bundle.js',
    library: {
      name: 'admin-extension',
      type: 'window'
    }
  },
  externals: {
    react: 'React',
    antd: 'antd',
    'react-dom': 'ReactDOM'
  },
  resolve: {
    extensions: [
      '.tsx',
      '.ts',
      '.js',
      '.css',
      '.less'
    ]
  },
  module: {
    rules: [{
      test: /\.tsx?|\.jsx?$/,
      use: 'babel-loader',
      exclude: /node_modules\/(?!@terrestris)/
    }, {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    }, {
      test: /\.less$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'less-loader',
          options: {
            lessOptions: {
              javascriptEnabled: true
            }
          }
        }
      ]
    }, {
      test: /\.(eot|ttf|svg|woff|woff2)$/i,
      use: [{
        loader: 'file-loader',
        options: {
          name: 'static/font/[name].[contenthash:8].[ext]'
        }
      }]
    }, {
      test: /\.(jpe?g|png|gif|ico)$/i,
      use: [{
        loader: 'file-loader',
        options: {
          name: 'static/img/[name].[contenthash:8].[ext]'
        }
      }]
    }]
  }
};
