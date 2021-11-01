//중복단어제거
function solution(s) {
  let answer = [];
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === i) {
      answer.push(s[i]);
    }
  }
  return answer;
}
let str = ["good", "time", "good", "time", "student"];
console.log(solution(str));

function solution(s) {
  let answer = [];
  answer = s.filter(function (v, i) {
    // filter 콜백함수(벨류,인데스) { true 값을 배열에 삽입 }
    return s.indexOf(v) === i;
  });
  return answer;
}
let str1 = ["good", "time", "good", "time", "student"];
console.log("filter = " + solution(str1));
