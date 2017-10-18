# Quickchat
Quick IRC chat done in nodeJS during school's practical work.

## Information & current build
I did this during a school's practical work of 4h, so it's not working as expected for now.
What it can do for now:
- Connect to an host (server.js)
- chat with multiple users on the host

I'll update this project during my free time. Goal is to finish this app correctly (better UI, skip use of "s" command from Vorpal, etc)

## Installation
You will need Node JS before setting up!
then run:
- npm install vorpal
- npm install ip


### To start the app:
#### Server
Fist you need to start the host program
type in your terminal : 
```bash
node /path/server.js
```
if you want more option on server start up, just add on command line:
```bash
node /path/server.js Chat_room_name PORT
```
please note that room's name is just informative.

#### Client(s)
same command line: 
```bash
node /path/client.js username
```
By default you will be connected on localhost, if your chat server is hosted elsewere:
```bash
node /path/client.js username PORT HOST
```

and it's done!

don't forget to quit when you're done
```bash
quit
```
Or
```bash
exit
```

That's it!

For more information about Vorpal commands
```bash
help
```

## Libraries / Sources
This application use the following libraries:
- NodeJS
- net (included in Node)
- Vorpal
- ip