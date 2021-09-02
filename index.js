const fs = require('fs');
const express = require('express');

var app = require('express')();
var http = require('http').Server(app);
var bodyParser = require('body-parser');
var Unblocker = require('unblocker');

var port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(Unblocker({
	prefix:	"/u/",
	requestMiddleware:	[]
}));

var unblocker = new Unblocker({prefix: '/proxy/'});

app.get('', function (req, res) {
  const index = __dirname + '/public/static/index.html';

  res.sendFile(index);
});

// Handle 404
app.use(function(req, res) {
  res.send("<script>location = 'https://borgcube.codesalvageon.repl.co';</script>", 404)
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});