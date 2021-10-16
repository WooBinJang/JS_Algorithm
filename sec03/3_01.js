//회문 문자열
function solution(s) {
  let answer = "";
  let tmp = s.toUpperCase();
  let cnt = 0;
  let stack = [];
  let tmparr = [];
  for (let i = 0; i < s.length; i++) {
    stack.push(tmp[i]);
    cnt++;
    if (i === s.length - 1) {
      for (let j = 0; j < cnt; j++) {
        tmparr += stack.pop();
      }
    }
  }

  for (let i = 0; i < tmparr.length; i++) {
    console.log(tmp[i] + "  " + tmparr[i]);
    if (tmp[i] === tmparr[i]) {
      answer = "YES";
    } else {
      answer = "NO";
      break;
    }
  }
  return answer;
}

let str = "goooG";

console.log(solution(str));

function solution2(s) {
  let answer = "YES";
  let tmp = s.toUpperCase();
  let reversetmp = tmp.split("").reverse().join("");
  if (tmp !== reversetmp) answer = "NO";
  return answer;
}

let str2 = "gooG";
console.log("solution2 = " + solution2(str2));
