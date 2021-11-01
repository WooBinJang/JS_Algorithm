//연필 개수
function solution(n) {
  let answer = Math.ceil(n / 12); // ceil 올림 / floor 내림
  return answer;
}

console.log(solution(36));
