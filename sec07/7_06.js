// 장난꾸러기 현수
function solution(arr) {
  let answer = [];
  let tmp = arr.map((x) => x); // map 기존 arr를 변경시키지 않는다.
  arr.sort((a, b) => a - b); // js에서 sort는 문자열로 정렬함으로 주의 ex) 99,100 sort -> 100 ,99
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== tmp[i]) {
      answer.push(i + 1);
    }
  }
  return answer;
}
let arr2 = [120, 130, 150, 150, 130, 150];
let arr = [120, 125, 152, 130, 135, 135, 143, 127, 160];
console.log(solution(arr));
