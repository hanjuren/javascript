var Counter = (function () {
  var num = 0;

  return {
    in() {
      return ++num;
    },
    out() {
      return --num;
    }
  }
}());

console.log(Counter.num);
console.log(Counter.in());
console.log(Counter.out());
console.log(Counter.out());