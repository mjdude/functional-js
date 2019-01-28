const conjoin = (flockX, flockY) => flockX + flockY;
const breed = (flockX, flockY) => flockX * flockY;

const flockA = 4;
const flockB = 2;
const flockC = 0;

const result = conjoin(breed(flockB, conjoin(flockA, flockC)), breed(flockA, flockB));

console.log(result)

// Renaming the custom functions

const add = (x,y) => x+y;
const multiply = (x,y) => x*y;

const result2 = add(multiply(flockB,add(flockA,flockC)), multiply(flockB, flockA))

console.log('result2 is ', result2)