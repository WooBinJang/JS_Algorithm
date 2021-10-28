//버블 정렬
function solution(arr) {
  let answer = arr;
  for (let i = 0; i < arr.length - 1; i++) {
    let idx = 0;
    for (let j = idx + 1; j < arr.length - i; j++) {
      if (arr[idx] > arr[j]) {
        [arr[idx], arr[j]] = [arr[j], arr[idx]];
      }
      idx++;
    }
  }

  return answer;
}
let a = [7, 54, 3, 8, 12, 4, 83, 9, 10];
let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(a));
