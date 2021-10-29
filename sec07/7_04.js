// 삽입 정렬
function solution(arr) {
  let answer = arr;
  for (let i = 0; i < arr.length - 1; i++) {
    let idx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (idx === 0) {
        if (arr[idx] > arr[j]) {
          [arr[idx], arr[j]] = [arr[j], arr[idx]];
        }
        break;
      } else {
        if (arr[idx] > arr[j]) {
          while (idx >= 0) {
            if (arr[idx] > arr[j]) {
              [arr[idx], arr[j]] = [arr[j], arr[idx]];
              idx--;
              j--;
            } else break;
          }
        } else break;
      }
    }
  }

  return answer;
}

let arr = [11, 7, 5, 6, 10, 9];
console.log(solution(arr));

// 삽입 정렬
function solution2(arr2) {
  let answer = arr;
  for (let i = 0; i < arr.length; i++) {
    let tmp = arr[i];
    let j;
    for (j = i - 1; j >= 0; j--) {
      if (arr[j] > tmp) arr[j + 1] = arr[j];
      else break;
    }
    arr[j + 1] = tmp;
  }
  return answer;
}

let arr2 = [11, 7, 5, 6, 10, 9];
console.log(solution2(arr2));
