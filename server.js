var net = require('net');
var ip = require("ip");

const PORT = Number(process.argv[3]);
const chatroomname = process.argv[2];
clients = [];

//when connection is created
const server = net.createServer(c => { 
   console.log('client connected');
   clients.push(c);
   c.on('end', () => {
      console.log('client disconnected');
   });

   c.write('Welcome to chat room '+ chatroomname +'!\r\n');
   //connection.pipe(connection);

   c.on('data', data => {
    broadcast(data, c);

    });

  const broadcast = (message, sender) => {
    clients.forEach(c => {
        if (c != sender) {
          c.write(message);
        }
    });
  }
});



//error handling
server.on('error', err => {
  console.log(err);
});


//for development only
process.on('uncaughtException', function (err) {
  console.error(err.stack);
  console.log("Node NOT Exiting...");
});


if ( typeof PORT !== 'undefined' && PORT )
{
  server.listen(PORT, () => { 
    console.log('server is listening on port ' +PORT);
    console.log('server adress is ' +ip.address());
  });
}
else
{
  server.listen(8080, () => { 
    console.log('server is listening on port 8080');
    console.log('server adress is ' +ip.address());
  });
}