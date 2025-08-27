// 1번 : 일반함수

//매개변수 o, 리턴값 o 함수 정의
function getAge(age, year) {
  console.log(age, typeof age);
  console.log(year, typeof year);
  return age;
}

//매개변수o, 리턴값o 함수 호출
//console.log(함수명(인수1, 인수2)) or 변수명 = 함수명(인수1, 인수2);
console.log(getAge(20, 2025));
let age = getAge(20, 2025);
console.log(age);

//디폴트 매개변수
function getInfo(name, age, subject = "java") {
  console.log(name);
  console.log(age);
  console.log(subject);
  return name + age;
}

let result1 = getInfo("짱구", 5);
let result2 = getInfo("철수", 5, "자바스크립트");

//아이디, 비밀번호, 이름을 전달받고 이름의 기본값을 사용자로 설정하기
//함수명 : introduce 매개변수o, 리턴값x
//출력문 1개만 작성
function introduce(id, pw, name = "사용자") {
  console.log(`아이디 : ${id}, 비밀번호 : ${pw}, 이름 : ${name}`);
}

introduce("abc", "짱구");
//아이디 : abc, 비밀번호 : 83, 이름 : 짱구
// 0123로 인수를 전달하면 8진수로 해석되어 계산된다
// 0123을 8진수로 변환 => 1 x 8² + 2 x 8¹ + 3 x 8^0 = 64 + 16 + 3 = 83(10진수)

//가변 매개변수 : 함수 호출 시 몇개의 값이 전달될 지 모를 때 사용한다
function printAdd(...numbers) {
  console.log(numbers, typeof numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    // console.log(i, typeof i);
    // console.log(numbers[i], typeof numbers[i]);
    const value = Number(numbers[i]); //Number() 문자열 숫자도 변환 가능하도록 처리
    if (!isNaN(value)) {
      //isNaN() 숫자가 아닌 값은 덧셈에서 제외
      sum += value;
    } else {
      console.log(`${numbers[i]}는 숫자가 아니라 제외됨`);
    }

    console.log(`총합 : ${sum}`);
  }
}

printAdd(1, 2, 3, "a"); //[ 1, 2, 3, 'a' ] object
