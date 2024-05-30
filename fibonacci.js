const sequenceLength = 8;

function fibs(n) {
  if (n <= 0) return undefined;
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  const fibArr = [0, 1];

  for (let i = fibArr.length; i < n; i++) {
    fibArr.push(fibArr[i - 1] + fibArr[i - 2]);
  }

  return fibArr;
}

console.log(fibs(sequenceLength));
