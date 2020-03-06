const   express = require('express');
const  bodyParser = require('body-parser');

app = express(),

port = process.env.PORT || 3000;
app.listen(port);

console.log('Jgive  RESTful API server started on: ' + port);


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const  routes = require('./routs/app-routs');
routes(app);
console.log();
