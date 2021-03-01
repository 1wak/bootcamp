// Hash

const CryptoJS = require("crypto-js");

const md5Hash = CryptoJS.MD5("secret");
const sha1Hash = CryptoJS.SHA1("secret");
const sha256Hash = CryptoJS.SHA256("secret");
const sha512Hash = CryptoJS.SHA512("secret");

console.log(md5Hash.toString());
console.log(sha1Hash.toString());
console.log(sha256Hash.toString());
console.log(sha512Hash.toString());
