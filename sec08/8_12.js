// 조합의 경우수
function solution(n, r) {
  let answer;
  function DFS(n, r) {
    if (n === r || r === 0) {
      return 1;
    } else {
      return DFS(n - 1, r - 1) + DFS(n - 1, r);
    }
  }
  answer = DFS(n, r);

  return answer;
}

console.log(solution(5, 3));

// 조합의 경우수(메모이제이션)
function solution2(n, r) {
  let answer;
  let tmpArr = Array.from(Array(n + 1), () => Array(n + 1).fill(0));

  function DFS(n, r) {
    if (tmpArr[n][r] > 0) return tmpArr[n][r];
    if (n === r || r === 0) {
      return 1;
    } else {
      return (tmpArr[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r));
    }
  }
  answer = DFS(n, r);

  return answer;
}

console.log(solution2(33, 19));
