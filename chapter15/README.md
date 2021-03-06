## let, const 키워드와 블록레벨 스코프
ES5 까지 변수의 선언을 유일하게 할 수 있던 방법인 var키워드는 여러가지의 문제점들이 있다.
1. 변수의 중복선언
var 키워드로 선언한 변수는 중복 선언이 가능하다.  

2. 함수레벨 스코프
var키워드로 선언한 변수는 오직 함수의 코드블록만이 지역 스코프로 인정된다. 따라서 외부 함수에서 var키워드로 선언한 전역 변수는 코드블록 내에서 선언해도 전역변수가 된다.  

3. 변수 호이스팅
var 키워드로 선언한 변수는 호이스팅에 의해 가장 위로 끌어 올려지고 할당이전에도 참조가 가능하다.
```js
// 변수 호이스팅에 의해 이미 foo라는 변수는 선언이 되었다.
// 아직 변수에 값이 할당된 상태가 아니기 때문에 undefined가 반환된다.
console.log(foo); // undefined

// 변수 호이스팅에 의해 foo변수가 선언되었고 값을 선언하면 foo의 값은 123이 된다.
foo = 123;

// 값이 할당된 변수이기 때문에 변수의 값이 반환된다.
console.log(foo); // 123

// 런타임 이전에 foo 라는 변수가 선언이되고 undefined로 초기화 된다.
var foo;
```
선언문 이전에 참조하는 것이 변수 호이스팅에 의해 에러가 발생하지는 않지만 코드의 가독성을 해치며 오류를 발생시킬 여지가 생긴다.  

### let 키워드
let 키워드는 ES6에서 도입된 변수 선언 키워드이다.  
var키워드와의 차이점은 다음의 특징들이 있다.

1. 변수 중복 선언 금지
var키워드로 변수를 선언하면 같은 식별자이름의 변수를 중복 선언해도 에러가 발생하지 않는다. 하지만 let키워드는 같은 이름의 변수를 선언하면 문법 에러가 발생한다.

2. 블록 레벨 스코프
var키워드로 선언한 변수는 오직 함수 코드 블록만을 지역 스코프로 인정하는 함수 레벨 스코프 방식이였다. 하지만 let키워드는 모든 코드블록을 지역 스코프로 인정하는 블록 레벨 스코프를 따른다.

동일한 코드로 var키워드와 let키워드의 스코프 레벨 차이를 확인해보자

*var 키워드*
```js
var i = 10;

function foo () {
  var i = 100;

  for (var i = 0; i < 5; i++) {
    console.log(i); // 0, 1, 2, 3, 4
  }
  console.log(i); // 5
}
foo();
console.log(i); //10
```
*let 키워드*
```js
let i = 10; // 젼역 변수

function foo () {
  let i = 100; // 함수 레벨 스코프의 지역 변수

  for (let i = 0; i < 5; i++) { // 블록 레벨 스코프의 지역변수
    console.log(i); // 0, 1, 2, 3, 4
  }
  console.log(i); // 5 
}
foo();
console.log(i); // 10
```

3. 변수 호이스팅
let 키워드로 선언한 변수는 변수 호이스팅이 발생하지 않는 것처럼 동작한다.

```js
console.log(foo); // 참조에러
let foo;
```
let 키워드로 선언한 변수는 선언문 이전에 참조하면 참조에러가 발생한다.  

var 키워드는 런타임 이전 자바스크립트 엔진에 의해 변수가 선언되고 초기화 단게가 진행된다. 이때 undefined로 초기화가 되기 때문에 선언문 이전에도 참조가 가능하지만  
let 키워드로 선언한 변수는 선언단계와 초기화 단계가 분리되어 실행된다. var 키워드의 변수와 마찬가지로 런타임 이전에 변수가 선언은 되지만 초기화 단계는 선언문에 도달 했을때 진행 되므로 선언 이전에 변수를 참조하면 참조 에러가 발생하는 것이다.  

이러한 변수의 선언단계인 스코프 시작 단계와 초기화 단계 사이에서 변수를 참조 할 수 없는 것을 **일시적 사각지대**라고 부른다.  

![](https://ifh.cc/g/KorcRH.png, "일시적 사각지대")</br>

**그렇다면 let 키워드로 선언한 변수는 호이스팅이 발생하지 않을까?**  

결론은 *아니다.*

```js
let a = 1; // 전역변수

if (true) {
  console.log(a); // 참조 에러
  let a = 1243; // 지역 변수
}
```
변수 호이스팅이 일어나지 않는다면 if문 내에서 참조하는 a변수는 상위 스코프의 a라는 변수를 참조해야 한다.  
하지만 참조에러가 난다는 것은 지역 스코프내에 a라는 변수가 호이스팅에 의해 상위로 끌어 올려졌다는 것을 의미한다.  

ES6에서 도입된 let const를 포함 모든 선언은 호이스팅이 일어난다. 다만 let, const, class를 사용한 선언문은 호이스팅이 일어나지 않는 것 처럼 동작하게 되어있다.

### const 키워드

const 키워드는 상수를 선언하기 위해 사용하는 키워드이다.  

1. **const 키워드로 선언한 변수는 반드시 선언과 동시에 초기화가 진행되어야 한다.**
```js
const a = 1; // 👍

const b; // 👎
```
const 키워드로 선언한 변수는 let 키워드와 마찬가지로 블록 레벨 스코프를 가진다.

2. 재할당이 금지된다.
const 키워드로 선언한 변수는 재할당이 금지된다.

3. 상수?
상수란 재할당이 금지된 변수를 의미한다.   
변수는 값의 재할당과 변경이 자유로운 반면 상수는 재할당이 불가능한 변수이다.

**상수는 상태 유지와 가독성 측면, 유지보수를 위해 적극적인 사용이 좋다.**

4. const 키워드와 객체
const 키워드로 선언한 변수에 객체를 할당시 객체의 프로퍼티 값은 변경이 가능하다.

**이는 const 키워드가 재할당을 금지하는 것뿐 값의 불변성을 의미하지는 않는다는 것이다.**

### var vs let, const?
변수 선언에는 기본적으로 const 키워드를 사용하고 재할당이 필요한 값에 let키워드를 사용한다.  

일단 변수를 선언하고 값이 변경되어야 한다면 let 키워드로 바꿔도 무방하다. 일단 const 키워드를 사용해 변수를 선언하자.