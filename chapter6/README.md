## 데이터 타입
데이터 타입은 값의 종류를 말한다. 자바스크립트의 모든 값은 데이터 타입을 갖는다.

자바스크립트에서는 데이터 타입으로 7가지를 제공한다.

- 원시 타입
	- 숫자 타입 : 숫자, 정수와 실수 구분없이 하나의 숫자 타입만 존재
	- 문자열타입 : 문자열
	- 불리언타입 : 논리타입 true or false
	- undefined : var 키워드로 선언된 변수에 암묵적으로 할당되는 값
	- null : 값이 없다는 것을 명시하기 위해 사용하는 값
	- 심벌 타입 : ES6 에서 추가된 7번째 타입

- 객체 타입
	- 객체, 함수, 배열 등

### 숫자 타입
자바스크립트에서는 하나의 숫자형 타입만 존재한다.

자바스크립트에서는 모든 수를 실수로 처리하며 정수만 표현하기위한 데이터 타입은 존재하지 않는다.

```js
var integer = 10; // 정수
var double = 10.12 // 실수
var negative = -20 // 음의 정수
```
위의 값은 모두 숫자 타입이다.

이러한 특징으로 인해 자바스크립트에서 숫자형은 표기하는 방식만 다를뿐 모두 같은 값을 가질 수 있다는 것을 의미한다.

### 문자열 타입
문자열 타입은 텍스트 데이터를  나타내는  데 사용한다. 문자열은 0개 이상의 16비트 유니코드 문자의 집합으로 대부분의 문자 표현이 가능하다.

문자열은 작은따옴표, 큰따옴표 또는 백틱으로 텍스트를 감싼다. 자바스크립트에서 가장 일반적인 표기법은 작은따옴표를 사용하는 것이다.

```js
var string = 'String';
```

### 템플릿 리터럴

템플릿 리터럴은 멀티라인 문자열, 표현식 삽입, 태그드 템플릿 등 편리한 문자열 처리 기능을 제공한다.

#### 멀티라인 문자열

일반 문자열 내에서는 줄바꿈이 혀용되지 않는다. 일반 문자열 내에서 줄바꿈을 하려면 \ 로 시작하는 이스케이프 시퀸스를 따라야한다.

|이스케이스 시퀀스|의미|
|:---|:---|
|\0|Null|
|\b|백스페이스|
|\f|폼피드, 프린터로 출력할경우 다음 페이지의 시작 지점으로 이동한다.|
|\n|개행, 다음 행으로 이동|
|\r|개행, 커서를 처음으로 이동|
|\t|탭(수평)|
|\v|탭(수직)|
|\uXXXX|유니코드|
|\'|작은따옴표|
|\"|큰따옴표|
|\\|백슬래쉬|

```js
var templete = '<ul>\n\t<li><a href="#">Home<\a></li>\n</ul>';

console.log(templete);
```
> result

```html
<ul>
	<li><a href="#">Home</a></li>
</ul>
```

### 표현식 삽입
문자열은 + 기호를 사용해 연결할 수 있다. + 기호는 피연산자 중 하나 이상이 문자열일 때 문자연결 연산자로 통한다.

```js
var first = 'Han';
var last = 'Ju Ryeon';

console.log('My Name is '+ first + ' ' + last);
// My Name is Han Ju Ryeon
```

+ 기호를 사용하여 문자열을 연결 할 수 있으며 템플릿 리터럴 내에서 표현식을 삽입하는 방식도 있다.


```js
var first = 'Han';
var last = 'Ju Ryeon;

console.log(`My Name is ${first} ${lase}`);
// My Name is Han Ju Ryeon
```
표현식을 삽입하기 위해서 ${}로 감싸면 된다.

### 불리언 타입

불리언 타입의 값은 논리적 참, 거짓을 나타내는 true, false만 존재한다.

```js
var foo = true;
console.log(foo); // true

foo = false;
console.log(foo); // false
```

### undefined 타입

undefined 타입의 값은 undefined가 유일하다.

var 키워드로 선언한 변수는 암묵적으로 undefined로 초기화가 된다. 이러한 이유로 값이 할당되지 않은 변수를 참조시 undefined가 출력된다.

```js
var foo;
console.log(foo); // undefined
```

undefined는 개발자가 의도적으로 할당하기 위한 값이 아니라 자바스크립트 엔진이 변수에 할당하는 것이므로 개발자가 직접 할당하는 것은 undefined의 취지에 어긋나며 혼란을 줄 수 있게되므로 권장하지 않는다.

### null 타입

null 타입의 값은 null이 유일하다. 자바스크립트는 대소문자를 구분하므로 null, Null NULL은 모두 다르다.  
null은 변수에 값이 없다는 것을 의도적으로 명시 할 때 사용한다.

```js
var foo = 'Lee';

foo = null;
// 이전 참조를 제거
// foo 변수는 더이상 Lee 를 참조하지 않는다.
```

### 심벌 타입

심벌은 ES6에서 추가된 타입으로 변경이 불가능한 원시적인 타입이다. 다른 값과 중복 되지 않는 유일한 값이기 때문에 주로 충돌 가능성이 없는 유일한 프로퍼티 키 값을 만들 때 주로 사용하게 된다.

Symbol 함수를 호출하여 생성한다. 이때 생성된 값은 외부에 노출되지 않으며 다른 값과 중복되지 않는 값이다.

