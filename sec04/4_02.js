//뒤집은 소수
function solution(arr) {
  let answer = [];

  for (let x of arr) {
    let cnt = 0;
    let tmp = Number(x.toString().split("").reverse().join(""));
    if (tmp !== 1) {
      for (let i = 1; i <= tmp; i++) {
        if (tmp % i === 0) cnt++;
      }
      if (cnt === 2) {
        answer.push(tmp);
      }
    }
  }

  return answer;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));

//뒤집은 소수
function isPrime(num) {
  if (num === 1) return false; // 1은 소수가 아니다

  for (let i = 2; i < parseInt(Math.sqrt(num)); i++) {
    // 소수는 2 부터 제곱근까지 나눌때 0이면 안된다.
    if (num % i === 0) return false;
  }
  return true;
}

function solution2(arr) {
  let answer = [];
  for (let x of arr) {
    let res = 0;
    while (x) {
      let t = x % 10;
      res = res * 10 + t; // 뒤집기
      x = parseInt(x / 10);
    }
    if (isPrime(res)) answer.push(res);
  }

  return answer;
}

let arr2 = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log("solution2 = " + solution2(arr));
