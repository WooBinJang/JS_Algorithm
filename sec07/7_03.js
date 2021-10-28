// Special Sort(구글 인터뷰)
function solution(arr) {
  let answer = arr;
  for (let i = 0; i < arr.length; i++) {
    let idx = 0;
    for (let j = idx + 1; j < arr.length; j++) {
      if (arr[idx] > 0 && arr[j] < 0) {
        [arr[idx], arr[j]] = [arr[j], arr[idx]];
      }
      idx++;
    }
  }
  return answer;
}

let arr = [1, 2, 3, -3, -2, 5, 9, -4, 6, -6];
console.log(solution(arr));

// Special Sort(구글 인터뷰)
function solution2(arr) {
  let answer = arr;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > 0 && arr[j + 1] < 0) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return answer;
}

let arr2 = [1, 2, 3, -3, -2, 5, 9, -4, 6, -6];
console.log("solution2 = " + solution2(arr2));
