function Pizza (toppings, size){
  this.toppings = toppings;
  this.size = size;
};

Pizza.prototype.price = function(toppingChoice, pizzaSize){
  if ((toppingChoice === "pepperoni") && (pizzaSize === "large")) {
    return "25 dollars";
  };
};





$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var toppingChoice = $("input:radio[name=topping]:checked").val();
    var pizzaSize = $("input:radio[name=size]:checked").val();
    console.log(toppingChoice);
    console.log(pizzaSize);
    var pizzaResult = new Pizza(toppingChoice, pizzaSize);
    var priceResult = pizzaResult.price(toppingChoice, pizzaSize);
    console.log(priceResult);




  })
})
