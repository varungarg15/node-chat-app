var socket = io();

    socket.on('connect', function() {
        console.log('Connected to Server');
    });
    //1
    //   socket.emit('createMessage', {
    //       from: 'Varun',
    //       text: 'Class ka time ho raha h'
    //   });
    // });

    socket.on('disconnect', function() {
        console.log('Disconnected from server');
    });
        
    //2
    socket.on('newMessage', function (message) {
        console.log('nMessage', message);
        
    });