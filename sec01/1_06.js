//홀수
function solution(arr) {
  let temp = [];
  let answer = [];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
      /// ===은 타입까지 비교 == 값 자체만 비교
      temp.push(arr[i]);
      sum += arr[i];
    }
  }
  answer.push(sum);
  answer.push(Math.min(...temp));

  return answer;
}

arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));
