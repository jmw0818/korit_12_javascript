let sum00 = sum(10, 5);   // 함수를 변수(let)에 저장하니까 순서를 지키게 되어 오류가 발생한다.
console.log(sum00);

// 함수 표현식 정의
let sum = function(a, b) {    // 호이스팅
  return a + b;
}
// 함수 호출
sum1 = sum(1,2);
console.log(sum1);
sum2 = sum(3,4);
console.log(sum2);