//a simpler way of exporting modules

module.exports = {
	printHouseName: function(){
		console.log("Owoyale house 3");
	},

	printHouseAddress: function(){
		console.log("Owoyale Sofowora Street");
	},

	printLandlord: "",

};


//This is also correct
//this refers to object factory.
//it is used in case we need to reference the object values uniquely


// module.exports = function(){


		
// 	return{printLandlord: ""}


	
// };

