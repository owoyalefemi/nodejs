//caution here about making reference to another object and 
//making a copy of objects

var Lucky = {
	favFood: "amala",
	favMovie: "The Horror"
};

//I wish to make another copy of that Lucky object and change his favFood

var Person = Lucky;
Person.favFood = "rice";

console.log(Person.favFood);
console.log(Lucky.favFood);
//This is not the actual way to copy objects in NodeJs as you can see
//that rice was also given as Lucky's favFood now...

//Difference between == and === is that 
//== is used to compare values e.g 19 == '19' is true
//=== compares value and type 19 === '19' is false because '19' is int but '19' is string

//the keyword 'this' refers to that object/ thing calling it

var Lucky = {
	printFirst: function(){
		console.log("I am superb");
		console.log(this === Lucky); //compare whatever is calling this function
		//to the string Lucky

	}
};

Lucky.printFirst();

//The default calling context is global

function doSomething(){
	console.log("\n I am new in town");
	console.log(this === global);
}
doSomething();

//prototype explained
//prototype is used to add additional function to an original object
//so that any object at all created from that original can have access to the new functions
/*Assuming this was the original idea of a agame*/
function User(){
	this.name = "";
	this.life = 100;

	this.giveLife = function giveLife(targetPlayer){
		targetPlayer.life += 1;
		console.log(this.name + " just gave a life to " + targetPlayer.name);

	}
}
var Lucky = new User();
var Afia = new User();

Lucky.name = 'Lucky';
Afia.name = 'Afia';

Lucky.giveLife(Afia);

/*Now, assuming my boss called me to say: Can we add a new function so that whenever anyone calls
that function they can hurt their target player?
Since I didn't want to change the original User class, I can make a prototype instead */

User.prototype.uppercut = function uppercut(targetPlayer){
	this.life += 3;
	targetPlayer.life -= 3;

	console.log(this.name + " has just uppercut "+ targetPlayer.name);
	console.log(this.name + "'s new life is "+ this.life);
	console.log(targetPlayer.name + "'s new life is " + targetPlayer.life );
};

Lucky.uppercut(Afia);

