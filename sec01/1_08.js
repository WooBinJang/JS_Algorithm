//일곱 난쟁이 (다시풀기)
function solution(arr) {
  let sum = -100;
  for (let x of arr) {
    sum += x;
  }

  arr.sort(function (a, b) {
    return a - b;
  });

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum) {
        arr.splice(i, 1); // index i번째 1개 제거
        arr.splice(j - 1, 1);
      }
    }
  }
  answer = arr;
  return answer;
}

let arr = [20, 7, 23, 19, 10, 99, 22, 8, 13];
console.log(solution(arr));
