// 뮤직비디오(결정알고리즘)
function solution(m, songs) {
  let answer = 0;
  let max = Math.max(...songs);
  while (max) {
    let tmp = max;
    let cnt = 1;
    for (let j = 0; j < songs.length; j++) {
      if (tmp - songs[j] < 0) {
        tmp = max;
        cnt++;
      }
      tmp -= songs[j];
    }
    if (cnt === m) {
      answer = max;
      break;
    }
    max++;
  }

  return answer;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(solution(3, arr));

// 뮤직비디오(결정알고리즘)

function count(songs, mid) {
  let cnt = 1;
  let sum = 0;
  for (let x of songs) {
    if (sum + x > mid) {
      cnt++;
      sum = x;
    } else {
      sum += x;
    }
  }
  return cnt;
}

function solution2(m, songs) {
  let answer;
  let lt = Math.max(...songs);
  let rt = songs.reduce((a, b) => a + b, 0);
  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (count(songs, mid) <= m) {
      answer = mid;
      rt = mid - 1;
    } else {
      lt = mid + 1;
    }
  }
  return answer;
}

let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("solution2 = " + solution2(3, arr2));
