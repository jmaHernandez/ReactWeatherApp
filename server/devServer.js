var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('../webpack.config.dev');
var compiler = webpack(config);

var app = express();

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen('8080', function(err){
  if(err) {
    console.log(err);
    return;
  }
  console.log('Development server listening at http://localhost:8080');
});
