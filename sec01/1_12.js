//대문자로 통일
function solution(s) {
  let answer = "";
  for (let x of str) {
    answer += x.toUpperCase();
  }
  return answer;
}

let str = "ItisTimeToStudy";
console.log(solution(str));
