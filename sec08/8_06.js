// 바둑이 승차(DFS)
function solution(c, arr) {
  let answer = 0;
  let tmparr = Array.from({ length: arr.length }, () => false);

  function DFS(L) {
    if (L === arr.length) {
      let sum = 0;
      for (let i = 0; i < arr.length; i++) {
        if (tmparr[i]) {
          sum += arr[i];
        }
      }
      if (sum <= c) {
        answer = Math.max(answer, sum);
      }
    } else {
      tmparr[L] = true;
      DFS(L + 1);
      tmparr[L] = false;
      DFS(L + 1);
    }
  }

  DFS(0);
  return answer;
}

let arr = [81, 58, 42, 33, 61];
console.log(solution(259, arr));

// 바둑이 승차(DFS)
function solution2(c, arr) {
  let answer = 0;
  function DFS(L, sum) {
    if (L === arr.length) {
      if (sum > c) return;
      answer = Math.max(answer, sum);
    } else {
      DFS(L + 1, sum + arr[L]);
      DFS(L + 1, sum);
    }
  }

  DFS(0, 0);
  return answer;
}

let arr2 = [81, 58, 42, 33, 61];
console.log("solution2 = " + solution2(259, arr));
