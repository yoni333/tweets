const   express = require('express');
const  bodyParser = require('body-parser');
const favicon = require('express-favicon');
const path = require('path');

app = express(),

port = process.env.PORT || 3000;

app.use(favicon(__dirname + '/public/static/favicon.ico'));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'public/static')));
console.log('Jgive  RESTful API server started on: ' + port);
const  allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  
  // intercept OPTIONS method
  if ('OPTIONS' == req.method) {
    res.send(200);
  }
  else {
    next();
  }
};
app.use(allowCrossDomain);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const  routes = require('./routs/app-routs');
routes(app);
console.log();

app.listen(port);