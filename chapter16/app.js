// const person = {
//   name: 'Han Juryeon',
// };

// console.log(Object.getOwnPropertyDescriptor(person, 'name'));

//접근자 프로퍼티
// const person = {
//   // 데이터 프로퍼티
//   firstName: 'Han',
//   lastName: 'JuRyeon',

//   // 접근자 프로퍼티 
//   // getter 함수 
//   get fullName () {
//     return `${this.firstName} ${this.lastName}`;
//   },

//   set fullName (name) {
//     [this.firstName, this.lastName] = name.split(' ');
//   }
// };

// // setter 함수 호출 전 값 확인
// console.log(person);

// // setter 함수 호출 후 값 확인
// // 접근자 함수를 통해 값을 저장하면 setter함수가 호출됨
// person.fullName = 'Hong GilDong';
// console.log(person);

// // 접근자 함수를 통해 값을 접근하면 getter함수가 호출된다.
// console.log(person.fullName);


// console.log(Object.getOwnPropertyDescriptor(person, 'firstName'));
// console.log(Object.getOwnPropertyDescriptor(person, 'fullName'));


// const myName = {}

// Object.defineProperty(myName, 'firstName', {
//   value: 'Han',
//   writable: true,
//   enumerable: true,
//   configurable: true,
// });

// console.log(myName.firstName);

// Object.defineProperty(myName, 'lastName', {
//   value: 'JuRyeon'
// });

// console.log(myName.lastName);

// console.log(Object.getOwnPropertyDescriptor(myName, 'lastName'));
// console.log(Object.getOwnPropertyDescriptor(myName, 'firstName'));


// const person = {};

// Object.defineProperties(person, {
//   firstName: {
//     value: 'Han',
//     writable: true,
//     enumerable: true,
//     configurable: true,
//   },
//   lastName: {
//     value: 'Juryeon',
//     writable: true,
//     enumerable: true,
//     configurable: true,
//   },

//   fullName: {
//     get() {
//       return `${this.firstName} ${this.lastName}`;
//     },

//     set(n) {
//       [this.firstName, this.lastName] = n.split(' ');
//     },
//     enumerable: true,
//     configurable: true,
//   },
// });

// console.log(person);

// person.fullName = 'Kang SuYoun';
// console.log(person);

// 객체 확장 금지

// const a = { name: 'han' };

// console.log(Object.isExtensible(a)); // true: 확장 허용, flase: 확장 금지

// // 확장금지하기
// Object.preventExtensions(a); // 확장 금지 옵션으로 변경

// console.log(Object.isExtensible(a));

// // 확장 금지된 객체는 프로퍼티 추가가 불가능하다.

// a.age = 25; // 무시하거나 에러를 발생
// console.log(a); // { name: han }

// // 확장금지된 객체는 추가가 불가능 하지만 삭제는 가능하다.
// delete a.name;
// console.log(a); // {}

// // 프로퍼티 정의에 의한 프로퍼티 추가도 금지된다.
// Object.defineProperty(a, 'name', {
//   value: 'han',
//   writable: true,
//   enumerable: true,
//   configurable: true,
// });

// console.log(a); // Error; TypeError: Cannot define property name, object is not extensible


// 객체 밀봉
// const b = { name: 'juren' };

// console.log(Object.isSealed(b)); // true: 밀봉됨, false: 밀봉안됨

// Object.seal(b);

// console.log(Object.isSealed(b)); // true

// // 밀본된 객체는 프로퍼티 어트리뷰트의 재정의가 불가능하므로 configurable의 값이 false이다.

// console.log(Object.getOwnPropertyDescriptors(b));
// /* {
//   name: {
//     value: 'juren',
//     writable: true,
//     enumerable: true,
//     configurable: false
//   }
// } */

// // 프로퍼티의 추가가 금지된다.
// b.age = 34;
// console.log(b); // { name: juren }

// // 프로퍼티의 삭제가 금지된다.
// delete b.name;
// console.log(b); // { name: juren }

// // 프로퍼티의 값 변경은 가능하다.
// b.name = 'kim';
// console.log(b); // { name: kim }

// // 프로퍼티 어트리뷰트의 재정의가 불가능하다.
// Object.defineProperty(b, 'name', { configurable: true }); // Error: Cannot redefine property: name

const a = { name: 'hanjuren' };

console.log(Object.isFrozen(a)); // false

Object.freeze(a); 

console.log(Object.isFrozen(a)); // true

// 동결된 객체는 writeble, configurable가 false이다.

console.log(Object.getOwnPropertyDescriptors(a));
/*
{
  name: {
    value: 'hanjuren',
    writable: false,
    enumerable: true,
    configurable: false
  }
}
*/