//10부제
function solution(day, arr) {
  let temp = [];
  let answer = 0;
  for (let x of arr) {
    temp.push(x % 10);
  }
  for (let x of temp) {
    if (x === day) {
      answer++;
    }
  }
  return answer;
}

arr = [25, 23, 11, 47, 53, 17, 33];
arr1 = [12, 20, 54, 30, 87, 91, 30];
console.log(solution(1, arr1));
