## 객체 리터럴

자바스크립트는 객체기반 프로그래밍 언어이며 자바스크립트를 구성하는 거의 대부분이 원시값을 제외한 객체이다.

원시타입은 단 하나의 값을 나타내지만 객체 타입은 다양한 타입의 값을 하나의 단위로 가지고있는 복합적 자료구조이다.

> 원시 타입의 값은 변경이 불가능 하지만 객체 타입의 값 즉 객체는 변경이 가능한 값이다.

객체 : 0개이상의 프로퍼티로 구성된 집합이며 키와 값으로 구성된다.

```js
var person = {
  // key: value
  age: 25,
  name: 'han',
};
```

자바스크립트에서 사용할 수 있는 모든 값은 프로퍼티가 될 수 있다. 프로퍼티의 값이 함수일 경우 일반 함수와 구분하기 위해 메서드라고 부른다.

```js
var person = {
  age: 25, // 프로퍼티
  increase: function() { // 메서드
    this.age++;
  }
}
```
> 프로퍼티와 메서드의 역할
> * 프로퍼티 : 객체의 상태를 나타내는 값
> * 메서드 : 프로퍼티를 참조하고 조작할 수 있는 동작

✔ 객체와 함수
> 자바스크립트는 함수로 객체를 생성하기도 하고 함수 자체가 객체이기도 하다.

### 객체 리터럴에 의한 객체 생성
C, JAVA같은 클래스 기반 객체지향 언어는 클래스를 정의하고 new 연산자와 생성자를 호출하여 객체를 생성하는 방식이다. 자바스크립트에서는 프로토타입 기반 객체지향 언어로서 여러가지의 객체 생성 방식을 지원한다.
* 객체 리터럴
* Object생성자 함수
* 생성자 함수
* Object.create메서드
* 클래스

이 방법들중 가장 많이 사용하는 객체 리터럴 방법은 객체를 생성하기 위한 표기법중 하나이다.

#### 객체 생성해보기
```js
var person = {
  name = 'lee',
  sayHello: function() {
    console.log(`Hello My Name is ${this.name}`);
  }
};

console.log(typeof personn); // object
console.log(person); // { name: 'lee', sayHello: f }
```

### 프로퍼티
**객체는 프로퍼티의 집합이며 프로퍼티는 키와 값으로 구성된다.**
```js
var person = {
  // 프로퍼티 키는 name, 값은 'Lee'
  name: 'Lee',
  // 프로퍼티 키는 age, 값은 '20
  age: 20,
};
```

프로퍼티를 나열할 때는 쉼표로 구분한다. 일반적으로 마지막 프로퍼티에는 쉼표를 사용하지 않지만 해도 무방하다.

문자열 또는 문자열로 평가할 수 있는 표현식을 사용하여 프로퍼티 키를 동적으로 생성할 수 있다. 이때는 키로 사용할 표현식을 대괄호[]로 묶어줘야 한다.

```js
var obj = {};
var key = 'hello';

obj[key] = 'world';

console.log(obj); // { hello: 'world' }
```
> 프로퍼티 키 네이밍
> * 빈문자열로 생성해도 에러는 발생하지 않는다 하지만 키로서의 의미를 갖지 못한다.
> * 문자열이나 심벌값 외의 값을 사용하면 암묵적 타입 변환으로 문자열이 된다.
> * 예약어를 사용해도 에러는 발생하지 않느다 하지만 예상치 못한 에러가 발생할 수 있다.
> * 중복선언시 나중에 선언한 프로퍼티가 기존의 값을 덮어씌운다.

### 메서드
자바스크립트에서 함수는 일급 객체이다. 즉 함수는 값으로 취급이 되기때문에 프로퍼티 값으로 사용할 수 있다.  
프로퍼티 값이 함수일 경우 일반 함수와 구분하기 위해 메서드라 부른다. 

```js
var circle = {
  radius: 5, // 프로퍼티

  // 원의 지름을 구하는 함수
  getDiameter: function () { // 메서드
    return 2 * this.radius; // this는 circle을 가르킨다.
  },
};

console.log(circle.getDiameter()); // 10
```

