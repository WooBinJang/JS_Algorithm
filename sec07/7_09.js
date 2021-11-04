// 결혼식
function solution(times) {
  let answer = [];

  times.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    } else return a[0] - b[0];
  });

  for (let i = 0; i < times.length; i++) {
    let cnt = 0;

    for (let j = 0; j < times.length; j++) {
      if (times[i][0] <= times[j][0] && times[i][1] > times[j][0]) {
        cnt++;
      }
    }
    answer.push(cnt);
  }
  answer = Math.max(...answer);
  return answer;
}

let arr = [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14],
];
console.log(solution(arr));
// 결혼식
function solution2(times) {
  let answer = 0;
  let T_line = [];
  for (let x of times) {
    T_line.push([x[0], "s"]);
    T_line.push([x[1], "e"]);
  }
  T_line.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1].charCodeAt() - b[1].charCodeAt(); // 아스키코드로 변경후 sort
    } else {
      return a[0] - b[0];
    }
  });

  let cnt = 0;
  for (let x of T_line) {
    if (x[1] === "s") {
      cnt++;
    } else {
      cnt--;
    }
    answer = Math.max(answer, cnt);
  }
  return answer;
}

let arr2 = [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14],
];
console.log(solution2(arr2));
