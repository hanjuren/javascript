// var f = function add (x, y) {
//   return x + y;
// };

// var result = f(1, 2);

// console.log(result);

// console.log(add(1, 3));
// // console.log(sub(2, 1));

// function add (x, y) {
//   return x + y;
// }

// const sub = (x, y) => {
//   return x + y;
// }
// console.log(sub(2, 1));

// 재귀함수
// function fac (n) {
//   if (n < 0) return;
//   console.log(n);
//   fac(n -1);
// }
// fac(10);

// 중첩 함수
// function outer () {
//   var x = 1;

//   // 중첩 함수
//   function inner () {
//     var y = 2;

//     // 중첩 함수는 외부 함수의 변수를 참조할 수 있다.
//     console.log(x + y);
//   }

//   inner();
// }
// outer();

// 콜백 함수
// function repeat (n) {
//   for (var i = 0; i < n; i++) console.log(i);
// }
// repeat(5);

// function re (n , f) {
//   for (var i = 0; i < n; i ++) {
//     f(i);
//   }
// }
// var logAll = function (i) {
//   console.log(i);
// }
// re(5, logAll);

// var logOdds = function (i) {
//   if(i%2) console.log(i);
// };

// re (5, logOdds);

var res = [1, 2, 3].map((item) => {
  return item * 2;
});
console.log(res);

var fil = [1, 2, 3].filter((item) => {
  return item % 2;
});
console.log(fil);