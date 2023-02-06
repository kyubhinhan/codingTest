/**
 * 풀이 방법
 * 규칙을 찾아서 푸는 문제
 * 주어진 조건대로 식을 만들어서 풀어주면 됨
 */

function solution(a, b, n) {
  let answer = 0;
  let target = n;
  let share = Math.floor(target / a) * b;
  let rest = target % a;

  while (share !== 0) {
    answer += share;
    target = share + rest;
    share = Math.floor(target / a) * b;
    rest = target % a;
  }

  return answer;
}

console.log(solution(3, 1, 20));
