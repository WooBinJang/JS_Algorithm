//멘토링
function solution(test) {
  let answer = 0;
  let m = test.length;
  let n = test[0].length;
  for (let i = 1; i <= n; i++) {
    // 맨토 학생
    for (let j = 1; j <= n; j++) {
      // 멘티 학생
      let cnt = 0;
      for (let k = 0; k < m; k++) {
        // 시험횟수
        let pi = 0;
        let pj = 0;
        for (let s = 0; s < n; s++) {
          // 등수

          if (test[k][s] === i) pi = s;
          if (test[k][s] === j) pj = s;
          //console.log(pi, pj);
        }
        if (pi < pj) {
          // 인덱스가 낮아야 멘토가 가능
          cnt++;
        }
      }
      if (cnt === m) {
        answer++;
      }
    }
  }
  return answer;
}

let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(arr));
