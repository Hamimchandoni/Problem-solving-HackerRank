function diagonalDifference(arr) {
  let len = arr.length - 1;
  let leftToRight = 0;
  let rightToLeft = 0;
  let res;
  for (let i = 0; i < arr.length; i++) {
    leftToRight += arr[i][i];
    rightToLeft += arr[len - i][i];
  }
  if (rightToLeft > leftToRight) {
    res = rightToLeft - leftToRight;
  } else {
    res = leftToRight - rightToLeft;
  }
  return res;
}
