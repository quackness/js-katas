const drivers = {
  AgF4g: { name: 'Daniel Ricciardo', team: 'Renault F1 Team', cars: ['Toyota Corolla 2018', 'BMW M3', "F1"] },
  FfE4c: { name: 'Lando Norris', team: 'McLaren', cars: ['DB8', 'CLK489', 'F1'] },
  Df4cf: { name: 'Sebastian Vettel', team: 'Ferrari', cars: ['BMW M3', 'F1'] },
  I4fTw: { name: 'Nicholas Latifi', team: 'Renault F1 Team', cars: ['F1'] },
  pT4vD: { name: 'Kimi Raikkonen', team: 'Alfa Romeo', cars: ['BMW M3', 'F1'] },
  RaMfV: { name: 'Romain Grosjean', team: 'Ferrari', cars: ['Opel Cadet'] },
}

//task 1: get an array of drivers
//create an empty array, 
//loop through the object and access the names, push the names into an array
//return an array with drivers 

const getNames = function (drivers) {
  let arr = [];
  for (const driver in drivers) {
    console.log(drivers[driver].name)
    arr.push(drivers[driver].name)
  }
  return arr
}

console.log(getNames(drivers));