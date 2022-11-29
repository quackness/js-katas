/* given a string of words, return the length of the shortest word(s).
String will never be empty and you do not need to account for different data types. */

const shortestWordLength = function (sentence) {
  //turn sentence into an array
  //set the length of the first element
  //loop through the array elements
  //run an if check to compare the lengths of the each element with the first element
  //return the length shortest array element 
  let arr = sentence.split(" ")
  let shortestWord = arr[0].length
  for (let word in arr) {
    if (word.length < shortestWord) {
      shortestWord === word.length
    }
  }
  return shortestWord
}


console.log(shortestWordLength("Hi this is my name")) //2
