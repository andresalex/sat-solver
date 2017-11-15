var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 8080;

app.get('/', function(req, res){
res.sendFile(__dirname + '/frontend/index.html');
});

http.listen(port, function(){
  console.log("Server started and listen to http://127.0.0.1:" + port);
});



// Trigger bei der Anmeldung 
io.on('connection', function(socket){
  console.log('a user connected');

  // Trigger von Funktion "auswerten"
  socket.on('auswerten', function(msg){
	// Ausgabe in Konsole
	console.log('auswerten: ' + msg);
	//Antwort
	io.emit('antwort_auswerten', msg + "-> ausgewertet");
  });
  
  // Trigger von Funktion "in_knf"
  socket.on('in knf', function(msg){
	// Ausgabe in Konsole
	console.log('in knf: ' + msg);
	//Antwort
	io.emit('anwort_in_knf', msg + "-> in Knf");
  });
  
  // Meldung bei Disonnect
  socket.on('disconnect', function(){
	console.log('a user disconnected');
  });
});


