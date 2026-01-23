let person = { lName: '김', fName: '영', age: 20, score: 4.5, }
// for-in 구문 형식
/*
  for (const 변수명 in 반복가능객체) {
    반복실행문
  }
*/
for (const key in person) {
  console.log(key);   // 기본적으로 key값이 나온다.
}
// 그렇다면 value를 뽑아내고 싶으면?
for (const key in person) {
  console.log(person[key]);
}
// person.key는 불가능하다
// key에는 string 자료형이 들어가있기 때문에 person[key]로 value호출할 수 있다.

