// 섬나라 아일랜드(DFS 활용)
function solution(board) {
  let answer = 0;
  let queue = [];
  let dx = [1, 0, -1, 0, 1, -1, 1, -1];
  let dy = [0, 1, 0, -1, 1, -1, -1, 1];

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] === 1) {
        answer++;
        board[i][j] = 0;
        queue.push([i, j]);
        while (queue.length) {
          let [x, y] = queue.shift();
          for (let k = 0; k < 8; k++) {
            let nx = x + dx[k];
            let ny = y + dy[k];
            if (
              nx >= 0 &&
              nx < board.length &&
              ny >= 0 &&
              ny < board.length &&
              board[nx][ny] === 1
            ) {
              board[nx][ny] = 0;
              queue.push([nx, ny]);
            }
          }
        }
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
