function Pizza (toppings, size){
  this.toppings = toppings;
  this.size = size;
};

Pizza.prototype.price = function(toppings, size){
  smallPizzaPrice = 12
  mediumPizzaPrice = 15
  largePizzaPrice = 18
  for (i=1;i<=toppings.length;i++){
    var numberOfToppings = i;
    console.log(i);
  };
  if ((numberOfToppings === 2) && (size === "large")) {
    console.log("2 topping")
    return largePizzaPrice + 3;
  } else if ((numberOfToppings === 1) && (size === "medium")) {
    console.log("I'm here")
    return mediumPizzaPrice + 2;
  } else if ((numberOfToppings === 1) && (size === "small")) {
    console.log("I'm here");
    return smallPizzaPrice + 2;
  } else if ((numberOfToppings === 1) && (size === "large")) {
    console.log("I'm here")
    return largePizzaPrice + 2;
  };
};





$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var toppingChoice = [];
    $("input:checkbox[name=topping]:checked").each(function(){
      var toppings = $(this).val();
      toppingChoice.push(toppings);
      console.log(toppings);
    });
    console.log(toppingChoice);
    var pizzaSize = $("input:radio[name=size]:checked").val();
    console.log(pizzaSize);
    var pizzaResult = new Pizza(toppingChoice, pizzaSize);
    var priceResult = pizzaResult.price(toppingChoice, pizzaSize);
    console.log(priceResult);




  })
})
