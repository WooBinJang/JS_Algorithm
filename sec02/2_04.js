//점수계산
function solution(arr) {
  let answer = 0;
  let count = 0;
  for (let x of arr) {
    if (x === 1) {
      count++;
    } else {
      while (count > 0) {
        answer += count;
        count--;
      }
    }
  }

  return answer;
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));
