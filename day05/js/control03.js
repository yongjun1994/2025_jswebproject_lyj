// 4번 : 행을 저장하여 삼각형 출력하기

// let i = 1;
for (let i = 1; i <= 5; i++) {
  // i = 1, 1 <= 5 true, j = 1, 1 <= 4 true
  let star = "";
  for (let j = 1; j <= i; j++) {
    star += "* ";
  }
  console.log(star);
}
