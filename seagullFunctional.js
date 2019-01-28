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

// associative
add(add(x, y), z) === add(x, add(y, z));

// commutative
add(x, y) === add(y, x);

// identity
add(x, 0) === x;

// distributive
multiply(x, add(y,z)) === add(multiply(x, y), multiply(x, z));

// Original line
add(multiply(flockB, add(flockA, flockC)), multiply(flockA, flockB));

// Apply the identity property to remove the extra add
// (add(flockA, flockC) == flockA)
add(multiply(flockB, flockA), multiply(flockA, flockB));

// Apply distributive property to achieve our result
const result3 = multiply(flockB, add(flockA, flockA));