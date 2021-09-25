const _ = require('lodash');

const o = { x: { y: 1 } };
// 얕은 복사
const c1 = { ...o };

console.log(o);
console.log(c1);
console.log(c1 === o);
console.log(c1.x === o.x);

// 깊은 복사
const c2 = _.cloneDeep(o);

console.log(o);
console.log(c2);
console.log(c2 === o);
console.log(c2.x === o.x);

const x = { x: 2};

const y = {...x};

console.log(x);
console.log(y);
console.log(y === x);