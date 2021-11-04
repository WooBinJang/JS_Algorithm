// 회의실 배정
function solution(meeting) {
  let answer;
  let tmparr = [];
  meeting.sort((a, b) => {
    return a[0] - b[0];
  });
  for (let i = 0; i < meeting.length; i++) {
    let cnt = 1;
    let tmp = i;
    for (let j = i + 1; j < meeting.length; j++) {
      if (meeting[tmp][1] <= meeting[j][0]) {
        tmp = j;
        cnt++;
      }
    }
    tmparr.push(cnt);
  }
  answer = Math.max(...tmparr);
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
console.log(solution(arr2));

// 회의실 배정
function solution2(meeting) {
  let answer = 0;

  meeting.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1];
  });
  console.log(meeting);
  let et = 0;
  for (let x of meeting) {
    if (x[0] >= et) {
      answer++;
      et = x[1];
    }
  }
  return answer;
}
//01 10 ] 11 20 ] 21 30
let arr3 = [
  [1, 4],
  [2, 3],
  [3, 5],
  [4, 6],
  [5, 7],
];
let arr4 = [
  [3, 3],
  [1, 3],
  [2, 3],
];
console.log("solution2 = " + solution2(arr3));
