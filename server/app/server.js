const   express = require('express');
const  bodyParser = require('body-parser');

app = express(),

port = process.env.PORT || 3000;
app.listen(port);

console.log('Jgive  RESTful API server started on: ' + port);
var allowCrossDomain = function(req, res, next) {
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
