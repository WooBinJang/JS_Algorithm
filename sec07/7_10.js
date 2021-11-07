// 이분검색
function solution(target, arr) {
  let answer = 0;
  arr.sort((a, b) => a - b);
  let tmp = 0;
  let si = 0;
  let li = arr.length - 1;

  while (target !== tmp) {
    let i = Math.floor((si + li) / 2);
    if (arr[i] > target) {
      li = i;
    } else if (arr[i] < target) {
      si = i;
    } else if (arr[i] === target) {
      tmp = arr[i];
      answer = i + 1;
    }
  }

  return answer;
}

let arr = [23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(32, arr));

// 이분검색
function solution2(target, arr) {
  let answer = 0;
  arr.sort((a, b) => a - b);
  let lt = 0;
  let rt = arr.length - 1;
  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (arr[mid] === target) {
      answer = mid + 1;
      break;
    } else if (arr[mid] > target) {
      rt = mid - 1;
    } else {
      lt = mid + 1;
    }
  }
  return answer;
}

let arr2 = [23, 87, 65, 12, 57, 32, 99, 81];
console.log("solution2 = " + solution2(32, arr2));
