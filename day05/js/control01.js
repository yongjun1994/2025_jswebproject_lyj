// 1번 : 조건문 (if, switch)
// 실행 단축키 : ctrl + alt + n
let age = 15;
if (age >= 19) {
  console.log("성인입니다.");
} else {
  console.log("미성년입니다");
}

// switch

let fruit = "사과";

switch (fruit) {
  case "사과":
    console.log("사과는 빨간색입니다.");
    break;
  case "바나나":
    console.log("바나나는 노란색입니다.");
    break;
  case "포도":
    console.log("포도는 보라색입니다.");
    break;
  default:
    console.log("어떤 과일인지 모르겠습니다.");
}
