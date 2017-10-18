var net = require('net');
const vorpal = require('vorpal')();

//we get port and host from argument line an cast port into a number
const username = process.argv[2];
var PORT = Number(process.argv[3]);
var HOST = process.argv[4];

//vorpal commands
vorpal
  .command('send [words...]')
  .alias('s')
  .description('send a message. You can also use "s"')
  .action(function (args, callback) {
    let str = args.words.join(' ');
    client.write(username + ': ' + str);
    callback();
  });


//overriding quit & exit from Vorpal API
const quit = vorpal.find('quit');
if (quit) { 
  quit.remove();
}
const exit = vorpal.find('exit');
if (exit) { 
  exit.remove();
}
vorpal
  .command('quit')
  .action(function (args, callback) {
    client.end();
  });

vorpal
  .command('exit')
  .action(function (args, callback) {
    client.end();
  });










//client-server interractions
//creating connection on port, or default port
if ( typeof PORT !== 'undefined' && PORT ){}
else
{
  PORT = 8080;
}

if ( typeof HOSTT !== 'undefined' && HOST ){}
else
{
  HOST = '127.0.0.1';
}

const client = net.createConnection({HOST: HOST, port: PORT}, () => {
  console.log('connected to server!');
});

client.on('data', data => {
  console.log(data.toString());
  vorpal.show();
});


client.on('end', () => { 
   console.log('disconnected from server');
   process.exit();
});