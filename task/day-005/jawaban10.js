// Cipher

const CryptoJS = require("crypto-js");

const message = CryptoJS.AES.encrypt(
  "Ini tulisan rahasia",
  "p4$$w0rd"
).toString();

const bytes = CryptoJS.AES.decrypt(message, "p4$$w0rd");
const decryptedMessage = bytes.toString(CryptoJS.enc.Utf8);

console.log(message); // Anyone without password can't read this message
console.log(decryptedMessage); // Ini tulisan rahasia
