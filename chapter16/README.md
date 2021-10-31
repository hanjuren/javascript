## 프로퍼티와 어트리뷰트

### 내부 슬롯, 내부 메서드

* 자바스크립트 엔진의 구현 알고리즘을 설명하기 위해 ECMAScript사양에서 사용하는 의사 프로퍼티, 의사 메서드이다.
* ECMAScript사양에서 등장하는 이중 대괄호 [[...]] 로 감싼 이름이 내부 슬롯과 내부 메서드다.
* 자바스크립트의 내부 동작을 설명하기 위해 정의해 놓은 가상의 메서드라고 이해하면 될 듯 하다.

내부 슬롯과 내부 메서드는 ECMAScript 사양에 정의된 대로 구현되어 동작하지만 직접 접근이 가능한 객체의 프로퍼티는 아니다. 즉 직접 접근하거나 호출이 불가능한데 일부 내부 슬롯과 내부 메서드에 한하여 간접적 접근 방법인 \_\_proto\_\_를 제공한다.

### 프로퍼티 어트리뷰트와 프로퍼티 디스크립터 객체
**자바스크립트 엔진은 프로퍼티를 생성할 때 프로퍼티의 상태를 나타내는 프로퍼티 어트리뷰트를 기본값으로 자동 정의한다.**

프로퍼티의 상태는 다음과 같다.
* 프로퍼티의 값
* 값의 갱신 가능 여부
* 열거 가능 여부
* 재정의 가능 여부

프로퍼티 어트리뷰트는 자바스크립트 엔진이 관리하는 내부 상태 값인 내부 슬롯이다.
> 내부슬롯의 종류
> * [[Value]]
> * [[Writable]]
> * [[Enumerable]]
> * [[Configurable]]

프로퍼티 어트리뷰트에 직접 접근은 불가능 하지만 간접적으로 접근하여 확인하려면 **Object.getOnePropertyDescriptor**메서드를 통해 확인할 수 있다.

```js
const person = {
  name: 'Han Juryeon',
};

console.log(Object.getOwnPropertyDescriptor(person, 'name'));

/* {
  value: 'Han Juryeon',
  writable: true,
  enumerable: true,
  configurable: true
} */
```

### 데이터 프로퍼티와 접근자 프로퍼티

1. 데이터 프로퍼티
   키와 값으로 구성된 일반적인 프로퍼티.

데이터 프로퍼티는 자바스크립트 엔진이 프로퍼티를 생성할 때 기본값으로 자동 정의된다. 이때 다음과 같은 프로퍼티 어트리뷰트가 생성된다.

|프로퍼티 어트리뷰트|프로퍼티 디스크립터 (객체의 프로퍼티)|설명|
|:---:|---|---|
|[[Value]]|value|1. 프로퍼티 키를 통해 프로퍼티 값에 접근하면 반환되는 값이다. </br> 2. 프로퍼티 키를 통해 프로퍼티 값을 변경하면 [[Value]]값을 재할당한다. 만약 값이 없다면 동적생성 후 값을 저장한다.|
|[[Writable]]|writable|1. 프로퍼티 값의 변경 가능 여부를 나타내며 불리언 값을 갖는다. </br> 2. 값이 false인 경우 해당 프로퍼티의 값을 변경할 수 없는 읽기 전용 프로퍼티가 된다.|
|[[Enumerable]]|enumerable|1. 프로퍼티 열거 가능 여부 옵션으로 불리언 값을 갖는다.|
|[[Configurable]]|configurable|1. 프로퍼티 재정의 가능 여부 옵션|

2. 접급자 프로퍼티

접근자 프로퍼티란 자체적인 값을 가지지 않고 다른 데이터 프로퍼티의 값을 읽거나 저장할 때 관여하는 프로퍼티이다.

접근자 함수는 getter/setter 함수로 부르며 접근자 프로퍼티는 두가지 모두 함수로 구현해도 되며 하나만 해도 된다.

