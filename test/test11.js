// <> 태그 안에 문자열은 뒤집기 x
// " " 공백을 기준으로 단어 구분
// 각 문자마다 뒤집기

function solution(a) {
  let answer = "";
  let tmparr = [];
  let yn = true;
  let tmp_cnt = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] === "<") {
      tmp_cnt++;
      yn = true;
      tmparr.push(yn);
    } else if (a[i] !== ">") {
      tmparr.push(yn);
    } else if (a[i] === ">") {
      tmparr.push(yn);
      yn = false;
    }
  }

  let stack = [];
  let flag = true;
  let cnt = 0;
  if (tmp_cnt === 0) {
    for (let i = 0; i < a.length; i++) {
      stack.push(a[i]);
      //console.log(stack);
      cnt++;
      if (a[i] === " ") {
        for (let j = 0; j < cnt; j++) {
          answer += stack.pop();
        }
        cnt = 0;
      } else if (i === a.length - 1) {
        answer += " ";
        answer += stack.join("");
      }
      console.log(answer + " / " + answer.length);
    }
  } else {
    for (let i = 0; i < a.length; i++) {
      //console.log("idx = " + i + " / " + "flag = " + flag);
      if (!tmparr[i]) {
        // <> 안에 있는
        stack.push(a[i]);
        cnt++;
        flag = false;
        if (i === a.length - 1) {
          for (let j = 0; j < cnt; j++) {
            answer += stack.pop();
          }
        }
      } else if (tmparr[i]) {
        // <> 밖
        if (!flag) {
          //
          console.log(i);
          for (let j = 0; j < cnt; j++) {
            answer += stack.pop();
          }
          answer += a[i];
          flag = true;
          cnt = 0;
        } else {
          answer += a[i];
        }
      }
    }
  }
  return answer;
}
let d = "<ab cd>ef gh<ij kl>";
let a = "<int><max>2147483647<long long><max>9223372036854775807";
let b = "<open>tag tag<close>";
let c = "baekjoon online judge";
console.log(solution(c));
