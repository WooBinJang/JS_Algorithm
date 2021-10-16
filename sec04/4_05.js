//K번째 큰 수
function solution(n, k, card) {
  let answer = 0;
  let arr = [];
  for (let i = 0; i < card.length; i++) {
    let sum = 0;
    for (let j = 0; j < card.length; j++) {
      if (i !== j) {
        for (let k = 0; k < card.length; k++) {
          if (k !== j && j !== k && i !== k) {
            sum = card[i] + card[j] + card[k];
            arr.push(sum);
          }
        }
      }
    }
  }

  arr.sort(function (a, b) {
    // 내림차순 정렬
    return b - a;
  });

  let uniqueArr = [];
  arr.forEach((element) => {
    if (!uniqueArr.includes(element)) {
      // 빈 배열의 하나씩 돌면서 포함되어 있지 않으면
      uniqueArr.push(element);
    }
  });

  answer = uniqueArr[k - 1];
  return answer;
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));

//K번째 큰 수
function solution2(n, k, card) {
  let answer = 0;
  let tmp = new Set(); // 중복을 허용하지 않음
  for (let i = 0; i < card.length - 2; i++) {
    for (let j = i + 1; j < card.length - 1; j++) {
      for (let k = j + 1; k < card.length; k++) {
        tmp.add(card[i] + card[j] + card[k]);
      }
    }
  }
  let arr = Array.from(tmp).sort((a, b) => b - a); // from

  answer = arr[k - 1];
  return answer;
}

let arr2 = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log("solution2 " + solution2(10, 3, arr));
