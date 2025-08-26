// 9번: 연산자
// 2) 논리연산자

// 논리합 or (||) : 두 값 중 하나라도 Truthy라면 결과는 true
// 단축평가 : 앞의 값이 truthy면 뒤의 값은 평가되지 않고 앞의 값을 반환한다.
// 주로 기본값 설정에 사용됨

let data1 = undefined || "기본값";
console.log(data1); // 기본값
let data2 = "값 있음" | "값 없음";
console.log(data2);
let data3 = 10;
console.log(data3, typeof data3);
data3 = undefined || 1;
console.log(data3);
console.log(data3 >= 10 || 0);
console.log(undefined || undefined); // undefined

// && : 선행조건식이 false면 뒤로 넘어가지 않고
// 선행조건식이 true일 때만 뒤에 있는 값으로 대체된다.
let data4 = true && "실행됨";
console.log(data4); // 실행됨
console.log(1 && undefined); // undefined
console.log(null && undefined); // null

// ! 논리 부정 연산자
console.log(!null); // true
console.log(!undefined); // true

// ?? 병합연산자
// 왼쪽 값이 null 또는 undefined 인 경우에만 오른쪽 값을 반환한다.
let user = null;
let value = "default null";
console.log(user, typeof user, typeof value); // null object string

// 병합연산자
console.log(null ?? value); // default null
console.log(undefined ?? null); // null
console.log(value ?? null); // default null

// ?. 옵셔널 체이닝
// 객체의 속성에 안전하게 접근할 수 있는 문법
// 만약 객체의 속성이 null이나 undefined 일 때 에러를 발생시키는 대신 undefined로 반환한다
// 코드가 중간에 멈추는 것을 방지할 수 있다.
let users = {
  profile: { name: null, age: 5 },
};

console.log(users, typeof users);
// console.log(users.profile.phone.number);
console.log(users.profile?.phone?.number);
// 옵셔널 체이닝이 객체 의 깊은 곳에 있는 속성에 접근할 때
// 존재 여부를 미리 확인하여 에러를 방지할 수 있다.

console.log(users.profile?.age); // 5
let userNoProfile = {};
console.log(userNoProfile.profile.age);
