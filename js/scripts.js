function Pizza (toppings, size){
  this.toppings = toppings;
  this.size = size;
};

Pizza.prototype.price = function(){

};





$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var toppingChoice = $("input:radio[name=topping]:checked").val();
    console.log(toppingChoice)




  })
})
