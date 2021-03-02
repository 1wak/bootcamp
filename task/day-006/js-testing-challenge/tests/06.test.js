const repeatString = require("../src/06");

test("cek apakah output mereturn => Makan! Makan! Makan! ", () => {
  expect(repeatString("Makan! ", 3)).toBe("Makan! Makan! Makan! ");
});
