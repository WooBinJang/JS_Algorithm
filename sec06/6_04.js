//후위식 연산(postfix)
function solution(s) {
  let answer = 0;
  let stack = [];
  let cnt = true;

  for (let x of s) {
    if (Number(x)) {
      stack.push(Number(x));
    } else {
      if (cnt) {
        if (x === "+") {
          answer += stack[stack.length - 1] + stack[stack.length - 2];
        } else if (x === "-") {
          answer += stack[stack.length - 1] - stack[stack.length - 2];
        } else if (x === "*") {
          answer += stack[stack.length - 1] * stack[stack.length - 2];
        } else if (x === "/") {
          answer += stack[stack.length - 1] / stack[stack.length - 2];
        }
        stack.pop();
        stack.pop();
        cnt = false;
      } else {
        if (x === "+") {
          answer += stack[stack.length - 1];
        } else if (x === "-") {
          answer -= stack[stack.length - 1];
        } else if (x === "/") {
          answer /= stack[stack.length - 1];
        } else if (x === "*") {
          answer *= stack[stack.length - 1];
        }
        stack.pop();
      }
    }
  }

  return answer;
}

let str = "352+*9-";
//console.log(solution(str));

//후위식 연산(postfix)
function solution2(s) {
  let answer = 0;
  let stack = [];
  for (let x of s) {
    if (!isNaN(x)) stack.push(Number(x));
    else {
      let rt = stack.pop();
      let lt = stack.pop();
      if (x === "+") stack.push(lt + rt);
      else if (x === "-") stack.push(lt - rt);
      else if (x === "*") stack.push(lt * rt);
      else if (x === "/") stack.push(lt / rt);
    }
  }
  answer = stack[0];

  return answer;
}

let str2 = "352+*9-";
console.log("solution2 = " + solution2(str2));
