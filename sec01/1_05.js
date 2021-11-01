//최솟값 구하기
function solution(arr) {
  let answer = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (answer > arr[i]) {
      answer = arr[i];
    }
  }
  // 전개 연산자
  let max = Math.max(...arr); // ...arr = arr[0], arr[1] ....arr[length-1]
  console.log("MAX = " + max);

  return answer;
}

let arr = [5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr));
