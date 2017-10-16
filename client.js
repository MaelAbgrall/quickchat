var net = require('net');
const vorpal = require('vorpal')();

//vorpal commands



vorpal
  .command('connect <SERVER PORT> [host]')
  .types({
    
  .action(function (args, callback) {
    
    callback();
  });


vorpal
  .command('say [words...]')
  .option('-b, --backwards')
  .option('-t, --twice')
  .action(function (args, callback) {
    let str = args.words.join(' ');
    str = (args.options.backwards) ?
      str.split('').reverse().join('') :
      str;
    this.log(str);
    callback();
  });

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

var client = net.connect({port: 8080}, function() {
   console.log('connected to server!');  
});



client.on('data', function(data) {
     console.log(data.toString());
   
vorpal.show();

});


client.on('end', function() { 
   console.log('disconnected from server');
   process.exit();
});