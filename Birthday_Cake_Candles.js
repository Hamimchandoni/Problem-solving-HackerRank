function birthdayCakeCandles(candles) {
  const arr = candles;
  let res = 0;
  arr.sort((a, b) => {
    return a - b;
  });

  arr.forEach((a) => {
    if (arr[arr.length - 1] === a) {
      res++;
    }
  });
  return res;
}
