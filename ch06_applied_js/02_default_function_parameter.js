function say(message) {
  if (message != undefined) console.log(message);
  else console.log('매개변수가 넘어오지 않았습니다.');
}

say();

// 함수 호출 시에 argument가 아예 없다면 등록되어있는 값을 대입해주는 기능이다.
function say2(message='매개변수가 넘어오지않았습니다2.') {
  console.log(message);
}

say2();
say2('argument에 값을 넣었습니다.');