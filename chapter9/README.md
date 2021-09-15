## 타입 변환과 단축 평가
### 타입 변환이란
자바스크립트의 모든 값은 타입이 존재한다. 값의 타입을 개발자가 의도적으로 변환하는 것을 명시적 타입 변환, 타입 캐스팅이라 한다.

```js
var x = 10;

// 명시적 타입변환 - 숫자를 문자열로 
var str = x.toString();
console.log(type of str, str); // string, 10
```

개발자의 의도와 상관없이 표현식을 평가하는 도중 자바스크립트 엔진에 의해 암묵적으로 타입이 자동 변환되는 상황이 생긴다. 이를 암묵적 타입 변환, 타입 강제 변환이라 한다.

```js
var x = 10;

// 암묵적 타입 변환
// 문자열 연결 연산자는 숫자 타입 x를 바탕으로 새로운 문자열을 생성한다.
var str = x + '';
console.log(type of str, str); // string, 10
```

명시적 타입 변환, 암묵적 타입 변환은 기존 원시 값을 변경하는 것이 아닌 기존 원시 값을 기준으로 다른 타입의 새로운 값을 생성하는 것이다.

### 암묵적 타입 변환
자바스크립트 엔진이 표현식을 평가시 개발자의 의도와 상관없이 코드의 문맥을 고려하여 암묵적으로 타입을 강제 변환하는 것.

```js
'10' + 2 // 102

5 * '10' // 510
```
이처럼 표현식을 평가할 때 코드의 문맥에 부합하지 않는 상황이 발생할 수 있다. 이때 에러를 발생시키기도 하지만 자바스크립트가 가급적 암묵적 변환을 통해 표현식을 평가한다.

### 명시적 타입 변환
개발자의 의도에 따라 명시적으로 값의 타입을 변경하는것.

문자열 타입으로 변경시 String 생성자 함수를 이용, Object.prototype.toString 메서드를 이용, 문자열 연결 연산자를 이용하는 방법들이 있다.

숫자 타입으로 변경시 Number 생성자 함수를 이용, parseInt.parseFloat 함수를 사용하는 방법, + 단항 산술 연산자를 사용하는 방법, * 산술 연산자를 이용하는 방법

불리언 타입으로 변경시 Boolean 생성자 함수를 이용하는 방법 ! 부정 논리 연산자를 두번 사용하는 방법이 있다.

### 단축 평가
```js
'Cat' && 'Dog' // "Dog"
```
논리곱 연산자는 두개의 피연산자가 모두 true일때 true를 반환해준다. 평가 순서에 따라 좌항의 값인 Cat은 true로 평가된다. 하지만 두번째 피연산자가 논리곱의 평과 결과를 반환하기 때문에 해당 식은 두번째 피연산자인 Dog를 그대로 반환한다

논리합 연산자또한 논리곱 연산자와 동일하게 작동하지만 하나의 피연산자만 true이면 true를 반환하기때문에 위의 식에서는 Cat이 이미 true로 평과 되었기때문에 두번재 피연산자를 평가하지 않고 그래도 첫 번째 피연산자를 반환할 것이다.

이처럼 논리 연산의 결과를 결정하게되는 피연산자의 타입을 변환하지 않고 그대로 반환하는 것을 단축 평가라고 한다. 단축 평가는 표현식을 평가하는 도중 평가 결과가 확정되었을때 나머지 평과 과정을 생략하는 것을 의미하고 있다.

```js
'cat' || 'dog' // dog
false || 'dog' // dog
'cat' || false // cat

'cat' && 'dog' // dog
false && 'dog' // false
'cat' && 'false' // false
```
이러한 단출평가는 if문을 대체할 수 있다. 어떤 조건이 참으로 평과되는 값 일때 무언가를 해야한다면 논리곱(&&) 연산자로 대체를 할 수 있다.

```js
var done = true;
var message = '';

// 주어진 조건이 true라면
if (done) message = '완료';

// 단축 평가로 대체
message = done && '완료'

console.log(message); // "완료"
```

조건이 false 값일때 무언가를 해야한다면 논리합(||) 연산자로 대체가 가능하다.

```js
var done = false;
var message = '';

if (!done) message = '미완료';

message = done || '미완료';

console.log(message); // "미완료"
```

#### 객체를 가리키기를 기대하는 변수가 null or undefined가 아닌지 확인하고 프로퍼티 참조할때
객체는 key와 value로 구성된 프로퍼티의 집합이다. 만약 객체를 가리키기를 기대하는 변수의 값이 객체가 아닌 null 또는 nudefined일 경우 타입 에러가 발생하게 된다.

이때 단축 평가를 사용하게 되면 에러가 발생되지 않게 된다.

```js
var elem = null;
// elem이 null이나 undefined와 같은 falsy 값이면 elem으로 평가되고 truthy값이면 elem.value값으로 평가된다.
var value = elem && elem.value; // null
```

### 옵셔널 체이닝 연산자
옵셔널 체이닝 연산자란 ?. 좌항의 피연산자가 null 또는 undefined일 경우 undefined를 반환하고 아니라면 우항의 프로퍼티 참조를 이어가는 방식이다.

```js
var elem = null;
var value = elem?.value;
console.log(value); // undefined
```

### null 병합 연산자
null병합 연산자는 좌항의 피연산자가 null, undefined일 경우 우항의 피연산자를 반환하고 그렇지 않을 경우 좌항의 피연산자를 반환한다. 이는 변수의 기본값을 설정할 때 유용하다.

```js
var foo = null ?? 'dafault value';
console.log(foo); // "defalut value"

var foo = 'left value' ?? 'dafault value';
console.log(foo); // "left value"
```
