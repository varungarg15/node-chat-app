const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const {generateMessage} = require('./utils/message');
const publicPath = path.join(__dirname , '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New User Connected');
   
    //2
    // socket.emit('newMessage', {
    //     from: 'Vipul',
    //     text: 'What are you doing',
    //     createdAt: 456
    // });

     socket.emit('newMessage', generateMessage('admin', 'Welcome to the chat app'));

     socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user joined'));
     //1
     socket.on('createMessage', (message, callback) => {
         console.log('create-message', message);

         io.emit('newMessage', generateMessage(message.from, message.text));
         callback('This is from Server');
        // socket.broadcast.emit('newMessage', {
        //       from: message.from,
        //       text: message.text,
        //       createdAe: new Date().getTime()
        // });
     });


    socket.on('disconnect', () => {
        console.log('User was disconnected');
        
    });
});

server.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});

