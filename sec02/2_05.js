//등수구하기
function solution(arr) {
  let answer = [];
  let rank = 1;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        rank++;
      }
    }
    answer.push(rank);
    rank = 1;
  }
  return answer;
}

let arr2 = [87, 89, 92, 100, 76];
let arr = [92, 92, 92, 100, 76];

console.log(solution(arr2));

//등수구하기 (다시풀기)
function solution2(arr) {
  let answer = Array.from({ length: arr.length }, () => arr.length);

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i !== j && arr[i] <= arr[j]) {
        answer[j] = answer[j] - 1;
      }
    }
  }

  return answer;
}

let arr3 = [92, 92, 92, 100, 76];
let arr4 = [87, 89, 92, 100, 76];
console.log(solution2(arr4));
