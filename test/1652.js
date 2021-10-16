function solution(n, input) {
  let result = [];
  let cnt1 = 0;
  let cnt2 = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1; j++) {
      if (input[i][j] === "." && input[i][j + 1] === ".") {
        cnt1++;
        break;
      }
    }
    for (let j = 0; j < n - 1; j++) {
      if (input[j + 1][i] === "." && input[j][i] === ".") {
        cnt2++;
        break;
      }
    }
  }
  result.push(cnt1);
  result.push(cnt2);

  console.log(result[0] + " " + result[1]);

  return result;
}
let n = 5;
let input = [
  [".", ".", ".", ".", "X"],
  [".", ".", "X", "X", "."],
  [".", ".", ".", ".", "."],
  [".", "X", "X", ".", "."],
  ["X", ".", ".", ".", "."],
];

console.log(solution(n, input));
