// 중복순열 구하기
function solution(n, m) {
  let answer = [];
  let checkArr = Array.from({ length: m }, () => 0);

  function DFS(L) {
    // L 몇중 for문으로 할 지 레벨 수
    if (L === m) {
      answer.push(checkArr.slice());
      // slice() 메서드는 어떤 배열의 begin부터 end까지(end 미포함)에 대한 얕은 복사본을
      // 새로운 배열 객체로 반환합니다. 원본 배열은 바뀌지 않습니다.
    } else {
      for (let i = 1; i <= n; i++) {
        // 가지수  1,2,3
        checkArr[L] = i;
        DFS(L + 1);
      }
    }
  }
  DFS(0);
  return answer;
}

console.log(solution(3, 2));
