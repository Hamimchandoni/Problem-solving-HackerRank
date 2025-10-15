function staircase(n) {
  for (let i = 1; i <= n; i++) {
    let space = " ".repeat(n - i);
    let repeat = "#".repeat(i);
    console.log(space + repeat);
  }
}
