//졸업 선물

function solution(m, product) {
  let answer = 0;

  product.sort(function (a, b) {
    // 2차 배열 오름차순 정렬
    return a[0] + a[1] - (b[0] + b[1]);
  });

  for (let i = 0; i < product.length; i++) {
    let money = m - product[i][0] / 2 + product[i][1]; //반값 할인 상품
    let cnt = 1;
    for (let j = 0; j < product.length; j++) {
      if (i !== j && product[j][0] + product[j][1] <= money) {
        money -= product[j][0] + product[j][1];
        cnt++;
      }
    }
    answer = Math.max(answer, cnt);
  }

  return answer;
}

let arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];
console.log(solution(28, arr));
