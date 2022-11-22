const drivers = {
  AgF4g: {
    name: "Daniel Ricciardo",
    team: "Renault F1 Team",
    cars: ["Toyota Corolla 2018", "BMW M3", "F1"],
  },
  FfE4c: {
    name: "Lando Norris",
    team: "McLaren",
    cars: ["DB8", "CLK489", "F1"],
  },
  Df4cf: { name: "Sebastian Vettel", team: "Ferrari", cars: ["BMW M3", "F1"] },
  I4fTw: { name: "Nicholas Latifi", team: "Renault F1 Team", cars: ["F1"] },
  pT4vD: { name: "Kimi Raikkonen", team: "Alfa Romeo", cars: ["BMW M3", "F1"] },
  RaMfV: { name: "Romain Grosjean", team: "Ferrari", cars: ["Opel Cadet"] },
};

const getTeams = function (teams) {
  let obj = {};
  for (let team in teams) {
    console.log(teams[team].team);
    console.log(teams[team].name);

    if (!obj[teams[team].team]) {
      obj[teams[team].team] = [];
    }
    obj[teams[team].team].push(teams[team].name);
  }
  return obj;
};

console.log(getTeams(drivers));

// expected:
// {
//   'Renault F1 Team': [ 'Daniel Ricciardo', 'Nicholas Latifi' ],
//   McLaren: [ 'Lando Norris' ],
//   Ferrari: [ 'Sebastian Vettel', 'Romain Grosjean' ],
//   'Alfa Romeo': [ 'Kimi Raikkonen' ]
// }
