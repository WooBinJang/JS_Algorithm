// 순열 구하기
function solution(m, arr) {
  let answer = [];
  let checkArr = Array.from({ length: arr.length }, () => false);
  let tmpArr = Array.from({ length: m }, () => false);
  function DFS(L) {
    if (L === m) {
      answer.push(tmpArr.slice());
    } else {
      for (let i = 0; i < arr.length; i++) {
        if (!checkArr[i]) {
          checkArr[i] = true;
          tmpArr[L] = arr[i];
          DFS(L + 1);
          checkArr[i] = false;
        }
      }
    }
  }
  DFS(0);
  console.log(answer.length);

  return answer;
}

let arr = [3, 6, 9];
console.log(solution(2, arr));
