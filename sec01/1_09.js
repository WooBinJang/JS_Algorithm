//A를 #으로
function solution(s) {
  let answer = "";
  let arr = s.split("");

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "A") {
      arr[i] = "#";
    }
    answer += arr[i];
  }
  return answer;

  /*
                answer =answer.replace(/A/g, '#')  
                replace = A를 #으로 변경 (g -> 모든 A 변경 )
                */
}

let str = "BANANA";
console.log(solution(str));
