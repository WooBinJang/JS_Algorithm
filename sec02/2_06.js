//격자판 최대합
function solution(arr) {
  let answer = 0;
  let tmp = [];
  let sum3 = 0;
  let sum4 = 0;
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    let sum2 = 0;

    for (let j = 0; j < arr.length; j++) {
      sum += arr[i][j];
      sum2 += arr[j][i];
      if (i === j) {
        sum3 += arr[i][j];
      }
    }
    for (let j = arr.length - 1 - i; j >= 0; j--) {
      sum4 += arr[i][j];
      break;
    }
    tmp.push(sum);
    tmp.push(sum2);
  }
  tmp.push(sum3);
  tmp.push(sum4);
  // for (let x of tmp) {
  //   if (answer < x) {
  //     answer = x;
  //   }
  // }
  answer = Math.max(...tmp);
  return answer;
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(arr));
