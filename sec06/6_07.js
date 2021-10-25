//교육과정 설계
function solution(need, plan) {
  let answer = "YES";
  let planArr = plan.split("");
  let max = -1;

  for (let x of need) {
    let YN = false;
    for (let i = 0; i < planArr.length; i++) {
      if (x === planArr[i]) {
        YN = true;
        if (max < i) {
          max = i;
        } else {
          answer = "NO";
        }
        break;
      }
    }
    if (!YN) {
      answer = "NO";
    }
  }
  return answer;
}

let a = "CBA";
let b = "CBDAGE";
console.log(solution(a, b));

//교육과정 설계
function solution2(need, plan) {
  let answer = "YES";
  let queue = need.split("");
  for (let x of plan) {
    if (queue.includes(x)) {
      if (x !== queue.shift()) {
        answer = "NO";
      }
    }
  }
  if (queue.length > 0) {
    answer = "NO";
  }
  return answer;
}

let a2 = "CBA";
let b2 = "CBDDAB";
//console.log("solution2 = " + solution2(a2, b2));
