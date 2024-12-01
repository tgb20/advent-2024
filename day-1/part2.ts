import { fileToArrays } from "./shared.ts";
const { listA, listB } = await fileToArrays("inputs/real.txt");

const modeArr = listA.map((a) => {
  return {
    number: a,
    count: listB.filter((b) => b === a).length,
  };
});

const similarityScore = modeArr.reduce((accumulator, currentValue) => {
  return accumulator + currentValue.number * currentValue.count;
}, 0);

console.log(similarityScore);
