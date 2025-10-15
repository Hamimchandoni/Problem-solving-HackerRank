function timeConversion(s) {
  const arr = s.split("");
  let firstTwo = "";
  let last = "";
  let amPm = "";
  let res = "";
  amPm = arr[8];
  amPm += arr[9];
  last = arr[2];
  last += arr[3];
  last += arr[4];
  last += arr[5];
  last += arr[6];
  last += arr[7];
  firstTwo += arr[0];
  firstTwo += arr[1];

  if (amPm === "AM") {
    am();
  } else {
    pm();
  }

  function am() {
    switch (firstTwo) {
      case "12":
        res = "00";
        break;
      case "01":
        res = "01";
        break;
      case "02":
        res = "02";
        break;
      case "03":
        res = "03";
        break;
      case "04":
        res = "04";
        break;
      case "05":
        res = "05";
        break;
      case "06":
        res = "06";
        break;
      case "07":
        res = "07";
        break;
      case "08":
        res = "08";
        break;
      case "09":
        res = "09";
        break;
      case "10":
        res = "10";
        break;
      case "11":
        res = "11";
        break;
    }
  }

  function pm() {
    switch (firstTwo) {
      case "12":
        res = "12";
        break;
      case "01":
        res = "13";
        break;
      case "02":
        res = "14";
        break;
      case "03":
        res = "15";
        break;
      case "04":
        res = "16";
        break;
      case "05":
        res = "17";
        break;
      case "06":
        res = "18";
        break;
      case "07":
        res = "19";
        break;
      case "08":
        res = "20";
        break;
      case "09":
        res = "21";
        break;
      case "10":
        res = "22";
        break;
      case "11":
        res = "23";
        break;
    }
  }

  res += last;
  return res;
}