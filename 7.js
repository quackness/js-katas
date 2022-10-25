// implement a function called checkAir(), which will check a collection of air samples. The function will take in two arguments. 
// The first argument is an array of strings, where each string represents a small air sample that is either clean or dirty. 
// The second argument is a number representing the highest acceptable amount of dirty samples. 
// For example, a threshold of 0.4 means that there must be less than 40% of total samples classified as dirty for our air to be 
// considered clean. 
// Our function 
// must return Polluted if there are too many dirty air samples, or Clean if the proportion of dirty samples is below the threshold.


const checkAir = function (sample, threshold) {
  let totalSamples = sample.length;
  let count = 0;
  for (let i = 0; i < sample.length; i++) {
    if (sample[i] === "dirty") {
      ++count;
    }
  }
  return (count/sample.length < threshold? "Clean" : "Polluted")
};


console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))


// const checkAir = function (sample, threshold) {
//   let result = 0;
//     let divided = null;
//     let outcome = undefined;
//     for (let i = 0; i < sample.length; i++) {
//       if (sample[i] === "dirty") {
//         result++
//         divided = result / sample.length;
//         if (threshold >= divided) {
//           outcome = "Clean"
//         } else {
//           outcome = "Polluted"
//         }
//       }
//     }
//     return outcome
//   };






