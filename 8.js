// [[1, 2], [2, 3]]
// The input data for this exercise will be two dimensional array (an array of arrays), 
// where each sub-array will have two numeric values. For example:
// The first will be the value to repeat, the second will be the amount 
// of times to repeat that value.
// Create a function named repeatNumbers that will return a string with each of 
// the given values repeated the appropriate number of times, if there are multiple 
// sets of values each set should be separated by a comma. If there is only one set 
// of values then you should omit the comma.


const repeatNumbers = function(data) {
  //create a loop where it prints the number 1 ten times
  let result = "";
  for (i = 0; i < data[1]; i++) {
    result += data[0];
  }
  return result
};

console.log(repeatNumbers([1, 10])); //1111111111
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
