function solution(numbers, hand) {
  let answer = "";
  // hand 왼손 / 오른손만
  let l_p = [3, 0]; // 왼쪽 포인터
  let r_p = [3, 2]; // 오른쪽 포인터
  let tmp = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ["*", 0, "#"],
  ]; //핸드폰 자판

  for (let k = 0; k < numbers.length; k++) {
    console.log(l_p + " / " + r_p);
    let r_count = 0; // 오른손 거리
    let l_count = 0; // 왼손 거리
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 3; j++) {
        if (numbers[k] === tmp[i][j]) {
          if (j === 0) {
            l_p = [i, j]; // 147 은 무조건 왼손
            answer += "L";
          } else if (j === 2) {
            // 369 은 무조건 오른손
            r_p = [i, j];
            answer += "R";
          } else if (j === 1) {
            // 0258 은 거리가까운 순
            r_count = Math.abs(i - r_p[0]) + Math.abs(j - r_p[1]);
            l_count = Math.abs(i - l_p[0]) + Math.abs(j - l_p[1]);
            // 거리
            if (r_count > l_count) {
              answer += "L";
              l_p = [i, j];
            } else if (r_count < l_count) {
              answer += "R";
              r_p = [i, j];
            } else if (r_count === l_count) {
              // 거리가 가까울 경우 왼손잡이는 왼손 오른손 잡이는 오른손
              if (hand === "right") {
                answer += "R";
                r_p = [i, j];
              } else if (hand === "left") {
                answer += "L";
                l_p = [i, j];
              }
            }
          }
        }
      }
    }
  }
  return answer;
}
// LRLLRRLLLRR
// LRLLRRLLLRR
let numbers = [7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2];
let hand = "left";
console.log(solution(numbers, hand));
