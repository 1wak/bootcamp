const mebiToKibi = require("../src/03");

test("convert mebi ke kibi dimana 9 * 1024 adalah 9216", () => {
  expect(mebiToKibi(9)).toBe(9216);
});
