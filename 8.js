// [[1, 2], [2, 3]]
// The input data for this exercise will be two dimensional array (an array of arrays),
// where each sub-array will have two numeric values. For example:
// The first will be the value to repeat, the second will be the amount
// of times to repeat that value.
// Create a function named repeatNumbers that will return a string with each of
// the given values repeated the appropriate number of times, if there are multiple
// sets of values each set should be separated by a comma. If there is only one set
// of values then you should omit the comma.

const repeatNumbers = function (data) {
  let result = " "
  for (i = 0; i < data.length; i++) {
    console.log("outter array", data)
    for (j = 0; j < data[i][1]; j++) {
      console.log("inner array [i] second element", data[i][1])
      result += data[i][0]
    }
    if (i < data.length - 1)
      result += ", "
  }
  return result
};

console.log(repeatNumbers([[1, 10]])); //1111111111
console.log(
  repeatNumbers([
    [1, 2],
    [2, 3],
  ])
);//11, 222
console.log(
  repeatNumbers([
    [10, 4],
    [34, 6],
    [92, 2],
  ])
);//10101010, 343434343434, 9292

