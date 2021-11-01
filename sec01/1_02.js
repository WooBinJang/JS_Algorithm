//삼각형 판별하기
function solution(a, b, c) {
  let max;
  let temp = 0;
  if (a > b) {
    max = a;
    temp += b;
  } else {
    max = b;
    temp += a;
  }

  if (max < c) {
    max = c;
    temp += b;
  } else {
    temp += c;
  }
  console.log("temp =" + temp);
  console.log("max =" + max);

  if (max < temp) {
    return "YES";
  } else {
    return "NO";
  }
}

console.log(solution(13, 33, 17));
