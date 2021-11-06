const person = new Object();

// new Object 함수를 호출하면 빈객체가 생성된다.
console.log(person); // {}

// 빈객체에 프로퍼티를 추가한다.
person.name = 'hanjuren';
person.getName = function () {
  console.log(`Hello My Name is ${this.name}`);
};

console.log(person); // { name: 'hanjuren', getName: f }
console.log(person.getName());

// 동일한 구조를 가진 객체를 생성자 함수로 여러개 생성하기

function Circle(radius) {
  this.radius = radius;
  this.getDiameter = function() {
    return 2 * this.radius;
  };
};

const circle1 = new Circle(5);
const circle2 = new Circle(10);

console.log(circle1);
console.log(circle2);

console.log(circle1.getDiameter());
console.log(circle2.getDiameter());

// constructor과 non-constructor

function foo() {};
const joo = function() {};
const boo = {
  x: function() {},
};

console.log(new foo());
console.log(new joo());
console.log(new boo.x());

const aoo = () => {};
const noo = {
  x() {},
};

console.log(new aoo());
console.log(new noo.x());