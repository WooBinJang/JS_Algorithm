//가장 짧은 문자거리
function solution(s, t) {
  let answer = [];
  let tmp = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === t) {
      tmp.push(i);
    }
  }
  // e 가 위치한 인덱스 배열

  for (let i = 0; i < s.length; i++) {
    let min = Number.MAX_SAFE_INTEGER;
    for (let j = 0; j < tmp.length; j++) {
      if (min > Math.abs(tmp[j] - i)) {
        min = Math.abs(tmp[j] - i);
      }
    }

    answer.push(min);
  }

  return answer;
}

let str = "teachermode";
console.log(solution(str, "e"));

function solution2(s, t) {
  let answer = [];
  let max = 1000;
  for (let x of s) {
    if (x === t) {
      max = 0;
      answer.push(max);
    } else {
      max++;
      answer.push(max);
    }
  }

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === t) {
      max = 0;
      answer[i] = Math.min(max, answer[i]);
    } else {
      max++;
      answer[i] = Math.min(max, answer[i]);
    }
  }
  return answer;
}

let str2 = "teachermode";
console.log("solution2 = " + solution2(str2, "e"));
