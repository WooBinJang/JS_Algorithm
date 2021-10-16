function per(n) {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let ans = [];

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

  let cnt = 0;

  // 기저 조건
  if (n == 3) {
    cnt++;
    for (let i = 0; i < 3; i++) {
      console.log(ans[i] + " ");
    }

    return;
  }

  // 순열에서는 visited로 자신이 뽑혔는지 확인을 한다. (중복 허용X)

  for (let i = 0; i < 10; i++) {
    if (visited[i] === false) {
      //뽑았을 때
      visited[i] = true;
      ans.push(arr[i]);
      per(n + 1);

      //안뽑혔을 때
      visited[i] = false;
    }
  }
  console.log(cnt);
}

per(0);
