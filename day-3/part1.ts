const text = await Deno.readTextFile("../inputs/day3real.txt");

const mulRegex = /(mul\([0-9]+,[0-9]+\))/g;

const matchingMults = [...text.matchAll(mulRegex)].map((a) => a[0]);

const digitRegex = /[0-9]+/g;

let mulSum = 0;

for (const mul of matchingMults) {
  const digits = [...mul.matchAll(digitRegex)].map((a) => parseInt(a[0]));
  mulSum += digits[0] * digits[1];
}

console.log(mulSum);
