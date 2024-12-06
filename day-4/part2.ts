const text = await Deno.readTextFile("../inputs/day4real.txt");

const splitRows = text.split(/\r?\n/);

const grid = splitRows.map((r) => {
  return r.split("");
});

let xmasCount = 0;

for (let y = 0; y < grid.length; y++) {
  for (let x = 0; x < grid[y].length; x++) {
    try {
      const char1 = grid[y][x];
      const char2 = grid[y + 1][x + 1];
      const char3 = grid[y + 2][x + 2];
      const str = [char1, char2, char3].join("");

      const char4 = grid[y][x + 2];
      const char5 = grid[y + 1][x + 1];
      const char6 = grid[y + 2][x];
      const str2 = [char4, char5, char6].join("");

      if (
        (str === "MAS" || str === "SAM") &&
        (str2 === "MAS" || str2 === "SAM")
      ) {
        xmasCount += 1;
      }
    } catch (_) {
      // Invalid read
    }
  }
}

console.log(xmasCount);
