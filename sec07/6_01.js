//선택 정렬
function solution(arr) {
  let answer = [];
  let length = arr.length;
  for (let i = 0; i < length; i++) {
    let min = Number.MAX_SAFE_INTEGER;
    let idx = i;
    for (let j = 0; j < arr.length; j++) {
      if (min > arr[j]) {
        min = arr[j];
        idx = j;
      }
    }
    arr.splice(idx, 1);
    answer.push(min);
  }

  return answer;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));

//선택 정렬
function solution2(arr) {
  let answer = arr;
  for (let i = 0; i < arr.length - 1; i++) {
    let idx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[idx] > arr[j]) {
        idx = j;
      }
    }
    [arr[idx], arr[i]] = [arr[i], arr[idx]];
  }

  return answer;
}

let arr2 = [13, 5, 11, 7, 23, 15];
console.log("solution2 = " + solution2(arr2));
