function sum1(x1, x2) {
  let y = x1 + x2;
  return y;
}

console.log(sum1(5, 7));

function sum2(x1, x2, x3, x4) {
  let y = x1 + x2 + x3 + x4;
  return y;
}

console.log(sum2(5, 7, 1, 3));

/*
  일반적인 함수 정의는 매개변수를 몇 개 선언할지 미리 지정해두게 된다. 2개 지정하면 무조건 argument가 두 개 필요하고
  4개 지정하면 4개의 argument가 필요하다. 즉 그 이상의 argument를 사용하려면 정해진 함수를 몇 번 호출할지 
  고민이 필요하다. -> 이상의 문제를 해결하기 위한 것이 Rest Parameter의 개념이다. 몇 개의 매개변수가 전달될지 모르는 경우에 사용한다.
*/
function sum3(...args) {  // 매개변수에 지정된 값은 '배열'로 저장된다.
  let total = 0;
  for (let x of args) {
    total += x;
  }
  return total;
}

console.log(sum3(1,3,5,6,7,8,9,12));
