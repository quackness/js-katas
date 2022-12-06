// We will receive a normal string of words separated with spaces as the input. 
// Our job is to convert these strings into camel cased strings.
//Create a function named camelCase that will convert a string to camel case, 
//and return the result.


const camelCase = function(input) {
  const titleCase = input
  .split(" ")
  .map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1)
  })
  .join("")
  // let string = input.split(" ")
  // string.map(word => word.charAt(0).toUpperCase() + word.slice(1))
  //     // word.join(" ")
  // return string
  return titleCase
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
