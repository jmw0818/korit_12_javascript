let fName = 'Jone';
let lName = 'Doe';

let person = {
  firstName : fName,
  lastName : lName,
};

console.log(fName);
console.log(person.firstName);
console.log(person['firstName']);   // key가 string이다.

/*
  Object 상에서는 변수에 할당된 값을 key로 치환해서 사용하는 것은 불가능하다.

  하지만 object literal syntax extension을 사용하면 object의 키로 변수에 할당된
  '문자열' 값을 사용할 수 있다. 대괄호([])를 사용한다.
*/
let type = 'student';
let score = {
  [type]: 'Jane',
  score: 95,
}
console.log(score.score);

console.log(score);   // 결과값 : { student: 'Jane', score: 95 }
console.log(score.student);
/*
  Object의 key를 동적으로 생성가능할 수 있다는 점 : input 태그를 통해서
  객체의 key를 생성할 수 있겠다.
*/