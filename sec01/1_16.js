function solution(s) {
  let answer = "";
  let arr = [];
  for (let x of s) {
    arr.push(x);
  }
  arr = new Set(arr);
  for (let x of arr) {
    answer += x;
  }
  return answer;
}
console.log(solution("ksekkset"));

//중복문자제거
function solution(s) {
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === i) {
      /*
                indexOf(찾는값 , 인덱스시작위치)
                값이 있을경우 인덱스값 리턴
                값이 없을 경우 -1 리턴
                */
      answer += s[i];
    }
  }
  return answer;
}
console.log(solution("ksekkset"));