//학급 회장(해쉬)
function solution(s) {
  let answer;
  let arr = [0, 0, 0, 0, 0];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "A") {
      arr[0]++;
    } else if (s[i] === "B") {
      arr[1]++;
    } else if (s[i] === "C") {
      arr[2]++;
    } else if (s[i] === "D") {
      arr[3]++;
    } else if (s[i] === "E") {
      arr[4]++;
    }
  }
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === max) {
      if (i === 0) {
        answer = "A";
      } else if (i === 1) {
        answer = "B";
      } else if (i === 2) {
        answer = "C";
      } else if (i === 3) {
        answer = "D";
      } else if (i === 4) {
        answer = "E";
      }
    }
  }
  return answer;
}

let str = "BACBACCACCBDEDE";
console.log(solution(str));

//학급 회장(해쉬)
function solution2(s) {
  let answer;
  let map = new Map(); // Map 객체 생성

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      // .has(key) key가 있을경우 true
      map.set(s[i], map.get(s[i]) + 1); // .set(key,value)  map의 key와 value를 가진 요소 생성   // .get(key)  map의 value 가져오기
    } else {
      map.set(s[i], 1);
    }
  }
  let max = 0;
  for (let [key, val] of map) {
    // map 객체 for문 돌리기
    if (val > max) {
      max = val;
      answer = key;
    }
  }

  return answer;
}

let str2 = "BACBACCACCBDEDE";

console.log("solution2 = " + solution2(str2));