객체를 생성하고 데이터 프로퍼티를 생성해보자.

```js
const person = {
  // 데이터 프로퍼티
  firstName: 'Han',
  lastName: 'JuRyeon',

  // 접근자 프로퍼티 
  // getter 함수 
  get fullName () {
    return `${this.firstName} ${this.lastName}`;
  },

  set fullName (name) {
    [this.firstName, this.lastName] = name.split(' ');
  }
};

// setter 함수 호출 전 값 확인
console.log(person);

// setter 함수 호출 후 값 확인
// 접근자 함수를 통해 값을 저장하면 setter함수가 호출됨
person.fullName = 'Hong GilDong';
console.log(person);

// 접근자 함수를 통해 값을 접근하면 getter함수가 호출된다.
console.log(person.fullName);
```
person 객체의 firstName, lastName는 일반 데이터 프로퍼티이다. 메서드 앞에 get, set이 붙은 메서드는 getter, setter함수이며 접근자 프로퍼티이다. fullName이라는 이름으로 접근이 가능하며
이렇게 생성한 접근자 프로퍼티는 값을 읽어올때 또는 저장할 때 실행되는 메서드이다.

위의 코드를 실행결과는 아래와 같다.
```shell
juren@DESKTOP-EK6U2J6 MINGW64 ~/Desktop/javascript/chapter16 (main)
$ node app.js 
{ firstName: 'Han', lastName: 'JuRyeon', fullName: [Getter/Setter] }
{ firstName: 'Hong', lastName: 'GilDong', fullName: [Getter/Setter] }
Hong GilDong
```

이러한 과정을 내부 슬롯/ 메서드 관점에서 설명하면 다음과 같다.
1. 접근자 프로퍼티인 fullName으로 프로퍼티 값에 접근시 내부적으로 [[GET]]메서드가 호출된다.
2. 이 후 프로퍼티 키가 유효한지 확인한다. 이때 키는 문자열 또는 심벌 타입이여야 한다.
3. 프로토 타입 체인에서 프로퍼티를 검색한다.
4. 검색된 fullName 프로퍼티가 데이터 프로퍼티인지 접근자 프로퍼티 인지 확인 후 접근자 프로퍼티임을 인식한다.
5. 접근자 프로퍼티의 getter함수를 호출하여 결과를 반환한다.

> 프로토 타입이란
>> 프로토 타입은 어떠한 객체의 부모 객체 역할을 하는 객체이다. 프로토 타입은 자식 객체에게 자신의 프로퍼티와 메서드들을 상속해주며 자식 객체는 부모 객체의 프로퍼티와 메서드를 자유롭게 사용이 가능하다.

>> 프로토 타입 체인은 프로토 타입의 방향이 단방향 링크드 리스트 형태로 연결되어 있는 것을 말한다. 이는 객체의 프로퍼티나 메서드에 접근 시 해당 객체에 접근하려는 프로퍼티 또는 메서드가 없다면 체인을 따라서 차례대로 검색하는 과정이다.

### 프로퍼티 정의
프로퍼티 정의란? 새로운 프로퍼티 추가시 어트리뷰트를 명시적으로 정의하거나 기존 프로퍼티의 어트리뷰트를 재정의 하는 것을 의미한다.

이때 사용하는 메서드로는 *Object.defineProperty*가 있다.
메서드 사용시 인수로는 객체의 참조와 프로퍼티 키인 문자열, 디스크립터 객체를 전달한다.

```js
const myName = {}

Object.defineProperty(myName, 'firstName', {
  value: 'Han',
  writable: true,
  enumerable: true,
  configurable: true,
});

console.log(myName.firstName);

Object.defineProperty(myName, 'lastName', {
  value: 'JuRyeon'
});

console.log(myName.lastName);
```
생성하고자 하는 프로퍼티의 키와 디스크립터 프로퍼티를 추가하여 생성하면 된다. *difineProperty*메서드는 하나의 프로퍼티만 생성이 가능하다. 한번에 생성하기 위해서는 *defineProperties*메서드를 사용하면 된다.

