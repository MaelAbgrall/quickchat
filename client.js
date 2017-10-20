var net = require('net');
const vorpal = require('vorpal')();

var myPort = 8080;
var myHost = '127.0.0.1';

//we get port and host from argument line an cast port into a number
const username = process.argv[2];
if(process.argv.length>3){
  myPort = Number(process.argv[4]);
}
if(process.argv.length>4){
  myHost = process.argv[3];
}


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
const client = net.createConnection({host: myHost, port: myPort}, () => {
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