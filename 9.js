// We will receive a normal string of words separated with spaces as the input.
// Our job is to convert these strings into camel cased strings.
//Create a function named camelCase that will convert a string to camel case,
//and return the result.

const camelCase = function (input) {
  const titleCase = input
    .split(" ")
    .map((word, i) => {
      console.log(i);
      if (i !== 0) return word.charAt(0).toUpperCase() + word.slice(1);
      else {
        return word;
      }
    })
    .join("");
  return titleCase;
};

const camelCase2 = function (input) {
  let arr = input.split(" ");
  let result = " ";
  for (let i = 0; i < arr.length; i++) {
    if (i !== 0) {
      result += arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    } else {
      result += arr[i].toLowerCase();
    }
  }
  return result;
};

const camelCase3 = function (input) {
  let arr = input.split(" ");
  let result = " ";
  for (let [i, element] of arr.entries()) {
    if (i !== 0) {
      result += arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    } else {
      result += arr[i].toLowerCase();
    }
  }
  return result;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
console.log(camelCase2("this is a string"));
console.log(camelCase2("loopy lighthouse"));
console.log(camelCase2("supercalifragalisticexpialidocious"));
console.log(camelCase3("this is a string"));
console.log(camelCase3("loopy lighthouse"));
console.log(camelCase3("supercalifragalisticexpialidocious"));
