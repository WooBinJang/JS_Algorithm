const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let arr = [];
  let countArr = [];
  let count = 1;
  for (let i = 0; i < Number(input[0]); i++) {
    arr[i] = input[i + 1].split("");
  }

  //
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j][i] === arr[j + 1][i] && arr[j + 1][i] !== undefined) {
        count++;
      } else {
        countArr.push(count);
        count = 1;
      }
    }
    countArr.push(count);
    count = 1;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i][j] === arr[i][j + 1] && arr[i][j + 1] !== undefined) {
        count++;
      } else {
        countArr.push(count);
        count = 1;
      }
    }
    countArr.push(count);
    count = 1;
  }
  // 처음 확인

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j][i] !== arr[j + 1][i] && arr[j + 1][i] !== undefined) {
        // 바꿀 수 있는 것들
        let tmp = arr[j][i];
        arr[j][i] = arr[j + 1][i];
        arr[j + 1][i] = tmp;
        // 바꾸기
        for (let k = 0; k < arr.length; k++) {
          //바꾼 행렬  행 카운트
          if (arr[j][k] === arr[j][k + 1] && arr[j][k + 1] !== undefined) {
            count++;
          } else {
            countArr.push(count);
            count = 1;
          }
        }
        countArr.push(count);
        count = 1;
        for (let k = 0; k < arr.length - 1; k++) {
          // 바꾼 행렬  열 카운트
          if (arr[k][j] === arr[k + 1][j] && arr[k + 1][j] !== undefined) {
            count++;
          } else {
            countArr.push(count);
            count = 1;
          }
        }
        countArr.push(count);
        count = 1;
      }
    }

    for (let j = 0; j < arr.length; j++) {
      if (arr[i][j] !== arr[i][j + 1] && arr[i][j + 1] !== undefined) {
        let tmp = arr[i][j];
        arr[i][j] = arr[i][j + 1];
        arr[i][j + 1] = tmp;

        for (let k = 0; k < arr.length; k++) {
          if (arr[j][k] === arr[j][k + 1] && arr[j][k + 1] !== undefined) {
            count++;
          } else {
            countArr.push(count);
            count = 1;
          }
        }
        countArr.push(count);
        count = 1;

        for (let k = 0; k < arr.length - 1; k++) {
          if (arr[k][j] === arr[k + 1][j] && arr[k + 1][j] !== undefined) {
            count++;
          } else {
            countArr.push(count);
            count = 1;
          }
        }
        countArr.push(count);
        count = 1;
      }
    }
  }

  countArr.sort(function (a, b) {
    return b - a;
  });
  console.log(countArr[0]);
  process.exit();
});
