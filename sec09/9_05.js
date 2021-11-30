function solution() {
  let answer = "";
  let queue = [];
  queue.push(1);

  while (queue.length !== 0) {
    let x = queue.shift();
    answer += x + " ";
    for (let nv of [x * 2, x * 2 + 1]) {
      if (nv > 7) continue;
      queue.push(nv);
    }
  }
  return answer;
}

console.log(solution());
