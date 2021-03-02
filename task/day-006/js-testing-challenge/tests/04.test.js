const isLeapYear = require("../src/04");

test("Cek apakah 2020 merupakan tahun kabisat?", () => {
  expect(isLeapYear(2020)).toBe(true);
});

test("Cek jika 2021 bukan merupakan tahun kabisat", () => {
  expect(isLeapYear(2021)).toBe(false);
});
