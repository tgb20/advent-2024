const text = await Deno.readTextFile("../inputs/day4real.txt");

const splitRows = text.split(/\r?\n/);

const grid = splitRows.map((r) => {
  return r.split("");
});

let xmasCount = 0;

for (let y = 0; y < grid.length; y++) {
  for (let x = 0; x < grid[y].length; x++) {
    // Search horizontally
    try {
      const char1 = grid[y][x];
      const char2 = grid[y][x + 1];
      const char3 = grid[y][x + 2];
      const char4 = grid[y][x + 3];
      const str = [char1, char2, char3, char4].join("");
      if (str === "XMAS" || str === "SAMX") {
        xmasCount += 1;
      }
    } catch (_) {
      // Invalid read
    }

    // Search vertically
    try {
      const char1 = grid[y][x];
      const char2 = grid[y + 1][x];
      const char3 = grid[y + 2][x];
      const char4 = grid[y + 3][x];
      const str = [char1, char2, char3, char4].join("");
      if (str === "XMAS" || str === "SAMX") {
        xmasCount += 1;
      }
    } catch (_) {
      // Invalid read
    }

    // Search forward
    try {
      const char1 = grid[y][x];
      const char2 = grid[y + 1][x + 1];
      const char3 = grid[y + 2][x + 2];
      const char4 = grid[y + 3][x + 3];
      const str = [char1, char2, char3, char4].join("");
      if (str === "XMAS" || str === "SAMX") {
        xmasCount += 1;
      }
    } catch (_) {
      // Invalid read
    }

    // Search backward
    try {
      const char1 = grid[y][x];
      const char2 = grid[y + 1][x - 1];
      const char3 = grid[y + 2][x - 2];
      const char4 = grid[y + 3][x - 3];
      const str = [char1, char2, char3, char4].join("");
      if (str === "XMAS" || str === "SAMX") {
        xmasCount += 1;
      }
    } catch (_) {
      // Invalid read
    }
  }
}

console.log(xmasCount);
