//given a list of instructors, determine which instructor has the longest name

const instructorWithLongestName = function (instructors) {
  let longestNameCount = 0;
  let index = 0;
  for (let i = 0; i < instructors.length; i++) {
    if (longestNameCount < instructors[i].name.length) {
      longestNameCount = instructors[i].name.length
      index = i;
    }
  }
  return instructors[index]
};


console.log(instructorWithLongestName([
  { name: "Samuel", course: "iOS" },
  { name: "Jeremiah", course: "Web" },
  { name: "Ophilia", course: "Web" },
  { name: "Donald", course: "Web" }
]));
console.log(instructorWithLongestName([
  { name: "Matthew", course: "Web" },
  { name: "David", course: "iOS" },
  { name: "Domascus", course: "Web" }
]));