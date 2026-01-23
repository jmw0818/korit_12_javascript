let brands = ['애플', '구글', '메타', '아마존', '삼성'];
console.log(brands);
console.log(brands[0]);
console.log(brands[1]);
console.log(brands[2]);
console.log(brands[3]);
console.log(brands[4]);

/*
  for (시작값; 한계값; 증감값) {
    반복실행문
  }
*/
console.log('----------------');
for (let i = 0; i < brands.length; i++) {
  console.log(brands[i]);
}

let productList = [
  {
    name: '솔의눈',
    price: 700,

  },
  {
    name: '커피',
    price: 700,

  },
  {
    name: '파워에이드',
    price: 1200,

  },
  {
    name: '오렌지주스',
    price: 1000,

  },
  {
    name: '보리차',
    price: 1200,

  },
  {
    name: '콜라',
    price: 800,

  }
];

console.log('----------------');
for (let i = 0; i < productList.length; i++) {
  console.log(productList[i].name);
}
console.log('----------------');
let outputList = [];
let inputCoin = 800;
// 내가 가지고 있는 돈을 가지고 살 수 있는 음료들을 저장할 빈 배열 -> .push()
for (let i = 0; i < productList.length; i++) {
  if (productList[i].price <= inputCoin) {
    outputList.push(productList[i].name);
  }
}
console.log('구매 가능한 음료 목록은 ' + outputList + '입니다.');