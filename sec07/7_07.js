// 좌표 정렬
function solution(arr) {
  let answer = arr;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i][0] > arr[i + 1][0]) {
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    }
  }
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i][0] == arr[i + 1][0] && arr[i][1] > arr[i + 1][1]) {
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    }
  }
  return answer;
}

let arr = [
  [2, 7],
  [1, 3],
  [1, 2],
  [2, 5],
  [3, 6],
];
console.log(solution(arr));

// 좌표 정렬
function solution2(arr) {
  let answer = arr;

  arr.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    } else {
      return a[0] - b[0];
    }
  });
  return answer;
}

let arr2 = [
  [2, 7],
  [1, 3],
  [1, 2],
  [2, 5],
  [3, 6],
];
console.log(solution2(arr2));
