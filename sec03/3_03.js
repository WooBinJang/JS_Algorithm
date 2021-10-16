//숫자만 추출
function solution(str) {
  let answer = "";

  str = str.replace(/[a-zA-Z]/g, "");

  let idx = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== "0") {
      idx = i;
      break;
    }
  }
  for (let i = idx; i < str.length; i++) {
    answer += str[i];
  }
  return answer;
}

let str = "g01e0n2T0s8eSoft";
console.log(solution(str));

//숫자만 추출
function solution2(str2) {
  let answer = "";
  for (let x of str2) {
    if (!isNaN(x)) answer += x; //isNaN(x) x가 숫자일 경우 false  string 숫자 1도 false
  }
  return parseInt(answer);
}

let str2 = "g01e0n2T0s8eSoft";
console.log("solution2 = " + solution2(str2));
