//돌다리 건너기
function solution(n) {
  let answer = 0;
  let arr = Array.from({ length: n + 2 }, () => 0);
  arr[1] = 1;
  arr[2] = 2;
  for (let i = 3; i < arr.length; i++) {
    arr[i] = arr[i - 2] + arr[i - 1];
  }
  answer = arr[arr.length - 1];
  return answer;
}

console.log(solution(7));
