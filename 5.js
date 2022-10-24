//turn a normal string into a percent-encoded string by replacing all whitespace with %20

const urlEncode = function (text) {
  let trimmed = text.trim();
  for (let i = 0; i < trimmed.length; i++) {
    if (trimmed[i].includes(" ")) {
      trimmed = trimmed.replace(" ", "%20")
    }
  }
  return trimmed
}

//trim the whitespace beginning and end 
//loop, find spaces, replace


console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));

//Lighthouse%20Labs
// Lighthouse%20Labs
// blue%20is%20greener%20than%20purple%20for%20sure