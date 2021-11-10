// 재귀함수를 이용한 이진수 출력
function solution(n) {
  let answer = "";
  function DFS(L) {
    if (L === 0) {
      return;
    } else {
      if (L % 2 === 1) {
        DFS(parseInt(L / 2));
        answer += "1";
      } else {
        DFS(parseInt(L / 2));
        answer += "0";
      }
    }
  }

  DFS(n);
  return answer;
}

console.log(solution(11));

// 재귀함수를 이용한 이진수 출력
function solution2(n) {
  let answer = "";
  function DFS(L) {
    if (L === 0) {
      return;
    } else {
      DFS(parseInt(L / 2));
      answer += String(L % 2);
    }
  }

  DFS(n);
  return answer;
}

console.log("solution2 = " + solution2(11));
