const conditionalSum = function (values, condition) {
  let sum = 0;
  for (let i = 0; i < values.length; i++) {
    if (((values[i] % 2 === 0) && (condition === "even")) || ((values[i] % 2 > 0) && (condition === "odd"))) {
      sum += values[i]
    }
  }
  return sum
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));

//add only the numbers in the array which match the given condition.
//loop through the array to find the numbers mathcing the condition and module outcome
//sum them 
//return the sum 


// let sum = 0;
// for (let i = 0; i < values.length; i++) {
//   if ((values[i] % 2 === 0) && (condition === "even")) {
//         sum += values[i]
//   }
//   if ((values[i] % 2 > 0) && (condition === "odd")) {
//     sum += values[i]
//   }
// }
// return sum