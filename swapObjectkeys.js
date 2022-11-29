// Write a function that takes an object as argument
// Somehow, the properties and keys of the object got mixed up
// Swap the Javascript object's key with its values and return the resulting object
// {a: 1 , b : 2, c: 3}    returns.  {1:"a", 2:"b", 3:"c"}

const swap = function(originalObj) {
  let correctObj = {};
  let num = 1;
  for (let key in originalObj) {
    correctObj[originalObj[key]]= key;
  } 
  return correctObj
}

console.log(swap({a: 1 , b : 2, c: 3}))
