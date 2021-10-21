//올바른 괄호
function solution(s) {
  let answer = "YES";
  let stack = [];
  for (let x of s) {
    if (x === "(") {
      stack.push(x);
    } else if (x === ")") {
      if (stack.length === 0) answer = "NO";
      stack.pop();
    }
  }
  if (stack.length !== 0) {
    answer = "NO";
  }
  return answer;
}

let a = "(())()))((";
console.log(solution(a));
