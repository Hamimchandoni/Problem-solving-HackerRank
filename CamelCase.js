function camelcase(s) {
  const arr = s.split("");
  const low = s.toLocaleLowerCase().split("");
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== low[i]) {
      res++;
    }
  }
  res++;
  return res;
}

camelcase("hamimChandoni");