### 프로퍼티 접근
프로퍼티에 접근하는 방법은 다음과 같이 두 가지다.
1. 마침표 프로퍼티 접근 연산자를 사용하는 법
2. 대괄호 프로퍼티 접근 연산자를 사용하는 법

프로퍼티 키가 식별자 네이밍 규칙을 준수하는 이름이라면 두가지 방법을 모두 사용할 수 있다.
#### 프로퍼티 접근해보기
```js
var person = {
  name: 'Han',
  age: 25,
};

console.log(person.name); // Han

console.log(person.age); // 25
```
이때 대괄호 표기법으로 프로퍼티에 접근시 접근 연산자 내부에 지정하는 프로퍼티 키는 반드시 따옴표로 감싸줘야 한다.

### 프로퍼티 값 갱신
이미 존재하는 프로퍼티 값에 새로운 값을 할당하면 값이 갱신된다.

```js
var person = {
  name: 'lee',
};

person.name = 'han';

console.log(person); // { name: 'han' }
```

### 프로퍼티 동적 생성
존재한지 않는 프로퍼티에 값을 할당하면 프로퍼티가 동적으로 생성되어 추가되고 프로퍼티 값이 할당 된다.

```js
var person = {
  name: 'Lee',
};

person.age = 20;

v
```

### 프로퍼티 삭제
delete 연산자는 객체의 프로퍼티를 삭제한다. 이때 delete 연산자의 피연산자가 프로퍼티에 접근이 가능한 표현식이여야 한다.

```js
var person = {
  name: 'Lee',
};

person.age = 20;
console.log(person); // { name: 'Lee', age: 20 }

delete person.age;

console.log(person); // { name: 'Lee' }
```

### ES6에서 추가된 객체 리터럴의 확장 기능
#### 프로퍼티 축약 표현

```js
// es5
var x = 1, y = 2;

var obj = {
  x: x,
  y: y,
};

console.log(obj); // { x: 1, y: 2 }
```

ES6에서는 프로퍼티 키와 값으로 변수를 사용할때 둘의 이름이 동일하다면 키를 생략할 수 있다.

```js
let x = 1, y = 2;

const obj = { x, y };

console.log(obj); // { x: 1, y: 2 }
```
#### 계산된 프로퍼티 이름
문자열 또는 문자열로 타입 변활할 수 있는 값으로 평가되는 표현식을 사용해 키를 동적으로 생성하기 위해서는 대괄호 표현식으로 묶어줘야 한다. 이를 계산된 프로퍼티 이름이라고 한다.

ES5에서는 계산된 프로퍼티 이름으로 키를 생성하려면 객체 리터럴 외부에서 대괄호 표기번을 사용해야 했다.

```js
var pre = 'prop';
var i = 0;

var obj = {};

obj[pre = '-' + ++i] = i;
obj[pre = '-' + ++i] = i;
obj[pre = '-' + ++i] = i;

console.log(obj); // { prop-1: 1, prop-2: 2, prop-3: 3 }
```

ES6에서는 객체 리터럴 내부에서도 계산된 프로퍼티 이름으로 프로퍼티 키를 동적 생성할 수 있다.


```js
const pre = 'prop';
let i = 0;

const obj = {
  [`${prop}-${++i}`]: i,
  [`${prop}-${++i}`]: i,
  [`${prop}-${++i}`]: i,
};

console.log(obj); // { prop-1: 1, prop-2: 2, prop-3: 3 }
```

### 메서드 축약 표현
ES5에서 메서드를 정의하기 위해서는 프로퍼티 값으로 함수를 할당한다.

```js
var  obj = {
  name: 'Lee',
  sayHi: function () {
    console.log('Hi ' + this.name);
  },
};

obj.sayHi(); // Hi Lee
```

ES6에서 메서드를 정의할 때 function 키워드를 생략하는 축약 표현이 가능하다.

```js
const obj = {
  name: 'Lee',
  sayHi() {
    console.log(`Hi ${this.name}`);
  },
};

obj.sayHi(); // Hi Lee
```

