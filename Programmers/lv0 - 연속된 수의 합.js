/**
 * 문제
 * 연속된 수 num개를 더한 값이 total이 될 때, 정수 배열을 오름차순으로 담아 return하도록 만들어라
 *
 * 조건
 * 1<=num<=100
 * 0<=total<=1000
 * 안되는 케이스는 없다.
 *
 * 풀이
 * 간단한 방적식으로 풀 수 있다.
 * 시작하는 숫자가 a이고 연속된 수가 n이라면
 * a*n 0+1+2+..+n-1 = a*n + n(n-1)/2 = total 이다.
 * 따라서 a = (total-n(n-1)/2)/n 으로 시작되는 수를 구할 수 있다.
 */

function solution(num, total) {
  const startNumber = (total - (num * (num - 1)) / 2) / num;
  const answer = [];
  for (let i = 0; i < num; i++) {
    answer.push(startNumber + i);
  }
  return answer;
}
