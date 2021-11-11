// 이진트리 순회(깊이우선탐색)
function solution(n) {
  let answer = "";
  let preorder = []; // 전위순회
  let inorder = []; // 중위순회
  let postorder = []; // 후위순회
  function DFS(v) {
    if (v > 7) {
      return;
    } else {
      preorder.push(v);
      DFS(v * 2); // 왼쪽 자식 노드
      inorder.push(v);
      DFS(v * 2 + 1); // 오른쪼 자식 노드
      postorder.push(v);
    }
  }
  DFS(n);
  console.log("전위순회 = " + preorder);
  console.log("중위순회 = " + inorder);
  console.log("후위순회 = " + postorder);
  return answer;
}

console.log(solution(1));
