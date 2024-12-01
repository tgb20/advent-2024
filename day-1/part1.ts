import { fileToArrays } from "./shared.ts";
const { listA, listB } = await fileToArrays("inputs/real.txt");

listA.sort();
listB.sort();

const diffSum = listA.reduce((accumulator, _, index) => {
  const v1 = listA[index];
  const v2 = listB[index];
  return accumulator + Math.abs(v1 - v2);
}, 0);

console.log(diffSum);
