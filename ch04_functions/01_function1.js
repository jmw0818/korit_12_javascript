let sum00 = add(10,5);    // 정의된 함수는 밑에 있지만, 연산이 된다.
console.log(sum00);

function add(a, b) {
  let sum = a + b;
  return sum;
}

let sumNum = add(1, 2);
console.log(sumNum);

let scores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function calcSum(scoreArray) {
  let sum = 0;
  for (const score of scoreArray) {
    sum += score;
  }
  return sum;

}
function calcAvg(scoreArray) {
  let avg = calcSum(scoreArray) / scoreArray.length;
  return avg;
}

let sum = calcSum(scores);
console.log('총합은 ' + sum + '입니다.')
calcAvg(scores);
let avg = calcAvg(scores);
console.log('평균은 ' + avg + '입니다.')
