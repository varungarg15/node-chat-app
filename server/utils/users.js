[{
    id: '/#2podref3sabfgs',
    name: 'Varun',
    room: 'The Office Fans'
}]

// addUser(id, name, room)
// removeUser(id)
// getUser(id)
// getuserList(room)
const validator = require('validator');
const _ = require('lodash');
var capitalize = require('lodash.capitalize');

class Users {
  constructor () {
      this.users = [];
  }

  addUser(id, name, room) {
      var user = {id, 
        name :
        {
          unique: true,
          name: _.capitalize(name)
        }, 
        room :{
            unique: true,
          room: _.capitalize(room)
        }};
      this.users.push(user);
      return user;
  }
  removeUser (id) {
    var user = this.getUser(id);

    if(user) {
        this.users = this.users.filter((user) => user.id !== id);
    }
    return user;
  }
  getUser (id) {
  return this.users.filter((user) => user.id === id)[0];
  }
  getUserList (room) {
    var users = this.users.filter((user) => {
        return user.room === room;
    });  
    var namesArray = users.map((user) => {
      return user.name
    });
    return namesArray;
  }
}

module.exports = {Users};



// class Person {
//     constructor (name, age) {
//         this.name = name;
//         this.age = age;        
//     }
//     getUserDescription() {
//         return `${this.name} is ${this.age} year(s) old.`;
//     }
// }

// var me = new Person('Varun', 20);
// var description = me.getUserDescription();
// console.log(description);


