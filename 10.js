// Create a function named multiplicationTable that receives a number 
// maxValue as input and creates a square 
// multiplication table where maxValue is the largest value in the table.

const multiplicationTable = function (maxValue) {
  let numbers = "";
  // console.log("start >", numbers)
  for (let i = 1; i <= maxValue; i++) {
    // console.log("firstLoop >", numbers)
    for (let j = 1; j <= maxValue; j++) {
      // console.log("second loop >", numbers)
      numbers += i * j + " ";
      // console.log("after multiplying", numbers)
    }
    numbers += "\n"
  }
  return numbers
};


const multiplicationTable1 = function(maxValue) {
  var output = [];
  for ( i = 1; i <= maxValue; i++ ) {
    var arr = [];
    for ( j = 1; j <= maxValue; j++ ) {
      arr.push(i*j);
    }
    output.push(arr.join(" "));
  }
  return output.join("\n");
}


console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));
console.log(multiplicationTable1(1));
console.log(multiplicationTable1(5));
console.log(multiplicationTable1(10));
