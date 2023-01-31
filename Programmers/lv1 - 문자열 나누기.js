/**
 * 문자열이 없어질 때까지 규칙대로 분리하면 된다.
 */

function solution(s) {
  let answer = 1;
  let remainS = s;

  while (remainS) {
    const ruleAlphabet = remainS[0];
    let same = 1;
    let different = 0;
    let find = false;
    let count = 0;
    for (let i = 1; i < remainS.length; i++) {
      if (same === different) {
        find = true;
        break;
      }
      if (remainS[i] === ruleAlphabet) {
        same += 1;
      } else {
        different += 1;
      }
      count += 1;
    }
    // same이랑 different가 같은게 나오지 않았을 경우
    if (!find) break;

    // 같은게 나왔을 경우
    answer += 1;
    remainS = remainS.slice(count + 1);
  }

  return answer;
}
