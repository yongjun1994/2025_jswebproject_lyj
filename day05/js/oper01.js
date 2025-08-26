//8번 : 연산자
//1) 관계 연산자
// ==, != : 값만 비교
// ===, !== : 값과 타입 비교

let data1 = "1";
let data2 = 1;
console.log(data1, typeof data1, data2, typeof data2);

console.log(data1 == data2);
console.log(data1 === data2);

// false로 취급되는 값 => Falsy
console.log(Boolean(""), Boolean(''), Boolean(``)); // false false false
console.log(Boolean(" "), Boolean('1'), Boolean('0')) // true true true
console.log(Boolean(0), Boolean(0.0), Boolean(-0)) // false false false
console.log(Boolean(Infinity), Boolean(NaN), Boolean(null), Boolean(undefined));   // true false false false