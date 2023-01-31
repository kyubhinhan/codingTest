/**
 * t의 길이가 10,000이 최대임으로 완전 탐색으로 문제를 해결할 수 있다.
 * t의 첫번째 수보다 작거나 같을 때, 수를 비교해서 넣어주면 된다.
 */

function solution(t, p) {
  let answer = 0;
  for (let i = 0; i < t.length - p.length + 1; i++) {
    if (Number(t[i]) > Number(p[0])) continue;
    const targetNumber = Number(t.slice(i, i + p.length));
    if (targetNumber <= Number(p)) {
      answer += 1;
    }
  }
  return answer;
}
