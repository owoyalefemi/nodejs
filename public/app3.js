//modules
//breaking bunch of codes into different pieces = modules

//to add a module to my code, use this
//no need to include the .js extension
var movies = require('./movies');
var house = require('./house');

movies.avatar();
house.printHouseName();
// house.printLandLord;

console.log(house.printLandlord);
//both of app3 and movies access house.js file and whatever changes made is mutual..