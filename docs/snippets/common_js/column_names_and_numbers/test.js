/**
 *
 */
function runTest() {
  let n = 0;
  while (n <= 1000) {
    const curN = n;
    const nextCol = base26ABCfrom10(curN + 1);
    n = base26ABCto10(nextCol);
    console.log(`${n} ~ ${nextCol}`);
    if (n !== curN + 1) console.error(`Unexpected output: "${n} ~ ${nextCol}"`);
  }
}

/**
 *
 */
function runTestArt() {
  const strings = ['ABC', 'AF', 'ALEX', 'ALL', 'COFE', 'GAS', 'TEA', 'UI'];
  console.log(strings.map((string) => [string, base26ABCto10(string)]));

  const numbers = [255, 1000, 2048, new Date().getTime()];
  console.log(numbers.map((number) => [number, base26ABCfrom10(number)]));
}
