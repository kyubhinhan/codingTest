/**
 * 문제
 * 머쓱이는 행운의 숫자 7을 가장 좋아합니다. 정수 배열 array가 매개변수로 주어질 때, 7이 총 몇 개 있는지 return 하도록 solution 함수를 완성해보세요.
 *
 * 제한사항
 * 1 ≤ array의 길이 ≤ 100
 * 0 ≤ array의 원소 ≤ 100,000
 *
 * 해결방법
 * 완전 탐색으로 array를 돌면서 7의 갯수를 세어주면 된다.
 */

function solution(array) {
  let answer = 0;

  array.forEach((number) => {
    answer += countSeven(String(number));
  });

  return answer;
}

// 정규 표현식을 사용하여 7의 갯수를 세어줌
function countSeven(word) {
  const regexp = /7/g;
  return [...word.matchAll(regexp)].length;
}

console.log(solution([10, 29]));
