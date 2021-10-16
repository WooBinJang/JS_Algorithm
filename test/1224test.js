const fs = require("fs");
const input =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `<   space   >space space space<    spa   c e>`;

const re = /(<.+?>|\s)/g; // <>에 문자 하나 이상 포함하는 문자열 혹은 공백 문자, split할 때 기억했다 정규식 포함하는 애들까지 나누기 위해 ()
// 정규표현식
// 정규표현식은 /  /  로 감싼다
// () 그룹화
// <. <로 시작하는 모든 문자
// ?> >앞에 문자가 있거나 없거나
// | 또는
// \s 공백
// /g

/*[
    '', false
    '<   space   >', true
    'space', false
    ' ', true
    'space', false
    ' ', true
    'space', false
    '<    spa   c e>', true
    '' false
]
*/
const tmp = input.split(re); // 정규식 기준으로 자르기
let result = [];
tmp.map((x) => {
  if (re.test(x)) {
    // test함수 : 정규식의 조건에 부합 할 경우 true 리턴 (현재 정규식에서는 <>와 공백을 찾아냄)
    result += x; // 공백과 <> 태그안에 것들은 그냥 더하기
  } else {
    let a = x.split("").reverse().join(""); //  한글자마다 자른뒤 뒤집어서 더하기
    result += a; //
  }
});
console.log(result);
