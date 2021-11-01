// 세 수 중 최솟값
function solution(a, b, c) {
  if (a > b) {
    if (b > c) {
      return c;
    } else {
      return b;
    }
  } else {
    if (a > c) {
      return c;
    } else {
      return a;
    }
  }
}

console.log(solution(6, 5, 11));
