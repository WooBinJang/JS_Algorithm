//가위 바위 보
function solution(a, b) {
  let answer = [];
  //1 가위 2 바위 3 보
  for (let i = 0; i < a.length; i++) {
    if (a[i] === b[i]) {
      answer.push("D");
    }
    if (a[i] === 1) {
      if (b[i] === 2) {
        answer.push("B");
      } else if (b[i] === 3) {
        answer.push("A");
      }
    } else if (a[i] === 2) {
      if (b[i] === 1) {
        answer.push("A");
      } else if (b[i] === 3) {
        answer.push("B");
      }
    } else if (a[i] === 3) {
      if (b[i] === 1) {
        answer.push("B");
      } else if (b[i] === 2) {
        answer.push("A");
      }
    }
  }
  return answer;
}

let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];
console.log(solution(a, b));
