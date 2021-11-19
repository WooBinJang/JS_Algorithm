// 팩토리얼
function solution(n) {
  let answer = 0;
  function DFS(L, multiply) {
    if (L === 0) {
      answer += multiply;
      return;
    } else {
      DFS(L - 1, multiply * L);
    }
  }
  DFS(n, 1);
  return answer;
}

console.log(solution(5));

// 팩토리얼
function solution2(n) {
  let answer;
  function DFS(n) {
    if (n === 1) {
      return 1;
    } else {
      return n * DFS(n - 1);
    }
  }

  answer = DFS(n);
  return answer;
}

console.log("solution2 = " + solution2(5));
