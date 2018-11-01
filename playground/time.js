const moment = require('moment');

// Jan 1st 1970 00:00:00 am
// new Date().getTime();

// var date = new Date();
// var month = ['Jan', 'Feb']
// console.log(date.getMonth());

// var date = moment();
// date.add(100, 'years').subtract(9, 'months');
// console.log(date.format('MMM Do YYYY'));

//10:35 am
// 6:05 am

var someTimestamps = moment().valueOf();
console.log(someTimestamps);


var createdAt = 1234;
var date = moment(createdAt);
console.log(date.format('h:mm a'));
