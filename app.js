var app = require('express')();
var fs = require( 'fs' );
var https = require('https');
var server = https.createServer({
    key: fs.readFileSync('privkey.pem'),
    cert: fs.readFileSync('fullchain.pem') 
},app);

var io = require('socket.io')(server);

server.listen(3000);

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});