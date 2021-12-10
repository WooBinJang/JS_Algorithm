//동전교환(냅색 알고리즘)

function solution(m, coin) {
  let answer = 0;
  let tmp = Array.from({ length: coin.length }, () => m + 1);
  function DFS(v, l) {
    if (v === 0) {
      answer = l;
      return;
    } else {
      for (let i = 0; i < coin.length; i++) {
        if (v - coin[i] >= 0) {
          tmp[i] = v - coin[i];
        }
      }
      l++;
      DFS(Math.min(...tmp), l);
    }
  }
  DFS(15, 0);
  return answer;
}

let arr = [1, 2, 5];
console.log(solution(15, arr));

//동전교환(냅색 알고리즘)

function solution2(m, coin) {
  let answer = 0;
  let dy = Array.from({ length: m + 1 }, () => Number.MAX_SAFE_INTEGER);
  dy[0] = 0;
  for (let i = 0; i < coin.length; i++) {
    for (let j = coin[i]; j < dy.length; j++) {
      dy[j] = Math.min(dy[j], dy[j - coin[i]] + 1);
    }
  }
  answer = dy[m];
  return answer;
}

let arr2 = [1, 2, 5];
console.log(solution2(15, arr2));
