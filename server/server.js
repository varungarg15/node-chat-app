const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname , '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New User Connected');
    

    // socket.emit('newEmail', {
    //     from: 'varun@example.com',
    //     text: 'Hey. What is going on.',
    //     createdAt: 123
    // });
    
    //2
    socket.emit('newMessage', {
        from: 'Vipul',
        text: 'What are you doing',
        createdAt: 456
    });

    //  socket.on('createEmail', (newEmail) => {
    //      console.log('create-email', newEmail);
         
    //  });

     //1
     socket.on('createMessage', (message) => {
         console.log('create-message', message);
         
     });


    socket.on('disconnect', () => {
        console.log('User was disconnected');
        
    });
});

server.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});

