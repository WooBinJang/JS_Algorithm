function s(test) {
  let result = [];
  let arr = new Array();
  let j = 1;
  for (let i = 0; i < 30; i++) {
    arr.push(j);
    j++;
  } // 1 ~ 30 까지 배열 생성

  for (let j = 0; j < arr.length; j++) {
    if (test.indexOf(arr[j]) === -1) {
      result.push(arr[j]);
    }
  }

  return result;
}

let test = [
  3, 1, 4, 5, 7, 9, 6, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
  24, 25, 26, 27, 28, 29, 30,
];

console.log(s(test));
