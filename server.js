var net = require('net');

var server = net.createServer(function(connection) { 
   console.log('client connected');
   
   connection.on('end', function() {
      console.log('client disconnected');
   });

   connection.write('Hello World!\r\n');
   connection.pipe(connection);

});

server.on('error', err => {
  console.log(err);
});


//for development only
process.on('uncaughtException', function (err) {
  console.error(err.stack);
  console.log("Node NOT Exiting...");
});


server.listen(8080, function() { 
   console.log('server is listening');
});