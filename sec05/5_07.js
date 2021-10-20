//아나그램(해쉬)
function solution(str1, str2) {
  let answer = "NO";
  let map1 = new Map();
  let map2 = new Map();

  for (let x of str1) {
    if (map1.has(x)) {
      map1.set(x, map1.get(x) + 1);
    } else {
      map1.set(x, 1);
    }
  }

  for (let x of str2) {
    if (map2.has(x)) {
      map2.set(x, map2.get(x) + 1);
    } else {
      map2.set(x, 1);
    }
  }
  let cnt = 0;
  for (let [key, val] of map1) {
    for (let [key2, val2] of map2) {
      if (key === key2 && val === val2) {
        cnt++;
      }
    }
  }
  if (cnt === map1.size) {
    answer = "YES";
  }
  return answer;
}

let a = "AbaAeCea";
let b = "baeeACA";
console.log(solution(a, b));

//아나그램(해쉬)
function solution2(str1, str2) {
  let answer = "YES";
  let map = new Map();
  for (let x of str1) {
    if (map.has(x)) {
      map.set(x, map.get(x) + 1);
    } else {
      map.set(x, 1);
    }
  }
  for (let x of str2) {
    if (!map.has(x) || map.get(x) === 0) return "No";
    map.set(x, map.get(x) - 1);
  }
  return answer;
}

let a2 = "AbaAeCe";
let b2 = "baeeACA";
console.log("solution2 = " + solution2(a2, b2));
