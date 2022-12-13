const PI = 3.14159 ;

const sphereVolume = function (radius) {
  console.log(radius)
  let volume = 4/3*PI*Math.pow(radius, 3)
  console.log(volume)
  return volume
}

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = function (radius, height) {
  let volume = 1/3*PI*Math.pow(radius, 2)*height;
  console.log(volume)
  return volume;
}

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function (height, width, depth) {
  // Probably here too!
  let base = width * depth;
  let volume = height * base;
  return volume;
}

console.log(prismVolume(3, 4, 5) === 60);

const totalVolume = function (solids) {
  let largeSphereVolume=4/3*PI*Math.pow(largeSphere.radius, 3)
  console.log("lsv", largeSphereVolume)
  console.log(smallSphere.radius)
  let smallSphereVolume=4/3*PI*Math.pow(smallSphere.radius, 3)
  console.log("ssv", smallSphereVolume)
  let coneVolume = 1/3*PI*Math.pow(cone.radius, 2)*cone.height;
  console.log("conevolume", coneVolume)
  console.log(largeSphereVolume + smallSphereVolume + coneVolume)
  return largeSphereVolume + smallSphereVolume + coneVolume

}

const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const duck = [
  largeSphere,
  smallSphere,
  cone
]

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);
