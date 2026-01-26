let arr1 = [4,5,6];
let arr2 = [1,2,3];
let arr3 = [...arr2, ...arr1];
console.log(arr3);  // 결과값 : [ 1, 2, 3, 4, 5, 6 ]
/*
  배열, 문자열과 같이 iteration(반복가능자료형) 형태의 데이터를 element 하나하나로 분해해서 사용이 가능하다.
  arr1, 2는 자료형이 배열이다. 하지만 ...arr1 / ...arr2 는 자료형이 배열이 아니다.

*/

let cd = 'CD';
let alphabets = ['A', 'B', ...cd];  // 스프레드 연산자의 작성 순서 중요

console.log(alphabets);
// alphabets 내부의 element를 소문자로 바꾸고 싶다면, 내부로 들어가서 .toLowercase() 적용
for(let i = 0; i < alphabets.length; i++) {
  console.log(alphabets[i].toLowerCase());
}

for(const alpha of alphabets) {
  console.log(alpha.toLowerCase());
}
