function placeOrder(OrderNumber){

//print out the order number
 console.log("Customer order:", OrderNumber);
 
 //after the order, the chef cooks and deliver the order
 //but the time it takes to cook and deliver is not instant as the order came
 //so delivery can only take place after say, 5s

 cookAndDeliveredFood(function(){
   console.log("Delivered food ordered:", OrderNumber);

 });

}
//whatever we put as the callback should be delivered after 5 seconds
function cookAndDeliveredFood(callback){
	setTimeout(callback, 5000);
}

//Now let's place orders
placeOrder(1);
placeOrder(2);
placeOrder(3);
placeOrder(4);
placeOrder(5);

