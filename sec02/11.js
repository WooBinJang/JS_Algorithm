function solution(sizes) {
  let answer = 0;

  for (let i = 0; i < sizes.length; i++) {
    let max = sizes[i][1];
    if (sizes[i][0] < sizes[i][1]) {
      sizes[i][1] = sizes[i][0];
      sizes[i][0] = max;
    }
  }
  let max1 = 0;
  let max2 = 0;

  for (let i = 0; i < sizes.length; i++) {
    if (sizes[i][0] > max1) {
      max1 = sizes[i][0];
    }
    if (sizes[i][1] > max2) {
      max2 = sizes[i][1];
    }
  }
  answer = max1 * max2;
  return answer;
}
