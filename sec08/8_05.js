// 합이 같은 부분집합(DFS : 아마존 인터뷰)
function solution(arr) {
  let answer = "NO";
  let tmparr = Array.from({ length: arr.length }, () => false);

  function DFS(v) {
    if (v === arr.length) {
      let sum1 = 0;
      let sum2 = 0;

      for (let i = 0; i < arr.length; i++) {
        if (tmparr[i]) {
          sum1 += arr[i];
        } else {
          sum2 += arr[i];
        }
      }
      if (sum1 === sum2) {
        answer = "YES";
      }
    } else {
      tmparr[v] = true;
      DFS(v + 1);
      tmparr[v] = false;
      DFS(v + 1);
    }
  }
  DFS(0);

  return answer;
}

let arr = [1, 3, 5, 6, 7, 10];
console.log(solution(arr));

// 합이 같은 부분집합(DFS : 아마존 인터뷰)
function solution2(arr) {
  let answer = "NO";
  let total = arr.reduce((a, b) => a + b);
  let flag = true;
  function DFS(L, sum) {
    if (L === arr.length) {
      if (flag) {
        if (total - sum === sum) {
          answer = "YES";
          flag = false;
        }
      }
    } else {
      DFS(L + 1, sum + arr[L]);
      DFS(L + 1, sum);
    }
  }
  DFS(0, 0);

  return answer;
}

let arr2 = [1, 3, 5, 6, 7, 10];
console.log("solution2 = " + solution2(arr2));
