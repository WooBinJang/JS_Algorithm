//유효한 팰린드롬
function solution(s) {
  let answer = "YES";

  let tmp = s.toLowerCase().replace(/[^a-z]/g, "");
  // replace(a,b) 괄호안엔 a를  b로변경
  // 정규표현식 /[^a-z]/g => a~z([a-z])가 아닌(^) 모든(/g) 값
  if (tmp !== tmp.split("").reverse().join("")) answer = "NO";
  return answer;
}

let str = "found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));
