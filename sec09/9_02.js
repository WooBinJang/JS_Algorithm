// 경로 탐색(인접행렬)
function solution(n, arr) {
  let answer = 0;
  let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
  let ch = Array.from({ length: n + 1 }, () => 0); // 체크 배열 한번 간 노드는 다시 접근 불가
  let tmp = [];

  for (let [a, b] of arr) {
    graph[a][b] = 1;
  } //인접 그래프 구현

  function DFS(v) {
    // v 노드
    if (v === n) {
      answer++;
      console.log(tmp);
    } else {
      for (let i = 1; i <= n; i++) {
        //가지 수
        if (graph[v][i] !== 0 && ch[i] === 0) {
          ch[i] = 1;
          tmp.push(i);
          DFS(i);
          ch[i] = 0;
          tmp.pop();
        }
      }
    }
  }

  tmp.push(1);
  ch[1] = 1; // 시작 점 1 은 항상 포함 됨으로
  DFS(1);
  return answer;
}

let arr = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 1],
  [2, 3],
  [2, 5],
  [3, 4],
  [4, 2],
  [4, 5],
];
console.log(solution(5, arr));
