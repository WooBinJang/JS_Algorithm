//자릿수의 합
function solution(n, arr) {
  let answer = 0;
  arr.sort(function (a, b) {
    return b - a;
  }); //내림차순

  let tmp = [];
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    let sub = arr[i]; // 원래 배열은 변화지 않게 다른 변수에 저장한다.
    while (sub !== 0) {
      sum += sub % 10;
      sub = parseInt(sub / 10);
    }
    tmp.push(sum);
  } // 10으로 나눈 나머지를 더하고 원래값은 10으로 나누어서 sum에 더한후 tmp 배열에 각자리수의 합을 push

  let max = 0;
  for (let x of tmp) {
    if (max < x) {
      max = x;
    }
  } // 각자리수 합의 max 값을 구함

  let a = tmp.indexOf(max); // max 값의 인덱스 위치를 찾음 indexof는 같은 값이 있을경우 맨앞의 인데스를 리턴 (내림차순을 한 이유)
  answer = arr[a];
  // max = 11
  return answer;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));

function solution2(n, arr) {
  let answer = 0;
  let max = 0;
  for (let x of arr) {
    let sum = x
      .toString()
      .split("")
      .reduce((a, b) => a + Number(b), 0); //reduce 누적 a에 b를 더해서 누적시킴  초기값은 0
    if (sum > max) {
      max = sum;
      answer = x;
    } else if (sum === max) {
      if (x > answer) answer = x;
    }
  }
  return answer;
}

let arr2 = [128, 460, 603, 40, 521, 137, 123];
console.log(solution2(7, arr));

function solution3(n, arr) {
  let answer = 0;
  return answer;
}

let arr3 = [128, 460, 603, 40, 521, 137, 123];
//console.log(solution2(7, arr));
