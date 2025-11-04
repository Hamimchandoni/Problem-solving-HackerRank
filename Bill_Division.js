function bonAppetit(bill, k, b) {
  bill.splice(k, 1);
  let annaAte = 0;

  bill.forEach((element) => {
    annaAte += element;
  });

  let annabill = Math.floor(annaAte / 2);

  if (annabill === b) {
    console.log("Bon Appetit");
  } else {
    console.log(Math.abs(annabill - b));
  }
}
