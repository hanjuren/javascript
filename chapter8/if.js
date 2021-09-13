var num = 2;
var kind;

if (num > 0) {
  kind = '양수';
}
console.log(kind);

if (num > 0) {
  kind = '양수';
} else {
  kind = '음수';
}
console.log(kind);

if (num > 0) {
  kind = '양수';
} else if (num < 0) {
  kind = '음수';
} else {
  kind = '영';
}
console.log(kind);

var x = 2;
var result;

if (x % 2) {
  result = '홀수';
} else {
  result = '짝수';
}
console.log(result);

var x = 2;
var result = x % 2 ? '홀수' : '짝수';
console.log(result);