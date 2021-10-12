// var i = 10;

// function foo () {
//   var i = 100;

//   for (var i = 0; i < 5; i++) {
//     console.log(i);
//   }
//   console.log(i);
// }

// foo();
// console.log(i);

let i = 10;

function foo () {
  let i = 100;

  for (let i = 0; i < 5; i++) {
    console.log(i); // 0, 1, 2, 3, 4
  }
  console.log(i); // 5
}
foo();
console.log(i); //10