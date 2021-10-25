//쇠막대기
function solution(s) {
  let answer = 0;
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(s[i]);
    } else if (s[i] === ")") {
      if (s[i - 1] === "(") {
        // 레이저 발사
        stack.pop();
        answer += stack.length;
      } else if (s[i - 1] === ")") {
        // 막대기 끝
        stack.pop();
        answer++;
      }
    }
  }
  return answer;
}

let a = "()(((()())(())()))(())";
let aa = "(((()(()()))(())()))(()())";
console.log(solution(a));
