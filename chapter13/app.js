// var x = 'global';

// function foo () {
//   var x = 'local';
//   console.log(x); // local
// }
// foo();

// console.log(x); // global

// 전역 함수
function foo () {
  console.log('global function');
}

function bar () {
  // 중첩 함수
  function foo () {
    console.log('local function');
  }
  foo();
}
bar();