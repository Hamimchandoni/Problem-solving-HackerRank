function miniMaxSum(arr) {
  let maxNum = 0;
  let minNum = 0;

  arr.sort((a, b) => a - b);

  for (let i = 1; i < arr.length; i++) {
    maxNum += arr[i];
  }
  for (let i = 0; i < arr.length; i++) {
    minNum += arr[i];
  }
  minNum = minNum - arr[arr.length - 1];
  console.log(`${minNum} ${maxNum}`);
}
