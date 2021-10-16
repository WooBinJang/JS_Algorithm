const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  function solution(input) {
    let result = [];
    let cnt1 = 0;
    let cnt2 = 0;

    for (let i = 0; i < input.length; i++) {
      for (let j = 0; j < input.length - 1; j++) {
        if (input[i][j] === "." && input[i][j + 1] === ".") {
          cnt1++;
          break;
        }
      }
      for (let j = 0; j < input.length - 1; j++) {
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

  solution(input);

  process.exit();
});
