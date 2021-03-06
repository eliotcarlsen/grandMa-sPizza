function Pizza (toppings, size){
  this.toppings = toppings;
  this.size = size;
};

Pizza.prototype.tax = function(pizzaPrice){
  var finalPizzaPrice = pizzaPrice + (pizzaPrice * 0.065);
  return finalPizzaPrice;
};

Pizza.prototype.price = function(toppings, size){
  personalPizzaPrice = 6
  smallPizzaPrice = 12
  mediumPizzaPrice = 15
  largePizzaPrice = 18
  for (i=1;i<=toppings.length;i++){
    var numberOfToppings = i;
  };
    if ((size === "personal") && (numberOfToppings > 1)) {
      alert("Please only choose 1 topping for your personal size pizza.");
  } else if ((numberOfToppings === 1) && (size === "medium")) {
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
  } else if (size === "personal") {
      return personalPizzaPrice;
  } else if (size === "small") {
      return smallPizzaPrice;
  } else if (size === "medium") {
      return mediumPizzaPrice;
  } else if (size === "large") {
      return largePizzaPrice;
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
    var finalPizzaPrice = pizzaResult.tax(priceResult).toFixed(2);
    var pickUpOrDelivery = $("input:radio[name=pickUpOrDelivery]:checked").val();
    $(".pizzaPrice").show().text("Thank you for your order!  You are confirmed for a " + pizzaSize + " pizza with " + toppingChoice + ".  Your pizza will be $" + finalPizzaPrice + " upon " + pickUpOrDelivery + ".");
  });
});
