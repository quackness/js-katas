// find the two largest numbers in that array, and sum them together
// loop through the array
// find the highest two sumLargestNumbers
// sum them
const sumLargestNumbers = function (data) {
  let largestNumber = 0;
  let index = 0;
  let secondLargest = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i] > largestNumber) {
      largestNumber = data[i];
      index = i;
    }
  }
  data = data.splice(0, index)
  for (i = 0; i < data.length; i++) {
    if (data[i] > secondLargest) {
      secondLargest = data[i]
    }
  }
  return largestNumber + secondLargest;
}

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));


