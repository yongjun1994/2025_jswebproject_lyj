// 2번 : 반복문(for문, while문, do~while문)

// for문 : 반복횟수나 범위가 명확할 때 사용
for (let i = 0; i < 5; i++) {
  console.log("hello");
}

// while문 : 조건이 참인 동안 반복실행
let money = 0;
while (money <= 1000) {
  console.log(`현재 ${money}원이 모였습니다.`);
  money += 100;
}

// do ~ while문 : while문과 비슷하지만 최소 한 번은 코드를 실행한 뒤 조건을 확인
let password = '1234';
do {
  if (password === 1234) {
    console.log("비밀번호가 같습니다");
  } else {
    console.log("비밀번호가 틀렸습니다");
  }
} while (password === '1234');
