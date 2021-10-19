//최대 매출
function solution(k, arr) {
  let answer = 0;
  let lp = 0;
  let sum = 0;
  let sumarr = [];
  for (let rp = 0; rp < arr.length; rp++) {
    sum += arr[rp];
    if (rp - lp === k - 1) {
      sumarr.push(sum);
      sum -= arr[lp++];
    }
  }

  answer = Math.max(...sumarr);
  return answer;
}

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));

//최대 매출
function solution2(k, arr) {
  // 슬라이딩윈도우 알고리즘
  let answer = 0;
  let sum = 0;
  for (let i = 0; i < k; i++) sum += arr[i];
  answer = sum;
  for (let i = k; i < arr.length; i++) {
    sum += arr[i] - arr[i - k];
    answer = Math.max(answer, sum);
  }
  return answer;
}

let a2 = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log("solution2=" + solution2(3, a2));
