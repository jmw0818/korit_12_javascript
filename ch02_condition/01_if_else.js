let age = 12;
let busFare = 0;

if (age < 7) {
  busFare = 0;
} else if (age >= 7 && age < 13) {
  busFare = 450;
} else if (age >= 13 && age < 19) {
  busFare = 720;
} else if (age >= 19 && age <=70) {
  busFare = 1200;
} else if (age > 70) {
  busFare = 0;
}

console.log(busFare + "원")

let height = 172;
let weight = 68;
let bmi = weight / ((height/100)**2);
let grade = '';

if (bmi >= 35) {
  grade = '3단계 비만';
} else if (bmi >= 30) {
  grade = '2단계 비만';
} else if (bmi >= 25) {
  grade = '1단계 비만';
} else if (bmi >= 23) {
  grade = '비만 전단계';
} else if (bmi >= 18.5) {
  grade = '정상';
} else {
  grade = '저체중';
}

console.log("당신의 bmi 지수는 " + bmi.toFixed(2) + "이고 " + grade + "입니다.");
// number 자료형의 .toFixed() 메서드 호출 -> argument로 정수 입력하면 소수점 정수 자리 까지 표기 