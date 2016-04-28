var express = require('express');
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var passport = require('passport');
var session = require('express-session');
var router = express.Router();

var port = process.env.OPENSHIFT_NODEJS_PORT || '8000';

app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({secret: 'secret',  
   saveUninitialized: true,
   resave: true}));

app.use(express.static(__dirname + '/'));
app.all('*', function(req, res, next) {
  res.sendFile('one-page.html', { root: __dirname });
});

server.listen(port,function(err){
    console.log('running on server at port '+ port);
})