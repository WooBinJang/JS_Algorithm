// 이진트리 넓이우선탐색(BFS)
function solution(s, e) {
  let answer = 0;
  let dis = Array.from({ length: 10001 }, () => 0); //거리
  let ch = Array.from({ length: 10001 }, () => 0); // 한번 한 값은 다시 하지않게 (속도)
  let queue = [];
  queue.push(s);
  ch[s] = 1; // 첫번째 값은 미리 체크
  while (queue.length) {
    let x = queue.shift();
    for (let nx of [x - 1, x + 1, x + 5]) {
      if (nx === e) {
        return dis[x] + 1;
      }
      if (nx > 0 && nx <= 10000 && ch[nx] === 0) {
        ch[nx] = 1;
        queue.push(nx);
        dis[nx] = dis[x] + 1;
      }
    }
  }
  return answer;
}
console.log(solution(8, 3));

function solution2(s, e) {
  let answer = 0;
  let ch = Array.from({ length: 10001 }, () => 0);
  let queue = [];
  queue.push(s);
  ch[s] = 1;
  let L = 0;
  while (queue.length) {
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let x = queue.shift();
      for (let nx of [x - 1, x + 1, x + 5]) {
        if (nx === e) return L + 1;
        if (nx > 0 && nx <= 10000 && ch[nx] === 0) {
          ch[nx] = 1;
          queue.push(nx);
        }
      }
    }
    L++;
  }
  return answer;
}

console.log(solution2(5, 14));
