// count the number of vowels that appear in a given string. 
// For this exercise, consider the following to be vowels: a, e, i, o, and u.

const numberOfVowels = function (data) {
  let vowelCount = 0;
  let chars = "aeiou"
  for (let i = 0; i < chars.length; i++) {
    if (data.includes(chars[i])) {
      ++vowelCount
    }
  }
  return vowelCount;
}

//loop through the string
//find a vowel, increment by one each time
//return the total count

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));