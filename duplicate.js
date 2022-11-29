// Make this work:
// duplicate([1,2,3]); // [1,2,3,1,2,3]

const duplicate = function (arr) {
  let duplicatedArr = [];
  for (let element of arr) {
    duplicatedArr = arr.concat(arr)
  }
  return duplicatedArr
}

const duplicateAnotherApproach = function(arr) {
  return [...arr, ...arr]
}



console.log(duplicate([1, 2, 3]));
console.log(duplicateAnotherApproach([1, 2, 3]));