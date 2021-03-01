// Film Rating

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Masukkan usia: ", (usia) => {
  switch (true) {
    case usia >= 21:
      console.log("Dewasa".toUpperCase());
      break;
    case usia >= 13:
      console.log("Remaja".toUpperCase());
      break;
    case usia >= 9:
      console.log("Bimbingan Orang Tua".toUpperCase());
      break;
    case usia < 9:
      console.log("Semua Usia".toUpperCase());
      break;
    default:
      break;
  }
  readline.close();
});
