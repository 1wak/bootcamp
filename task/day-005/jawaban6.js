// Palindrome

function palindrome(str) {
  let re = /[^A-Za-z0-9]/g;
  str = str.toLowerCase().replace(re, "");
  let len = str.length;
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return "Bukan Palindrome";
    }
  }
  return "Palindrome";
}

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Masukkan kata:\n> ", (e) => {
  console.log(palindrome(e));
  readline.close();
});
