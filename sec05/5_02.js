//공통원소 구하기
function solution(arr1, arr2) {
  let answer = [];

  arr1.sort((a, b) => a - b);
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        answer.push(arr1[i]);
        break;
      }
    }
  }
  return answer;
}

let a = [1, 3, 9, 5, 2];
let b = [3, 2, 5, 7, 8];
//console.log(solution(a, b));

//공통원소 구하기
function solution2(arr1, arr2) {
  let answer = [];
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  let p1 = 0;
  let p2 = 0;

  while (p1 < arr1.length) {
    if (arr1[p1] === arr2[p2]) {
      answer.push(arr1[p1++]);
    } else p2++;

    if (p2 === arr2.length - 1) {
      p2 = 0;
      p1++;
    }
  }
  return answer;
}

let a2 = [1, 3, 9, 5, 2];
let b2 = [3, 2, 5, 7, 8];
console.log("solution2 = " + solution2(a2, b2));
