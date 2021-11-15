// 최대점수 구하기(DFS)
function solution(m, ps, pt) {
  let answer = 0;
  let checkArr = Array.from({ length: ps.length }, () => false);

  function DFS(L) {
    if (L === ps.length) {
      let sum = 0;
      let time = 0;
      for (let i = 0; i < ps.length; i++) {
        if (checkArr[i]) {
          sum += ps[i];
          time += pt[i];
        }
      }
      if (time <= m) {
        answer = Math.max(answer, sum);
      }
    } else {
      checkArr[L] = true;
      DFS(L + 1);
      checkArr[L] = false;
      DFS(L + 1);
    }
  }
  DFS(0);

  return answer;
}

let ps = [10, 25, 15, 6, 7]; // 점수
let pt = [5, 12, 8, 3, 4]; // 시간
console.log(solution(20, ps, pt));

// 최대점수 구하기(DFS)
function solution2(m, ps, pt) {
  let answer = 0;
  function DFS(L, sum, time) {
    if (L === ps.length) {
      if (time > m) return;
      if (answer < sum) {
        answer = sum;
      }
    } else {
      DFS(L + 1, sum + ps[L], time + pt[L]);
      DFS(L + 1, sum, time);
    }
  }
  DFS(0, 0, 0);
  return answer;
}

let ps2 = [10, 25, 15, 6, 7]; // 점수
let pt2 = [5, 12, 8, 3, 4]; // 시간
console.log(solution2(20, ps2, pt2));
