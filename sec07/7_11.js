// 뮤직비디오(결정알고리즘)
function solution(m, songs) {
  let answer = 0;
  let sum = 0;
  for (let x of songs) {
    sum += x;
  }
  sum = Math.ceil(sum / 3);
  let cnt = 1;

  for (sum; sum++; ) {
    let sum_tmp = sum;
    for (let i = 0; i < songs.length; i++) {
      if (sum - songs[i] >= 0) {
        sum -= songs[i];
      } else {
        cnt++;
        sum = sum_tmp;
        sum -= songs[i];
      }
      console.log(songs[i] + "  " + sum + "  " + cnt);
    }
    if (cnt !== m) {
      cnt = 1;
    } else {
      answer = sum;
      break;
    }
  }
  return answer;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(solution(3, arr));
