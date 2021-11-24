// 조합 구하기
function solution(n, m) {
  let answer;
  let ch = Array.from(Array(20), () => Array(20).fill(0));
  function combi(n, r) {
    if (ch[n][r] > 0) return ch[n][r];
    if (n === r || r === 0) {
      return 1;
    } else {
      return (ch[n][r] = combi(n - 1, r - 1) + combi(n - 1, r));
    }
  }

  answer = combi(n, m);

  return answer;
}

console.log(solution(4, 2));

// 조합 구하기
function solution2(n, m) {
  let answer = [];
  let ch = Array.from({ length: m }, () => 0);
  function DFS(L, s) {
    if (L === m) {
      answer.push(ch.slice());
    } else {
      for (let i = s; i <= n; i++) {
        ch[L] = i;
        DFS(L + 1, i + 1);
      }
    }
  }
  DFS(0, 1);
  return answer;
}

console.log(solution2(4, 2));
