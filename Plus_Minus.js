function plusMinus(arr) {
  let len = arr.length;
  let posCount = 0;
  let negeCount = 0;
  let zeroCount = 0;

  for (let x of arr) {
    if (x > 0) {
      posCount++;
    } else if (x < 0) {
      negeCount++;
    } else {
      zeroCount++;
    }
  }
  console.log((posCount / len).toFixed(6));
  console.log((negeCount / len).toFixed(6));
  console.log((zeroCount / len).toFixed(6));
}
