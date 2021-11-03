// 회의실 배정
function solution(meeting) {
  let answer = 0;
  meeting.sort((a, b) => {
    return a[0] - b[0];
  });
  console.log(meeting);
  for (let i = 0; i < meeting.length - 1; i++) {
    if (meeting[i][1] === meeting[i + 1][0]) {
      answer++;
    }
  }
  return answer;
}
//01 10 ] 11 20 ] 21 30
let arr = [
  [1, 4],
  [2, 3],
  [3, 5],
  [4, 6],
  [5, 7],
];
let arr2 = [
  [3, 3],
  [1, 3],
  [2, 3],
];
console.log(solution(arr));
