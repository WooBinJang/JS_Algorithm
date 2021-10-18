//연속 부분수열 2
function solution(m, arr) {
  let answer = 0;
  let lp = 0;
  let sum = 0;
  for (let rp = 0; rp < arr.length; rp++) {
    sum += arr[rp];
    while (sum > m) {
      sum -= arr[lp++];
    }
    answer += rp - lp + 1; // 자기자신을 포함한 연속부분 수열
  }
  return answer;
}

let a = [1, 3, 1, 2, 3];
console.log(solution(5, a));
