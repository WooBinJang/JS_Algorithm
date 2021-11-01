//가운데 문자 출력
function solution(s) {
  let answer = "";
  if (s.length % 2 !== 0) {
    answer = s[Math.ceil(s.length / 2) - 1];
  } else if (s.length % 2 === 0) {
    //  answer += s[Math.ceil(s.length/2)-1];
    //  answer += s[Math.ceil(s.length/2)];
    answer = s.substr(Math.ceil(s.length / 2) - 1, 2);
  }
  return answer;
}
console.log(solution("length"));
