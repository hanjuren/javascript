// 연도가 4로 나누어 떨어지는 해는 윤년이다.
// 4로 나누어 떨어지지만 100으로 나누어 떨어지는 해는 평년이다.
// 연도가 400으로 나누어 떨어지는 해는 윤년이다.

var year = 2020;
var month = 2;
var days = 0;

switch (month) {
  case 1: case 3: case 5: case 7: case 8: case 10: case 12:
    days = 31;
    break;
  case 4: case 6: case 9: case 11:
    days = 30;
    break;
  case 2:
    days = ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) ? 29 : 28;
    break;
}
console.log(days);