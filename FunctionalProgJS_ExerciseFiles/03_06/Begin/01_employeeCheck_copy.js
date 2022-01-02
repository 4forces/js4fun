// Learning Functional Programming with Javascript
// Chapter 03, Video 06, Exercise 01
var _ = require("lodash") // +++++ add-on working code +++++

// ===== original code =====
var employees = [
  { name: "John",   salary: 60000,  age: 27, gender: 'M' },
  { name: "Mary",   salary: 110000, age: 50, gender: 'F' },
  { name: "Susan",  salary: 50000,  age: 21, gender: 'F' },
  { name: "Greg",   salary: 100000, age: 45, gender: 'M' },
  { name: "Jerry",  salary: 90000,  age: 39, gender: 'M' },
  { name: "Barb",   salary: 95000,  age: 36, gender: 'F' }
]

// +++++ add-on working code +++++
var males = _.filter(employees, function(employee) {
  return employee.gender === 'M'
})
var maleAges = _.map(males, function(male) {
  return male.age // take a 'male employee' object, and change it to a number representing his age
})
var maleAgeTotal = _.reduce(maleAges, function(acc, age) {
  return acc + age // fxn that sums all male age to total
}) // no need to set start_val to 0 since age is already a number
var maleAgeAverage = maleAgeTotal / males.length

console.log("Average male age: " + maleAgeAverage)

var females = _.filter(employees, function(employee) {
  return employee.gender === 'F'
})
var femalesAges = _.map(females, function(females) {
  return females.age
})
var femaleAgeTotal = _.reduce(femalesAges, function(acc, age) {
  return acc + age
})
var femaleAgeAverage = femaleAgeTotal / females.length

console.log("Average female age: " + femaleAgeAverage)
