// NODE packages
var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var cors = require('cors');
var config = require('./config.json')
// CONTROLLERS
var profileCtrl = require('./controllers/profileCtrl.js');
var userCtrl = require('./controllers/userCtrl.js');

var app = express();

var port = config.port;
var corsOptions = {
  origin: 'http://localhost:'+port
};

// MIDDLEWARE
app.use(cors()); // npm
app.use(session({ // this creates req.session
  secret: config.secret, // make a random string
  resave: false,
  saveUninitialized: false // by default was true? in npmjs.org but deprecated
})); // npm
app.use(express.static(__dirname + '/public')); // make a public folder for public assets
// console.log(__dirname);
app.use(bodyParser.json()); // this must be invoked.

app.use(function(req, res, next){
  console.log(req.body + ' Body');
  console.log(req.params + ' URL Params');
  console.log(req.query + ' Query Params');
  console.log(req.session, ' Session');
  next();
})

// ENDPOINTS
app.post('/api/login', userCtrl.login);
app.get('/api/profiles', profileCtrl.getFriends);

// LISTENER
app.listen(port, function(req, res, next){
  console.log("listening on port:", port);
})
