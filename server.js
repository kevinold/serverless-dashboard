var path = require('path');
var webpack = require('webpack');
var express = require('express');
var config = require('./webpack.config');

var environment = process.env.NODE_ENV || 'development';
var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
  historyApiFallback: true
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.use('/css', express.static(__dirname + '/css'));

app.get('/getSProjectJson', function(req, res) {
  // send serverless test-prj if in development
  if (environment == 'development') {
    res.sendFile(path.join(__dirname, '/node_modules/serverless/tests/test-prj/s-project.json'));
  }
});

app.listen(3000, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:3000');
});
