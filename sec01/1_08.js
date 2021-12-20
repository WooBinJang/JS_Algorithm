//일곱 난쟁이 (다시풀기)
function solution(arr) {
  let sum = 0;
  for (let x of arr) {
    sum += x;
  }
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (sum - (arr[i] + arr[j]) === 100) {
        arr.splice(arr.indexOf(arr[i]), 1);
        arr.splice(arr.indexOf(arr[j]), 1);
      }
    }
  }
  return arr;
}

let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));
