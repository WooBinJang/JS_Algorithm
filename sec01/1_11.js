//대문자 찾기
function solution(s) {
  let answer = 0;
  let tmp = 0;
  for (let i = 0; i < s.length; i++) {
    tmp = s.charCodeAt(i); // 아스키코드로 변경 A~Z 65~90 a~z 97~122
    // toUpperCase() 대문자로 변경
    if (tmp >= 65 && tmp <= 90) {
      answer++;
    }
  }
  return answer;
}

let str = "KoreaTimeGood";
console.log(solution(str));
