//봉우리
function solution(arr) {
  let answer = 0;
  let n = arr.length;

  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];
  // 상하좌우 좌표 만들기!!
  // -1,0 위 0,1 오른쪽 1,0 아래 0,-1 왼쪽
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let flag = 1;
      for (let k = 0; k < 4; k++) {
        let nx = i + dx[k]; // 상하
        let ny = j + dy[k]; // 좌우
        if (
          nx >= 0 &&
          nx < n &&
          ny >= 0 &&
          ny < n && // 상하좌우가 undefined 이면 비교 할 필요가 없음
          arr[nx][ny] >= arr[i][j] //4방향  >= 현재위치
        ) {
          flag = 0;
          break;
        }
      }
      if (flag) answer++; // 0은 false
    }
  }
  return answer;
}
let arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];
let arr2 = [
  [5, 6, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];
console.log(solution(arr));