```js
const person = {};

Object.defineProperties(person, {
  firstName: {
    value: 'Han',
    writable: true,
    enumerable: true,
    configurable: true,
  },
  lastName: {
    value: 'Juryeon',
    writable: true,
    enumerable: true,
    configurable: true,
  },

  fullName: {
    get() {
      return `${this.firstName} ${this.lastName}`;
    },

    set(n) {
      [this.firstName, this.lastName] = n.split(' ');
    },
    enumerable: true,
    configurable: true,
  },
});
```

### 객체 변경 방지
객체는 변경 가능 한 값이다. 이는 프로퍼티의 추가, 삭제, 수정이 언제든 허용된다는 의미이다. 이러한 객체의 변경 제한을 하기 위해 자바스크립트에서는 다양한 메서드들을 지원한다.

객체 변경 방지 메서드 종류
|구분|메서드|프로퍼티 추가|프로퍼티 삭제|프로퍼티 값 읽기|프로퍼티 값 쓰기|프로퍼티 어트리뷰트 재정의|
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
|객체 확장 금지|Object.preventExtensions|X|O|O|O|O|
|객체 밀봉|Object.seal|X|X|O|O|X|
|객체 동결|Object.freeze|X|X|O|X|X|

1. 객체 확장 금지  
Object.preventExtensions 메서드는 객체의 확장을 금지할 때 사용하는 메서드이다.  
객체 확장 금지란 프로퍼티 추가 금지를 의미하며 동적 추가, Object.defineProperty메서드를 통한 프로퍼티 추가가 금지된다.
```js
const a = { name: 'han' };

console.log(Object.isExtensible(a)); // true: 확장 허용, flase: 확장 금지

// 확장금지하기
Object.preventExtensions(a); // 확장 금지 옵션으로 변경

console.log(Object.isExtensible(a));

// 확장 금지된 객체는 프로퍼티 추가가 불가능하다.

a.age = 25; // 무시하거나 에러를 발생
console.log(a); // { name: han }

// 확장금지된 객체는 추가가 불가능 하지만 삭제는 가능하다.
delete a.name;
console.log(a); // {}

// 프로퍼티 정의에 의한 프로퍼티 추가도 금지된다.
Object.defineProperty(a, 'name', {
  value: 'han',
  writable: true,
  enumerable: true,
  configurable: true,
});

console.log(a); // Error; TypeError: Cannot define property name, object is not extensible
```

2. 객체 밀봉
객체 밀봉이란 프로퍼티 추가, 삭제, 프로퍼티 어트리뷰트 재정의를 금지한다. 밀봉된 객체는 읽기와 쓰기만 가능해진다.

```js
const b = { name: 'juren' };

console.log(Object.isSealed(b)); // true: 밀봉됨, false: 밀봉안됨

Object.seal(b);

console.log(Object.isSealed(b)); // true

// 밀본된 객체는 프로퍼티 어트리뷰트의 재정의가 불가능하므로 configurable의 값이 false이다.

console.log(Object.getOwnPropertyDescriptors(b));
/* {
  name: {
    value: 'juren',
    writable: true,
    enumerable: true,
    configurable: false
  }
} */

// 프로퍼티의 추가가 금지된다.
b.age = 34;
console.log(b); // { name: juren }

// 프로퍼티의 삭제가 금지된다.
delete b.name;
console.log(b); // { name: juren }

// 프로퍼티의 값 변경은 가능하다.
b.name = 'kim';
console.log(b); // { name: kim }

// 프로퍼티 어트리뷰트의 재정의가 불가능하다.
Object.defineProperty(b, 'name', { configurable: true }); // Error: Cannot redefine property: name
```

3. 객체 동결
객체 동결이란 읽기만 가능하며 프로퍼티의 추가, 삭제, 값 갱신, 어트리뷰트 재정의 모두 불가능한 상태가 된다.

```js
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
```