var express = require('express');
var app = require('express')();
var port = process.env.OPENSHIFT_NODEJS_PORT || '8000';

app.use(express.static(__dirname + '/'));
app.all('*', function(req, res, next) {
  res.sendFile('one-page.html', { root: __dirname });
});

app.listen(port,function(err){
    console.log('running on server at port '+ port);
})