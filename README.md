# quickchat
Quick IRC chat done in nodeJS during school's practical work.

# Information & current build
I did this during a school's practical work of 3h (I actually never used node js before), so it's not working as expected for now.
What it can do:
- Connect to an host (server.js)
- Do some fancy stuff in command line

I'll update this project during my free time. Goal is to finish this app correctly (You can connect to the host with specific IP adress, multiple users, and even chat room if I've time)

# Installation
You will need Node JS

## To start the app:
Fist you need to start the host program
type in your terminal : node /path/server.js
then client(s): node /path/client.js

In the client chat, you will need to connect to the host:
```bash
connect [IP], [port]
```

and it's done!

don't forget to disconnect
```bash
disconnect
```

Quitting the app is not same as disconnecting
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