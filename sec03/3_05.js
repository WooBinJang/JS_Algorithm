//문자열 압축
/*
function solution(s) {
  let answer = [];

  for (let i = 0; i < s.length - 1; ) {
    let cnt = 0;
    for (let j = 0; j < s.length - 1; j++) {
      if (s[i] === s[j]) {
        cnt++;
      } else {
        answer.push(s[i]);
        answer.push(cnt);
        i = i + cnt;
        console.log(i);
        break;
      }
    }
  }

  return answer;
}

let str = "KKHSSSSSSSE";
console.log(solution(str));
*/

//문자열 압축
function solution2(s) {
  let answer = "";
  let cnt = 1;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      cnt++;
    } else {
      answer += s[i];
      if (cnt !== 1) {
        answer += cnt;
        cnt = 1;
      }
    }
  }

  return answer;
}

let str2 = "SKKHSSSSSSSEEK";
console.log(solution2(str2));