```js
var key = Symbol('key');
console.log(type of key); // symbol
```

---

## 데이터 타입의 필요성

값은 메모리에 저장하고 참조 할 수 있어야 한다. 메모리에 값을 저장하기 위해서는 먼저 메모리의 공간을 확보하고 크기를 결정해야한다.

**score**라는 변수에 100이라는 값을 할당하기 위해서 자바스크립트 엔진은 데이터 타입에 따라 메모리의 크기를 결정하고 공간을 확보한 후 값을 저장해준다. 

이렇게 값이 저장된 메모리의 값을 참조하는 경우는 식별자 score를 통해 값 100이 저장되있는 메모리의 공간을 찾아야한다. 이때 값을 참조하기 위해서는 읽어 들여야하는 메모리의 크기를 알아야 한다.  
이때 자바스크립트가 변수에는 숫자 타입의 값이 할당되어있는 것을 보고 타입에 맞는 단위로 메모리에 저장된 값을 읽어들인다.  

이렇게 읽어온 2진수의 데이터를 해석하는 과정에서는 데이터의 타입을 자바스크립트가 알고 있으므로 해당 타입의 값으로 해석을 하게 된다.

이러한 이유로 데이터 타입의 중요성에 대해 정리하자면 다음과 같다.
* 값을 저장할 때 확보해야 하는 메모리의 크기를 결정하기 위해
* 값을 참조할 때 한번에 읽어 들여야 할 메모리의 크기를 결정하기 위해
* 메모리에서 읽어 들인 2진수를 어떻게 해석할지 결정하기 위해

## 동적타이핑

C나 자바 같은 정적타입 언어는 변수를 생성할 때 변수에 할당할 수 있는 값의 종류 즉 데이터 타입을 사전에 선언해야 한다. 이를 **명시적 타입 선언** 이라고 한다. 

정적 타입 언어에서는 변수의 타입을 변경 할 수 없으머 변수에 선언한 타입에 맞는 값만 할당이 가능하다. 컴파일 시점에서 타입 체크를 수행한다. 이때 통과를 하지 못하면 에러가 발생하고 프로그램이 실행 되지 않는다. 이를 통해 타입의 일관성을 강제함으로써 안정적인 코드의 구현으로 실행시 일어나는 에러를 줄일 수 있다.

하지만 자바스크립트는 변수를 선언할때 타입을 명시하지 않는다. 이로 인해 어떠한 값도 변수에 할당이 가능하다. 이러한 특징으로 인해 정적 타입 언어에서의 데이터 타입과 개념이 조금 다르다.  
자바스크립트는 값을 할당하는 시점에 변수의 데이터 타입을 동적으로 결정한다. 또한 이 값을 언제든 변경이 가능하다.

즉 자바스크립트에서 변수는 선언이 아닌 할당에 의해 타입이 결정되고 재할당에 의해 변수의 타입은 변경이 언제든지 가능하다고 볼 수 있다. 이러한 특징을 통적 타이핑이라 한다.

### 동적 타입 언어와 변수
동적 타입 언어에서는 변수에 어떤 데이터 값도 자유롭게 할당이 가능하다. 이는 너무나도 편하고 좋은 기능이다. 하지만 떄로는 위험도 있는 것이 동적 타이핑의 단점이다.  
모든 소프트웨어 아키텍쳐에는 **트레이드오프**가 존재한다. 이러한 문제를 해결할 명확한 해결책은 없듯이 동적 타입 언어 구조 또한 구조적인 단점이 존재한다.

> *트레이드 오프* 두개의 정책이나 목표 중 하나를 달성하려할 때 다른 목표의 달성이 늦어지거나 손실이 생기는 모순적인 상황을 의미한다.

동적 타이핑의 구조적 단점으로는 변수값이 언제든지 변경될 수 있기 때문에 복잡한 프로그램에서 변하는 값을 추적하기 어렵다는 단점 그리고 변수의 타입이 고정되어 있지 않고  
동적으로 변하는 언어의 변수는 값의 변경만으로 타입이 변할 수 있다는 단점이 있다. 즉 동적 타입 언어의 변수는 값을 확인하기 전까지 값의 타입을 확신 할 수 없다.  
또한 자바스크립트는 개발자의 의도와 상관없이 타입이 엔진에 의해 변하는 상황이 생기기도 한다. 이러한 문제들로 인해 동적 타이핑은 유연성이 높다는 장점을 가지고 신뢰성이 떨어진다는 단점이 존재한다.  

이때문에 자바스크립트에서 변수를 사용할 때는 다음과 같은 주의 사항이 필요하다.

* 변수는 꼭 필요한 경우에 한해 제한적으로 사용한다. 값은 언제든지 변경이 가능하므로 오류의 발생 가능성이 존재하며 변수의 개수가 많을수록 오류가 발생하게될 확률이 높아진다. 따라서 무분별한 변수의 사용은 자제하며 필요한 경우에 한해 제한적으로 사용한다.
* 변수의 유효범위를 최대한 좁게 만들어 부작용을 억제한다. 
* 전역변수는 최대한 사용하지 않는다. 어디서든 참조가 가능한 변수는 언제든지 의도하지 않은 대로 값이 변경될 가능성이 크고 다른 코드의 영향을 줄 가능성이 있다.
* 변수보다는 상수를 사용하여 값을 억제한다.
* 변수 이름은 변수의 목적이나 의미를 파악하도록 네이밍을 한다.