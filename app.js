var express = require('express');
var parser = require('body-parser');
var ssh = require('ssh2');
var app = express();

// use body parser for all routes
app.use(parser.json());

app.get('/ssh', function(request, response) {
	console.log('****************** /ssh route called ********************');

	var conn = new ssh();
		conn.on('ready', function() {
	  console.log('Connection :: ready');

	  conn.exec('uptime', function(err, stream) {
	    if (err) throw err;
	    stream.on('exit', function(code, signal) {
	      console.log('Stream :: exit :: code: ' + code + ', signal: ' + signal);
	    }).on('close', function() {
	      console.log('Stream :: close');
	      conn.end();
	    }).on('data', function(data) {
	      console.log('STDOUT: ' + data);
	    }).stderr.on('data', function(data) {
	      console.log('STDERR: ' + data);
	    });
	  });
	}).connect({
	  host: '107.170.180.212',
	  port: 22,
	  username: 'root',
	  password: 'bvwjdvljuknj'
	});

});

app.get('/sftp', function(request, response) {
	console.log('****************** /sftp route called ********************');

	var conn = new ssh();
	conn.on('ready', function() {
  		console.log('Connection :: ready');
  		
  		conn.sftp(function(err, sftp) {
    		if (err) throw err;
    		sftp.readdir('foo', function(err, list) {
      			if (err) throw err;
      			console.dir(list);
      			conn.end();
    		});
  		});
	}).connect({
	  host: '107.170.180.212',
	  port: 22,
	  username: 'root',
	  password: 'bvwjdvljuknj'
	});

});


app.get('/', function(request, response) {
	console.log('****************** / route called ********************');
	response.send('To-Go Box is ready to pick up an order...');
});

var server = app.listen(3000, function() { 
	console.log('Listening on port %d', server.address().port);
});