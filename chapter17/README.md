## 생성자 함수에 대한 객체 생성

생성자 함수를 사용하여 객체를 생성 방식에는 Object 생성자 함수를 사용하는 방법이 있다.

### Object 생성자 함수를 사용하는 방법
> new 연산자와 함께 Object 생성자 함수를 호출하여 빈 객체를 생성한다.
> 이때 객체를 생성하고 프로퍼티나 메서드를 추가하여 객체를 완성시키면 된다.

```js
const person = new Object();

// new Object 함수를 호출하면 빈객체가 생성된다.
console.log(person); // {}

// 빈객체에 프로퍼티를 추가한다.
person.name = 'hanjuren';
person.getName = function () {
  console.log(`Hello My Name is ${this.name}`);
};

console.log(person); // { name: 'hanjuren', getName: f }
console.log(person.getName()); // Hello My Name is hanjuren
```

**생성자 함수에 의해 생성된 객체를 인스턴스라고 부른다.**  

생성자 함수의 종류는 다음과 같다.
1. String
2. Number
3. Boolean
4. Function
5. Array
6. Date
7. RegExp
8. Promise

생성자 함수를 호출하여 객체를 생성하는 것은 객체 리터럴을 사용하여 생성하는 것보다는 비효율적이므로 필요한 상황이 아니라면 바람직 한 생성방식은 아니다.

---

### 생성자 함수
생성자 함수를 사용한 객체 생성 방식의 장점

1. 동일한 구조를 가진 객체를 여러개 생성할떄 효율 적이다.

예를 들어 원의 반지름을 가진 객체를 두개 이상 생성해야 할 때 원하는 만큼 객체 리터럴을 사용하여 하나하나 생성을 해주어야 한다.
```js
const circle1 = {
  radius: 5,
  getDiameter() {
    return 2 * this.radius;
  },
};

const circle2 = {
  radius: 10,
  getDiameter() {
    return 2 * this.radius;
  },
}
```
두 객체의 반지름은 5와 10으로 각각 다른 값을 가지지만 지름을 반환하는 메서드는 동일한 내용을 포함한다.  
동일한 메서드나 구조를 가진 객체를 다수 생성할 때 생성자 함수를 통해 객체를 생성하는 것은 효율적인 방식으로 작동하게 된다.

```js
// 동일한 구조를 가진 객체를 생성자 함수로 여러개 생성하기

function Circle(radius) {
  this.radius = radius;
  this.getDiameter = function() {
    return 2 * this.radius;
  };
};

const circle1 = new Circle(5); // 반지름이 5인 객체를 생성
const circle2 = new Circle(10); // 반지름이 10인 객체를 생성

console.log(circle1); // Circle { radius: 5, getDiameter: [Function (anonymous)] }
console.log(circle2); // Circle { radius: 10, getDiameter: [Function (anonymous)] }

console.log(circle1.getDiameter()); // 10
console.log(circle2.getDiameter()); // 10
```

---

### 내부 메서드 [[Call]], [[Construct]]

함수 객체는 일반 객체가 가지고 있는 내부슬롯, 내부 메서드를 모두 가지고 있기 때문에 일반 객체와 동일하게 작동이 가능하다.  
하지만 객체는 호출이 불가능 하고 함수는 호출이 가능하다. 그 이유는 함수는 함수로서 동작하기 위한 내부 슬롯과 내부 메서드를 가지고 있기 때문이다.

함수가 동작하기 위한 내부슬롯
1. [[Environment]]
2. [[FormalParameters]] ...

내부 메서드
1. [[Call]]
2. [[Construct]]

함수가 호출되어 동작하기 위해 [[Call]] 내부 메서드를 가진 함수를 **callable**이라 부르며 [[Construct]] 내부 메서드를 가진 함수를 **constructor** 없는 함수를 **non-constructor**이라고 부른다.

> constructor 함수 : 생성자 함수로서 호출이 가능한 함수
> non-constructor 함수 : 생성자 함수로서 호출이 불가능한 함수

constructor와 non-constructor을 구분하는 방식은 자바스크립트 엔진이 함수 정의를 평가하여 구분지어준다.
* constructor : 함수 선언문, 함수 표현식, 클래스
* non-constructor : 화살표 함수, 메서드(Es6 메서드 축약 표현)

> constructor
```js
function foo() {};
const joo = function() {};
const boo = {
  x: function() {},
};

console.log(new foo());
console.log(new joo());
console.log(new boo.x());
```

> non-constructor
```js
const aoo = () => {};
const noo = {
  x() {},
};

console.log(new aoo()); // Type Error
console.log(new noo.x()); // Type Error
```