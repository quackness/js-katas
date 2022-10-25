const whereCanIPark = function (spots, vehicle) {
  for (let i = 0; i < spots.length; i++) {
    for (let j = 0; j < spots[i].length; j++) {
        if (vehicle === "regular" && spots[i][j] === "R") {
        return [i,j]
      }
      else if (vehicle === "small" && (spots[i][j] === "R" || spots[i][j] === "S")){
          return [i,j]  
      } 
      else if (vehicle === "motorcycle" && (spots[i][j] === "R" || spots[i][j] === "S" || spots[i][j] === "M")) {
        return [i,j]
      }
    }
  } 
  return false
}

console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
))






//no need to oush into an array, the function should exit as soon as it finds a spot
// coordinates = [];
//   for (let y = 0; y < spots.length; y++) {
//     for (let x = 0; x < spots[y].length; x++) {
//       console.log(spots[y][x])
//       let spot = spots[y][x];
//       if (vehicle === "regular") {
//         if (spot === "R") {
//           coordinates.push(x)
//           coordinates.push(y)
//           return coordinates
//         }
//       } else if (vehicle === 'small' && (spot === "R" || spot === "S")) {
//         return [x,y]
//       } else if (vehicle === 'motorcycle' && (spot === "R" || spot === "S" || spot === "M")) {
//         return [x,y]
//       }
//     }
  
//   }
//   return false;  