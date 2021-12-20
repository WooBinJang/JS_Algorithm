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

/*
소문자로 된 한개의 문자열이 입력되면 중복된 문자를 제거하고 출력하는 프로그램을 작성하
세요.
제거된 문자열의 각 문자는 원래 문자열의 순서를 유지합니다.
▣ 입력설명
첫 줄에 문자열이 입력됩니다.
▣ 출력설명
첫 줄에 중복문자가 제거된 문자열을 출력합니다.
▣ 입력예제 1 
ksekkset
▣ 출력예제 1
kset

*/

function solution3(s) {
  let tmpArr = [];
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    tmpArr.push(s[i]);
  }
  for (let i = 0; i < s.length - 1; i++) {
    for (let j = i + 1; j < s.length; j++) {
      if (tmpArr[i] === tmpArr[j]) {
        tmpArr[j] = "#";
      }
    }
  }
  for (let x of tmpArr) {
    if (x !== "#") {
      answer += x;
    }
  }

  return answer;
}
console.log("solution3= " + solution3("ksekkset"));
