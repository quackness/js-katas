const drivers = {
  AgF4g: { name: 'Daniel Ricciardo', team: 'Renault F1 Team', cars: ['Toyota Corolla 2018', 'BMW M3', "F1"] },
  FfE4c: { name: 'Lando Norris', team: 'McLaren', cars: ['DB8', 'CLK489', 'F1'] },
  Df4cf: { name: 'Sebastian Vettel', team: 'Ferrari', cars: ['BMW M3', 'F1'] },
  I4fTw: { name: 'Nicholas Latifi', team: 'Renault F1 Team', cars: ['F1'] },
  pT4vD: { name: 'Kimi Raikkonen', team: 'Alfa Romeo', cars: ['BMW M3', 'F1'] },
  RaMfV: { name: 'Romain Grosjean', team: 'Ferrari', cars: ['Opel Cadet'] },
}

//get the unique cars in an array 
//create an accumulator, loop, access cars, push them into an array if the car does not exist

const getCars = function (cars) {
  let arr = [];
  for (let car in cars) {
    // console.log(cars[car].cars)
    for (let item of cars[car].cars) {
      // console.log("item", item)
      if (!arr.includes(item)) {
        arr.push(item)
      }
    }
  }
  return arr;
}

console.log(getCars(drivers));