'use strict';

let path = require('path');
let webpack = require('webpack');
let express = require('express');
let config = require('./webpack.config');
let Serverless = require('serverless');
let ServerlessUtils = require('serverless/lib/utils/index');

let environment = process.env.NODE_ENV || 'development';
let app = express();
let compiler = webpack(config);


let env  = process.env;
let home = env.HOME ||
  env.USERPROFILE ||
  (env.HOMEPATH ? ((env.HOMEDRIVE || 'C:/') + env.HOMEPATH) : null);

let dashboardConfig = require(path.join(home, '.serverless-dashboard.json'));
console.log(dashboardConfig['projects'][0]);

let serverless = new Serverless({
  interactive: false,
  projectPath: dashboardConfig['projects'][0]
});

let project = new serverless.classes.Project(serverless);
console.log(project.get());

console.log(project.getPopulated({ stage: 'development', region: 'us-east-1' }));

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
  historyApiFallback: true
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use('/css', express.static(__dirname + '/css'));

app.get('/getSProjectJson', function(req, res) {
  // send serverless test-prj if in development
  if (environment == 'development') {
    res.sendFile(path.join(__dirname, '/node_modules/serverless/tests/test-prj/s-project.json'));
  }
});

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:3000');
});
