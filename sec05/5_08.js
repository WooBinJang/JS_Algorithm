//모든 아나그램 찾기(해쉬, 투포인터, 슬라이딩 윈도우)
function solution(s, t) {
  let answer = 0;
  let tmp = "";
  let arr = [];

  let map = new Map();
  for (let x of t) {
    if (map.has(x)) map.set(x, map.get(x) + 1);
    else map.set(x, 1);
  }

  for (let i = 0; i < s.length; i++) {
    tmp += s[i];
    if (tmp.length === t.length) {
      arr.push(tmp);
      tmp = "";
      i = i - (t.length - 1);
    }
  }

  for (let x of arr) {
    let cnt = 0;
    for (let i = 0; i < x.length; i++) {
      if (map.has(x[i]) && map.get(x[i]) !== 0) {
        cnt++;
        map.set(x[i], map.get(x[i]) - 1);
      }
    }
    // map의 value 값을 0으로 초기화
    for (let z of t) {
      map.set(z, 0);
    }

    // 기존 map의 value로
    for (let z of t) {
      map.set(z, map.get(z) + 1);
    }

    if (cnt === t.length) {
      answer++;
    }
  }
  return answer;
}

let a = "bacaAacba";
let b = "abc";
console.log(solution(a, b));

//모든 아나그램 찾기(해쉬, 투포인터, 슬라이딩 윈도우)

function compareMaps(map1, map2) {
  if (map1.size !== map2.size) return false; // size는 키의 개수를 의미
  for (let [key, val] of map1) {
    if (!map2.has(key) || map2.get(key) !== val) return false; // key가 있는지? 또는  value가 같은지
  }
  return true;
}

function solution2(s, t) {
  let answer = 0;
  let th = new Map();
  let sh = new Map();

  for (let x of t) {
    if (th.has(x)) th.set(x, th.get(x) + 1);
    else th.set(x, 1);
  }

  let len = t.length - 1;
  for (let i = 0; i < len; i++) {
    if (sh.has(s[i])) sh.set(s[i], sh.get(s[i]) + 1);
    else sh.set(s[i], 1);
  } // 2개의 key,value를 가진 map 생성 (Sliding Window)

  let lt = 0;
  for (let rt = len; rt < s.length; rt++) {
    // (Two Pointers Algorithm)
    if (sh.has(s[rt])) sh.set(s[rt], sh.get(s[rt]) + 1);
    // 더하기
    else sh.set(s[rt], 1);
    if (compareMaps(sh, th)) answer++; //비교
    sh.set(s[lt], sh.get(s[lt]) - 1); //빼기
    if (sh.get(s[lt]) === 0) {
      sh.delete(s[lt]);
    }
    lt++;
  }
  return answer;
}

let a2 = "bacaAacba";
let b2 = "abc";
console.log("solution2 = " + solution2(a2, b2));
