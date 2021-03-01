// Membalikkan Kata

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Masukkan kalimat: \n> ", (q) => {
  console.log(q.split(" ").reverse().join(" "));

  readline.close();
});
