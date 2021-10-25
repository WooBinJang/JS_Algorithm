//공주 구하기
function solution(n, k) {
  let answer = 0;
  let arr = [];
  let turn = 0;
  let cnt = 0;

  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }

  for (let i = 0; turn < n - 1; i++) {
    if (i >= arr.length) {
      i -= arr.length;
    }
    if (arr[i] !== 0) {
      cnt++;
    }
    if (cnt === k) {
      arr[i] = 0;
      cnt = 0;
      turn++;
    }
  }

  for (let x of arr) {
    if (x !== 0) answer = x;
  }

  return answer;
}
console.log(solution(8, 3));

//공주 구하기 queue
function solution2(n, k) {
  let answer = 0;
  let queue = Array.from({ length: 8 }, (v, i) => i + 1);
  while (queue.length) {
    // 0 일때 fasle
    for (let i = 1; i < k; i++) {
      queue.push(queue.shift()); // 맨앞 요소를 2번 맨뒤로 푸쉬
    }
    queue.shift(); // k번째인 요소 삭제
    if (queue.length === 1) {
      answer = queue.shift(); // 마지막 남은 요소 삭제
    }
  }
  console.log(queue);

  return answer;
}

console.log("solution2 = " + solution2(8, 3));
