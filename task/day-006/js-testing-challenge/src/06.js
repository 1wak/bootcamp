function repeatString(text, times) {
  // return text.repeat(times)
  let len = text.length;
  let string = "";

  for (let i = 0; i < times; i++) {
    for (let x = 0; x < len; x++) {
      string += text[x];
    }
  }
  return string;
}
module.exports = repeatString;

console.log(repeatString("Makan! ", 3));
