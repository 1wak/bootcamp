function repeatLetter(text, times) {
  let txt = text.split(" ");
  let res = "";

  for (let i = 0; i < txt.length; i++) {
    let word = txt[i];
    for (let j = 0; j < word.length; j++) {
      for (let k = 0; k < times; k++) {
        res += word[j];
      }
    }
    res += " ";
  }
  return res.trim();
}

module.exports = repeatLetter;

// console.log(repeatLetter("Hello World! ", 2));
// console.log(repeatLetter("awioaj                ija jeoi j", 2));

// var str = "     Hello World!     ";
// console.log(str.trim());
