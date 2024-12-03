const text = await Deno.readTextFile("inputs/real.txt");
const lines = text.split(/\r?\n/);

const reports = lines.map((l) => l.split(" ").map(Number));

let safeReports = 0;

for (const report of reports) {
  const initalSafe = checkSafe(report);
  if (initalSafe) {
    safeReports++;
    continue;
  }
  let safeWithoutCount = 0;
  for (let i = 0; i < report.length; i++) {
    const copy = report.filter((_, index) => {
      return index != i;
    });
    if (checkSafe(copy)) {
      safeWithoutCount++;
    }
  }

  if (safeWithoutCount >= 1) {
    safeReports++;
  }
}
console.log(safeReports);

function checkSafe(report: number[]) {
  let isDecreasing = false;
  let isIncreasing = false;

  for (let i = 0; i < report.length - 1; i++) {
    const curDigit = report[i];
    const nextDigit = report[i + 1];

    // Check if delta between 1-3
    const delta = Math.abs(curDigit - nextDigit);
    if (delta === 0 || delta > 3) {
      return false;
    }

    // Check direction
    if (curDigit < nextDigit) {
      if (isDecreasing) {
        return false;
      }
      isIncreasing = true;
    }
    if (curDigit > nextDigit) {
      if (isIncreasing) {
        return false;
      }
      isDecreasing = true;
    }
  }
  return true;
}
