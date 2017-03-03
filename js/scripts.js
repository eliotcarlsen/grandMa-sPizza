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
  };
    if ((numberOfToppings === 1) && (size === "medium")) {
      return mediumPizzaPrice + 2;
  } else if ((numberOfToppings === 1) && (size === "small")) {
      return smallPizzaPrice + 2;
  } else if ((numberOfToppings === 1) && (size === "large")) {
      return largePizzaPrice + 2;
  } else if ((numberOfToppings === 2) && (size === "large")) {
      return largePizzaPrice + 3;
  } else if ((numberOfToppings === 2) && (size === "medium")) {
      return mediumPizzaPrice + 3;
  } else if ((numberOfToppings === 2) && (size === "small")) {
      return smallPizzaPrice + 3;
  } else if ((numberOfToppings === 3) && (size === "medium")) {
      return mediumPizzaPrice + 4;
  } else if ((numberOfToppings === 3) && (size === "small")) {
      return smallPizzaPrice + 4;
  } else if ((numberOfToppings === 3) && (size === "large")) {
      return largePizzaPrice + 4;
  } else if ((numberOfToppings === 4) && (size === "small")) {
      return smallPizzaPrice + 5;
  } else if ((numberOfToppings === 4) && (size === "medium")) {
      return mediumPizzaPrice + 5;
  } else if ((numberOfToppings === 4) && (size === "large")) {
      return largePizzaPrice + 5;
  } else if ((numberOfToppings === 5) && (size === "small")) {
      return smallPizzaPrice + 6;
  } else if ((numberOfToppings === 5) && (size === "medium")) {
      return mediumPizzaPrice + 6;
  } else if ((numberOfToppings === 5) && (size === "large")) {
      return largePizzaPrice + 6;
  } else if ((numberOfToppings === 6) && (size === "small")) {
      return smallPizzaPrice + 7;
  } else if ((numberOfToppings === 6) && (size === "medium")) {
      return mediumPizzaPrice + 7;
  } else if ((numberOfToppings === 6) && (size === "large")) {
      return largePizzaPrice + 7;
  } else if ((numberOfToppings === 7) && (size === "small")) {
      return smallPizzaPrice + 8;
  } else if ((numberOfToppings === 7) && (size === "medium")) {
      return mediumPizzaPrice + 8;
  } else if ((numberOfToppings === 7) && (size === "large")) {
      return largePizzaPrice + 8;
  } else if ((numberOfToppings === 8) && (size === "small")) {
      return smallPizzaPrice + 9;
  } else if ((numberOfToppings === 8) && (size === "medium")) {
      return mediumPizzaPrice + 9;
  } else if ((numberOfToppings === 8) && (size === "large")) {
      return largePizzaPrice + 9;
  } else if ((numberOfToppings === 9) && (size === "small")) {
      return smallPizzaPrice + 10;
  } else if ((numberOfToppings === 9) && (size === "medium")) {
      return mediumPizzaPrice + 10;
  } else if ((numberOfToppings === 9) && (size === "large")) {
      return largePizzaPrice + 10;
  } else if ((numberOfToppings === 10) && (size === "small")) {
      return smallPizzaPrice + 11;
  } else if ((numberOfToppings === 10) && (size === "medium")) {
      return mediumPizzaPrice + 11;
  } else if ((numberOfToppings === 10) && (size === "large")) {
      return largePizzaPrice + 11;
  };
};

$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var toppingChoice = [];
    $("input:checkbox[name=topping]:checked").each(function(){
      var toppings = $(this).val();
      toppingChoice.push(toppings);
    });
    var pizzaSize = $("input:radio[name=size]:checked").val();
    var pizzaResult = new Pizza(toppingChoice, pizzaSize);
    var priceResult = pizzaResult.price(toppingChoice, pizzaSize);
    $("#pizzaPrice").text("Your pizza is $" + priceResult + " upon delivery.");
  });
});
