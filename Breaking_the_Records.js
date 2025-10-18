function breakingRecords(scores) {
  let current1 = -1;
  let current2 = scores[0];
  let bestReacod = 0;
  let worstRecod = 0;
  scores.forEach((score) => {
    if (score > current1) {
      current1 = score;
      bestReacod++;
    }
    if (score < current2) {
      current2 = score;
      worstRecod++;
    }
  });
  bestReacod--;

  return [bestReacod, worstRecod];
}