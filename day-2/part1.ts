const text = await Deno.readTextFile("inputs/real.txt");
const lines = text.split(/\r?\n/);

const reports = lines.map((l) => l.split(" ").map(Number));

let safeReports = 0;

for (const report of reports) {
  let isSafe = true;

  const reportString = JSON.stringify(report);

  // Check if all decreasing or all increasing
  const increasingArray = JSON.stringify([...report].sort((a, b) => a - b));
  const decreasingArray = JSON.stringify([...report].sort((a, b) => b - a));
  if (reportString !== increasingArray && reportString !== decreasingArray) {
    isSafe = false;
  }

  // Check if max difference is at least 1 or max 3
  for (let i = 0; i < report.length - 1; i++) {
    const curDigit = report[i];
    const nextDigit = report[i + 1];
    const delta = Math.abs(curDigit - nextDigit);
    if (delta === 0 || delta > 3) {
      isSafe = false;
    }
  }

  console.log(report.toString(), isSafe);
  if (isSafe) {
    safeReports++;
  }
}

console.log(safeReports);
