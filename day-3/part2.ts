const text = await Deno.readTextFile("../inputs/day3real.txt");

const instructions = /(mul\([0-9]+,[0-9]+\))|(do\(\))|(don't\(\))/g;

const matchingInstructions = [...text.matchAll(instructions)].map((a) => a[0]);

const digitRegex = /[0-9]+/g;

let mulSum = 0;

let adding = true;

for (const instruct of matchingInstructions) {
  if (instruct === "do()") {
    adding = true;
  }
  if (instruct === "don't()") {
    adding = false;
  }

  if (instruct.startsWith("mul") && adding) {
    const digits = [...instruct.matchAll(digitRegex)].map((a) =>
      parseInt(a[0])
    );
    mulSum += digits[0] * digits[1];
  }
}

console.log(mulSum);
