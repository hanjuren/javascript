// var count = 0;

// while (count < 3) {
//   console.log(count);
//   count++;
// }

// var i = 0;

// do {
//   console.log(i);
//   i++;
// } while (i < 3);
outer : for (var i = 0; i < 3; i++) {
  for (var j = 0; j < 3; j++) {
    if (i + j === 3) break outer;
    console.log(`${i} ${j}`);
  }
}