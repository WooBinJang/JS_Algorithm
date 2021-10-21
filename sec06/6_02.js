//괄호문자제거
function solution(s) {
  let answer = "";
  let stack = [];
  for (let x of s) {
    if (x === "(") {
      stack.push(x);
    } else if (x === ")") {
      while (stack[stack.length - 1] !== "(") {
        stack.pop();
      }
      stack.pop();
    } else {
      stack.push(x);
    }
  }

  for (let x of stack) {
    answer += x;
  }
  return answer;
}

let str = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str));

//괄호문자제거
function solution2(s) {
  let answer;
  let stack = [];
  for (let x of s) {
    if (x === ")") {
      while (stack.pop() !== "(") {}
    } else stack.push(x);
  }
  answer = stack.join("");
  return answer;
}

let str2 = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log("solution2 = " + solution2(str2));
