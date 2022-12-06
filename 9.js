// We will receive a normal string of words separated with spaces as the input. 
// Our job is to convert these strings into camel cased strings.
//Create a function named camelCase that will convert a string to camel case, 
//and return the result.

//
// const camelCase = function(input) {
//   const titleCase = input
//   .split(" ")
//   .map(word => 
//     word.charAt(0).toUpperCase() + word.slice(1)
//   )
//   .join("")
//   return titleCase
// };

const camelCase = function(input) {
  let arr = input.split(" ")
  let result = " "
  for (let i = 0; i < arr.length; i++) {
    if (i !== 0) {
      result += arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
    }
    else {
      result += arr[i].toLowerCase()
    }
  }
  return result
}





console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
