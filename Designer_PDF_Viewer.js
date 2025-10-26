function designerPdfViewer(h, word) {
  const letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const arrayOfWorld = word.split("");
  const pushed1 = [];
  const pushed2 = [];

  for (let i = 0; i < arrayOfWorld.length; i++) {
    pushed1.push(letters.indexOf(arrayOfWorld[i]));
    pushed2.push(h[pushed1[i]]);
  }

  pushed2.sort((a, b) => a - b);

  return pushed2[pushed2.length - 1] * arrayOfWorld.length;
}
