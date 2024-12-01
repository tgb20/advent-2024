async function fileToArrays(path: string) {
  const text = await Deno.readTextFile(path);
  const lines = text.split(/\r?\n/);

  const listA = [];
  const listB = [];

  for (const line of lines) {
    const lineArr = line.split("   ");
    listA.push(Number(lineArr[0]));
    listB.push(Number(lineArr[1]));
  }

  return { listA, listB };
}

export { fileToArrays };
