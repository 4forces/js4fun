// Learning Functional Programming with Javascript
// Chapter 03, Video 05, Exercise 01


// ====== working code ======
var _=require("lodash")

var shoppingList = [
  { name: "Eggs",    price: 4.99 },
  { name: "Milk",    price: 3.99 },
  { name: "Bananas", price: 2.79 },
  { name: "Beer",    price: 6.99 }
]

var totalCost = _.reduce(shoppingList,function(acc,item){
  return acc + item.price
}, 0) // '0' is the 3rd argument (aka starting value)
// by default start_val is first item in the array (in our case and object)
// so a 'object + price' will be returned if we dont define start_val as 0

console.log(totalCost)



// ====== original code ======
// var shoppingList = [
//   { name: "Eggs",    price: 4.99 },
//   { name: "Milk",    price: 3.99 },
//   { name: "Bananas", price: 2.79 },
//   { name: "Beer",    price: 6.99 }
// ]