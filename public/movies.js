var house = require('./house');

function printAvatar(){
	console.log("This is Avatar Movie");
}

function printchappie(){
	console.log("Chappie: R");
}

//I am saying that this is the only part of this file that must be exported
module.exports.avatar = printAvatar;

house.printLandlord = "Lukman Man";
console.log(house.printLandlord);