function getPerson() {
  return {
    fName: '영',
    lName: '김',
    age: 20,
    email: 'kim0@test.com',
    city: '부산광역시',
    contry: '대한민국',
  };
}
// 이상의 코드가 있다고 가정했을 때 email 값과, city의 값을 출력하고 싶다면?
// 해당 지원자는 부산광역시에 살고 있으며 email은 kim0@test.com입니다.

let person1 = getPerson();
console.log(`해당 지원자는 ${person1.city}에 살고 있으며 email은 ${person1.email}입니다.`);

// 객체의 추출하고자 하는 key와 동일한 변수를 선언한다. {}내에
let {email, city} = getPerson();  // email이라고 하는 변수에 getPerson().email의 값이 들어간다. city도 동일
console.log(`해당 지원자는 ${city}에 살고 있으며 email은 ${email}입니다.`)

function displayFullName({fName, lName}) {  // 매개변수가 구조분해되어있음
  console.log(`${lName} ${fName}`);
}

displayFullName(getPerson());   // 호출시의 argument와 정의 시의 매개변수의 차이점에 주목
// React에서 자주 쓰이기 때문에 꼭 알아둘 것.