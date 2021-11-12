// 부분집합 구하기(DFS)
function solution(n) {
  let answer = [];
  let ch = Array.from({ length: n + 1 }, () => false);

  function DFS(v) {
    if (v === n + 1) {
      let tmp = "";
      for (let i = 1; i <= n; i++) {
        if (ch[i]) tmp += i + " ";
      }
      if (tmp.length > 0) {
        // 공집합 제거
        answer.push(tmp.trim());
      }
    } else {
      ch[v] = true; // 포함한다
      DFS(v + 1);
      ch[v] = false; // 포함하지 않는다.
      DFS(v + 1);
    }
  }
  DFS(1);

  return answer;
}

console.log(solution(3));
