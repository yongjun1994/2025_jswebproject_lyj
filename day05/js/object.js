// 10번 : 객체

const person = {
  // 속성(properties)
  name: "홍길동",
  age: 25,
  isStudent: false,
  // 메소드(method)
  greet: function () {
    // console.log(`안녕하세요, 제 이름은 ${this.name}입니다`);
    return `안녕하세요, 제 이름은 ${this.name}입니다`;
  },
};

console.log(person.name);
console.log(person.greet());
