// 송아지 찾기(BFS : 상태트리탐색)
function solution(board) {
  let answer = 0;
  let dx = [1, 0, -1, 0, 1, -1, 1, -1];
  let dy = [0, 1, 0, -1, 1, -1, -1, 1];

  function DFS(x, y) {
    board[x][y] = 0;
    for (let i = 0; i < dx.length; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (
        nx >= 0 &&
        nx < board.length &&
        ny >= 0 &&
        ny < board.length &&
        board[nx][ny] === 1
      ) {
        DFS(nx, ny);
      }
    }
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] === 1) {
        answer++;
        DFS(i, j);
        console.log("i = " + i + " / " + " j = " + j);
      }
    }
  }

  return answer;
}

let arr = [
  [1, 1, 0, 0, 0, 1, 0],
  [0, 1, 1, 0, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 1, 0, 0],
  [1, 0, 1, 0, 1, 0, 0],
];

console.log(solution(arr));

// 송아지 찾기(BFS : 상태트리탐색)
function solution2(board) {
  let answer = 0;

  return answer;
}

let arr2 = [
  [1, 1, 0, 0, 0, 1, 0],
  [0, 1, 1, 0, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 1, 0, 0],
  [1, 0, 1, 0, 1, 0, 0],
];

console.log(solution2(arr2));
