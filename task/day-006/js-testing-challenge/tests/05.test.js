const isPrime = require("../src/05");

test("cek isPrime angka 5 return true", () => {
  expect(isPrime(5)).toBe(true);
});

test("cek isPrime angka 10 return false", () => {
  expect(isPrime(10)).toBe(false);
});

test("cek isPrime angka 1 return false", () => {
  expect(isPrime(1)).toBe(false);
});
