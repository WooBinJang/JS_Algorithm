function solution(numbers, hand) {
  let answer = "";
  // hand 왼손 / 오른손만
  let l_p = [3, 0]; // 왼쪽 포인터
  let r_p = [3, 2]; // 오른쪽 포인터
  let tmp = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [0, 0, 0],
  ]; //핸드폰 자판

  for (let k = 0; k < numbers.length; k++) {
    let r_count = 0; // 오른손 거리
    let l_count = 0; // 왼손 거리
    console.log(l_p);
    for (let i = 0; i < 4; i++) {
      //행
      for (let j = 0; j < 3; j++) {
        //열
        if (numbers[k] === tmp[i][j]) {
          r_count = Math.abs(i - r_p[0]) + Math.abs(j - r_p[1]); //(0-3)+ (2-2) 3
          l_count = Math.abs(i - l_p[0]) + Math.abs(j - l_p[1]); // (0-0) + (2-0)
          // console.log(r_count + " / " + l_count);
          if (r_count > l_count) {
            answer += "L";
            l_p = [i, j];
          } else if (r_count < l_count) {
            answer += "R";
            r_p = [i, j];
          } else if (r_count === l_count) {
            if (hand === "right") {
              answer += "R";
            } else {
              answer += "L";
            }
          }
        }
      }
    }
  }

  return answer;
}
let numbers = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5];
let hand = "right";
console.log(solution(numbers, hand));
