var socket = io();

    socket.on('connect', function() {
        console.log('Connected to Server');
        
    //   socket.emit('createEmail', {
    //       to: 'vipul@examlple.com',
    //       text: 'Hey. This is varun'
    //   });
 
    //1
      socket.emit('createMessage', {
          from: 'Varun',
          text: 'Class ka time ho raha h'
      });
    });

    socket.on('disconnect', function() {
        console.log('Disconnected from server');
    });


    // socket.on('newEmail', function (email) {
    //     console.log('New Email', email);
        
    // });
     
    //2
    socket.on('newMessage', function (message) {
        console.log('nMessage', message);
        
    });