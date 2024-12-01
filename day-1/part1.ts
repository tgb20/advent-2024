import { fileToArrays } from "./shared.ts";
const { listA, listB } = await fileToArrays("inputs/real.txt");

listA.sort();
listB.sort();

let diffSum = 0;

for (let i = 0; i < listA.length; i++) {
  const v1 = listA[i];
  const v2 = listB[i];

  const diff = Math.abs(v1 - v2);
  diffSum += diff;
}

console.log(diffSum);
