function per(n) {
  if (n === 3) {
    for (let i = 0; i < n; i++) {
      console.log(ans);
    }
    return;
  }

  for (let i = 0; i < m.length; i++) {
    if (visited[i] === false) {
      visited[i] = true;
      ans[i] = m[i];
      per(n + 1);

      visited[i] = false;
    }
  }
}

// m개중 n개
let m = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let n = 3;
let visited = [
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
];
let ans = [];
console.log(visited);
per(0);
