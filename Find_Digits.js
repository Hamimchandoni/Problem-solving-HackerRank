function findDigits(n) {
  const string = n + "";
  const spl = string.split("");
  let count = 0;

  for (let i = 0; i <= spl.length - 1; i++) {
    if (Number(spl[i]) > 0 && n % Number(spl[i]) === 0) {
      count++;
    }
  }
  return count;
}
