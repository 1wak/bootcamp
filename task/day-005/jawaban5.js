// Mirror

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Masukkan kalimat: ", (x) => {
  let res = x.split("").reverse().join("");
  console.log(x.concat(res));

  readline.close();
});
