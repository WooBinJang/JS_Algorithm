//두 배열 합치기
function solution(arr1, arr2) {
  let answer = [];
  for (let x of arr1) {
    answer.push(x);
  }

  for (let x of arr2) {
    answer.push(x);
  }

  answer.sort((a, b) => a - b);
  return answer;
}

let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];
console.log(solution(a, b));

function solution2(arr1, arr2) {
  let answer = [];
  let p1 = 0;
  let p2 = 0;

  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] >= arr2[p2]) {
      answer.push(arr2[p2++]);
    } else answer.push(arr1[p1++]);
  }
  while (p1 < arr1.length) answer.push(arr1[p1++]);
  while (p2 < arr2.length) answer.push(arr2[p2++]);

  return answer;
}

let a2 = [1, 1, 3, 5];
let b2 = [1, 2, 3, 6, 7, 9];
console.log("solution2 " + solution2(a2, b2));
