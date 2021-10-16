function solution(input) {
  let result = 0;
  let tmp = 0;
  let tmparr = [];
  for (let i = 0; i < input.length; i++) {
    tmp += input[i];
    tmparr.push(tmp);
  }
  let max = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < tmparr.length; i++) {
    if (max > Math.abs(100 - tmparr[i])) {
      max = Math.abs(100 - tmparr[i]);
      result = tmparr[i];
    }
  }
  return result;
}

let a = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let b = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
console.log(solution(b));
