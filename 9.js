// We will receive a normal string of words separated with spaces as the input. 
// Our job is to convert these strings into camel cased strings.
//Create a function named camelCase that will convert a string to camel case, 
//and return the result.


const camelCase = function(input) {
  let result = " ";
  let string = input.split(" ")
  string.map(word => console.log(word.charAt(0).toUpperCase() + word.slice(1)))
  return string.join(" ")
  // .toUpperCase()
  // return string



  // for (let i = 0; i < string.length; i++) {
  //   // string.charAt(0).toUpperCase();
  //   console.log("log", string)
  // } 
  // // return string
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
