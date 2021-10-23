//크레인 인형뽑기(카카오 기출)

function solution(board, moves) {
  let answer = 0;
  let stack = [];
  moves = moves.map((x) => x - 1);

  for (let k = 0; k < moves.length; k++) {
    for (let i = 0; i < board.length; i++) {
      if (board[i][moves[k]] && board[i][moves[k]] !== 0) {
        stack.push(board[i][moves[k]]);
        if (stack[stack.length - 2] === board[i][moves[k]]) {
          stack.pop();
          stack.pop();
          answer += 2;
        }
        board[i][moves[k]] = 0;
        break;
      }
    }
  }

  return answer;
}

let a = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];

let b = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(a, b));

//크레인 인형뽑기(카카오 기출)

function solution2(board, moves) {
  let answer = 0;
  let stack = [];

  moves = moves.map((x) => x - 1);

  moves.forEach((pos) => {
    for (let i = 0; i < board.length; i++) {
      if (board[i][pos] !== 0) {
        let tmp = board[i][pos];
        board[i][pos] = 0;
        if (tmp === stack[stack.length - 1]) {
          stack.pop();
          answer += 2;
        } else stack.push(tmp);
        break;
      }
    }
  });

  return answer;
}

let a2 = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];

let b2 = [1, 5, 3, 5, 1, 2, 1, 4];
console.log("solution2 = " + solution2(a2, b2));
