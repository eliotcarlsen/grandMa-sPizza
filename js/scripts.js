function Pizza (toppings, size){
  this.toppings = toppings;
  this.size = size;
};

Pizza.prototype.price = function(toppings, size){
  smallPizzaPrice = 12
  mediumPizzaPrice = 15
  largePizzaPrice = 18
  if ((toppings === "pepperoni") && (size === "large")) {
    return largePizzaPrice + 3;
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
