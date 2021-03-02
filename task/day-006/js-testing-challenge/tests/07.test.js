const repeatLetter = require("../src/07");

test("cek apakah output mereturn => HHeelllloo WWoorrlldd!!", () => {
  expect(repeatLetter("Hello World! ", 2)).toBe("HHeelllloo WWoorrlldd!!");
});
