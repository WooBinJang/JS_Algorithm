// Least Recently Used(카카오 캐시 문제 변형)
function solution(size, arr) {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    let check = true;
    if (answer.length >= size) {
      for (let j = 0; j < answer.length; j++) {
        if (arr[i] === answer[j]) {
          answer.unshift(arr[i]);
          answer.splice(j + 1, 1);
          check = false;
          break;
        } else {
          check = true;
        }
      }
      if (check) {
        answer.pop();
        answer.unshift(arr[i]);
      }
    } else {
      for (let j = 0; j < answer.length; j++) {
        if (arr[i] === answer[j]) {
          answer.unshift(arr[i]);
          answer.splice(j + 1, 1);
          check = false;
          break;
        } else {
          check = true;
        }
      }
      if (check) {
        answer.unshift(arr[i]);
      }
    }
  }
  return answer;
}

let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr));

// Least Recently Used(카카오 캐시 문제 변형)
function solution2(size, arr) {
  let answer = Array.from({ length: size }, () => 0);

  arr.forEach((x) => {
    let pos = -1;
    for (let i = 0; i < answer.length; i++) {
      if (x === answer[i]) pos = i;
    }
    if (pos === -1) {
      for (let j = answer.length - 1; j >= 1; j--) {
        answer[j] = answer[j - 1];
      }
    } else {
      for (let j = pos; j >= 1; j--) {
        answer[j] = answer[j - 1];
      }
    }
    answer[0] = x;
  });
  return answer;
}

let arr2 = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution2(5, arr2));

// Least Recently Used(카카오 캐시 문제 변형)
function solution3(size, arr) {
  let answer = Array.from({ length: size }, () => 0);

  arr.forEach((x) => {
    let pos = -1;
    for (let i = 0; i < answer.length; i++) {
      if (x === answer[i]) pos = i;
    }
    if (pos === -1) {
      answer.unshift(x);
      if (answer.length > size) answer.pop();
    } else {
      answer.splice(pos, 1);
      answer.unshift(x);
    }
    answer[0] = x;
  });
  return answer;
}

let arr3 = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution3(5, arr3));
