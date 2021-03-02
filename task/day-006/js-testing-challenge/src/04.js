function isLeapYear(year) {
  //   return new Date(year, 2, 29).getDate() === 29;
  return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
}

module.exports = isLeapYear;
