var circle = {
  radius: 5, // 프로퍼티

  // 원의 지름을 구하는 함수
  getDiameter: function () { // 메서드
    return 2 * this.radius; // this는 circle을 가르킨다.
  },
};

console.log(circle.getDiameter()); // 10\\\


const obj = {
  name: 'Lee',
  sayHi() {
    console.log(`Hi ${this.name}`);
  },
};

obj.sayHi(); // Hi Lee