// 미로탐색(DFS)
function solution(board) {
  let answer = 0;
  let dx = [1, 0, -1, 0];
  let dy = [0, 1, 0, -1];
  //[1,0] 오 [0,1] 아래 [-1,0] 왼 [0,-1] 위

  function DFS(x, y) {
    if (x === board.length - 1 && y === board.length - 1) {
      //도착좌표
      answer++;
    } else {
      for (let i = 0; i < dx.length; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];
        if (
          nx >= 0 &&
          nx <= board.length - 1 &&
          ny >= 0 &&
          ny <= board.length - 1 &&
          board[nx][ny] === 0
        ) {
          board[nx][ny] = 1; // 왔던 좌표 체크
          DFS(nx, ny);
          board[nx][ny] = 0; // 왔던 좌표 체크 해제
        }
      }
    }
  }

  board[0][0] = 1; // 첫번째 좌표는 항상 1
  DFS(0, 0);
  return answer;
}

let arr = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 1, 0, 0, 0],
  [1, 1, 0, 1, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 0],
];
console.log(solution(arr));
