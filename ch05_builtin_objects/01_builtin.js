// 빈 객체 생성
let person = new Object();
// 멤버 설정
person.fName = '영';
person.lName = '김';
person.age = 20;
person.getFullName = function() {
  return this.lName + ' ' + this.fName;
}
console.log(person.getFullName());  // 결과값 : 김 영

let strExample = '안녕하세요, 제 이름은 김일입니다. My Name is Kim1. My age is 20 years old.';
let indexNum = strExample.indexOf('My');
console.log(indexNum);    // 결과값 : 20
/*
  실무 사용 사례
  전화번호 입력 받을 때 - 없어야 하면 걸러내야하기 떄문에 '010-1234-5678'이라는 string 값(number이라면 010이 불가능하다)에 .indexOf('-')를 확인하여 -1이 return되면 다음 단계로, 3이 출력된다면 '-'을 제거하는 메서드로 넘어갈 수 있다.
*/
let lastIndexNum = strExample.lastIndexOf('My');
console.log(lastIndexNum);    // 결과값 : 37
/*
  lastIndexOf()는 argument로 들어간 문자열이 둘 이상 반복되는 경우 마지막에 발견된 문자열을 return한다.
*/
let strFruits = 'Apple, Banana, Kiwi';
let banana = strFruits.slice(7,13);
console.log(banana);  // slice(시작값, 한계값); 한계값 미만까지 출력된다.
let slicedFruits = strFruits.slice(7);  // 7번지부터 끝까지
console.log(slicedFruits);
// python에서는 마이너스 인덱스가 있기는 한데, JS에서는 없다. 하지만 slice()의 argument로 마이너스값을 넣어줄 수는 있다.
console.log(strFruits.slice(-12));  // 뒤에서부터 -1, -2, -3 ...

console.log(strFruits.substring(7,13)); // 결과값은 silce(7,13)과 동일함
// subString()은 음수값을 허용하지 않는다.
console.log(strFruits.substr(7,6));   // 결과값은 silce(7,13), substring(7,13)와 동일함
// substr은 7번지부터 6개의 문자를 뽑아내는 것이다.
let welcomSentence = 'Please visit Seoul and Seoul';
let modifiedSentence = welcomSentence.replace('Seoul', 'Jeju');
console.log(modifiedSentence);
// replace()는 argument와 일치하는 문자열 중 처음 발견된 것을 두 번째 argument로 대체한다.
let modifiedSentence2 = welcomSentence.replace('SEOUL', 'Jeju');
console.log(modifiedSentence2);
let modifiedSentence3 = welcomSentence.replace(/SEOUL/i, 'Jeju');
console.log(modifiedSentence3);
// SEOUL은 찾고자하는 문자열 i는 insensitive의 약자로 덜 까다롭게 굴겠다는 것이다.
let modifiedSentence4 = welcomSentence.replace(/Seoul/g, 'Jeju');
console.log(modifiedSentence4);
// /g는 처음 문자열이 아니라 일치하는 모든 문자열을 찾는다는 의미이다.
// toUpperCase() / toLowerCase()

let text1 = 'Hello';
let text2 = 'World';
let text3 = text1.concat(' ', text2);
console.log(text3);
// concat()은 2개 이상의 문자열을 하나로 합치는 함수
let fName = 'Jone';
let mName = 'Coffee';
let lName = 'Doe';
let fullName = fName.concat(' ', mName, ' ',lName);
console.log(fullName);
// .trim() : 공백 삭제 -> 문자열의 앞 뒤 공백을 삭제
let noSpaceName = '            Jane Moca Doe                  ';
console.log(noSpaceName);
noSpaceName = noSpaceName.trim();
console.log(noSpaceName);
// split() : slice()와 비슷한 기능이지만 return 자료형이 다르다.
let birthday = '1988-07-09';
let birthdayResult = birthday.split('-');
console.log(birthdayResult);  // 결과값 : ['1988', '07', '09' ]
// 즉 .split()의 결과값의 자료형은 Array에 해당한다. 즉 argument로 넣은 '-'를 만날 때마다 배열의 element로 집어넣는다고 볼 수 있다.