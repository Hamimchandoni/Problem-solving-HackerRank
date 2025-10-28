function utopianTree(n) {
  let number1 = 1;
  let tF = true;
  let count = 1;
  for (let i = 1; i <= n; i++) {
    if (tF) {
      number1 += 1;
      tF = false;
      count++;
    } else {
      if (count === 2) {
        number1 = 3;
        count = undefined;
      } else {
        number1 *= 2;
        tF = true;
      }
    }
    console.log(count);
  }
  return number1;
}
