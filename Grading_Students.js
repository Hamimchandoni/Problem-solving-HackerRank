function gradingStudents(grades) {
  let res = [];
  grades.forEach((num) => {
    let ceiled = Math.ceil(num / 5) * 5;
    let divided = ceiled - num;
    if (num < 38 || divided >= 3) {
      res.push(num);
    } else {
      res.push(ceiled);
    }
  });
  return res;
}
