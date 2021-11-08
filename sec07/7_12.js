// 마구간 정하기(결정알고리즘)
function count(arr, mid) {
  // 말 수 검사
  let cnt = 1;
  let ep = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - ep >= mid) {
      cnt++;
      ep = arr[i];
    }
  }
  return cnt;
}

function solution(c, stable) {
  let answer = 0;
  stable.sort((a, b) => a - b);
  let lt = 1; // 최소 거리
  let rt = stable[stable.length - 1] - stable[0];
  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2); // 거리
    if (count(stable, mid) >= c) {
      answer = mid;
      lt = mid + 1;
    } else {
      rt = mid - 1;
    }
  }
  return answer;
}

let arr = [1, 2, 8, 4, 9];
console.log(solution(3, arr));
