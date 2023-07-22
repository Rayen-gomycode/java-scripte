// How Edabit Works
function hello() {
  return "hello edabit.com";
}

// Return the Sum of Two Numbers
function addition(num1, num2) {
  var sum = num1 + num2;
  return sum;
  //return num1 +num2;
}
// Buggy Code (Part 1)
function cubes(a) {
  return a ** 3;
}
// Return the First Element in an Array
function getFirstValue(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return undefined;
  return arr[0];
}
// Convert Minutes into Seconds
function convert(minutes) {
  if (typeof minutes !== "number" || !Number.isInteger(minutes))
    throw new Error("Input must be an integer.");
  return minutes * 60;
}
// Convert Age to Days
function calcAge(age) {
  if (typeof age !== "number" || !Number.isInteger(age) || age < 0)
    throw new Error("Age must be a positive integer.");
  return age * 365;
}
// Power Calculator
function circuitPower(voltage, current) {
  if (typeof voltage !== "number" || typeof current !== "number")
    throw new Error("Both voltage and current must be numbers.");
  return voltage * current;
}
// Return the Remainder from Two Numbers
function remainder(x, y) {
  if (typeof x !== "number" || typeof y !== "number" || y === 0)
    throw new Error("Both x and y must be non-zero numbers.");
  return x % y;
}
// Basketball Points
function points(twoPointers, threePointers) {
  if (typeof twoPointers !== "number" || typeof threePointers !== "number")
    throw new Error("Both two-pointers and three-pointers must be numbers.");
  return 2 * twoPointers + 3 * threePointers;
}
// Return Something to Me!
function giveMeSomething(a) {
  if (typeof a !== "string") throw new Error("Input must be a string.");
  return "something " + a;
}
// Is the Number Less than or Equal to Zero?
function lessThanOrEqualToZero(num) {
  if (typeof num !== "number") throw new Error("Input must be a number.");
  return num <= 0;
}
// Buggy Code (Part 5)
function printArray(number) {
  if (typeof number !== "number" || number <= 0)
    throw new Error("Input must be a positive number.");

  var newArray = [];

  for (var i = 1; i <= number; i++) newArray.push(i);
  return newArray;
}
// Find the Perimeter of a Rectangle
function findPerimeter(length, width) {
  if (
    typeof length !== "number" ||
    typeof width !== "number" ||
    length <= 0 ||
    width <= 0
  )
    throw new Error("Both length and width must be positive numbers.");

  return 2 * (length + width);
}
// Buggy Code (Part 7)
function swap(a, b) {
  let temp = a;
  a = b;
  b = temp;
  return [a, b];
}
// Return the Next Number from the Integer Passed
function addition(num) {
  if (typeof num !== "number") throw new Error("Input must be a number.");

  return num + 1;
}
// Bitwise Operations
function bitwiseAND(n1, n2) {
  return n1 & n2;
}

function bitwiseOR(n1, n2) {
  return n1 | n2;
}

function bitwiseXOR(n1, n2) {
  return n1 ^ n2;
}
// Return the First Element in an Array
function getFirstValue(arr) {
  if (!Array.isArray(arr) || arr.length === 0 || typeof arr[0] !== "number")
    throw new Error("Input must be a non-empty array containing only numbers.");

  return arr[0];
}
//How Edabit Works
function hello() {
  return "hello edabit.com";
}

//Return the Sum of Two Numbers
function addition(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Both arguments must be numbers.");
  }

  return a + b;
}
//Return Something to Me!
function giveMeSomething(a) {
  return "something " + a;
}
//Find the Smallest and Biggest Numbers
function minMax(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new Error("Input must be a non-empty array.");
  }

  let min = Math.min(...arr);
  let max = Math.max(...arr);

  return [min, max];
}
//Area of a Triangle
function triArea(base, height) {
  return (base * height) / 2;
}
//Convert Minutes into Seconds
function convert(minutes) {
  return minutes * 60;
}
//Buggy Code (Part 1)
function cubes(a) {
  return a ** 3;
}
//Maximum Edge of a Triangle
function nextEdge(side1, side2) {
  if (side1 <= 0 || side2 <= 0) {
    throw new Error("Side lengths must be positive integers.");
  }

  return side1 + side2 - 1;
}
//Correct the Mistakes
function squared(b) {
  return b ** 2;
}
//Find the Perimeter of a Rectangle
function findPerimeter(length, width) {
  return 2 * (length + width);
}
