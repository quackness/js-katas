// find the two largest numbers in that array, and sum them together
const sumLargestNumbers = function(data) {
  // Put your solution here
  // loop through the array
  // find the highest two sumLargestNumbers
  // sum them
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    // sum += data[i]
    sum = sum + data[i]
    }
  return sum
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));


