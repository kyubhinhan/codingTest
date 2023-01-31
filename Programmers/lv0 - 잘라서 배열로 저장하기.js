/**
 * 문제
 * 문자열 my_str과 n이 매개변수로 주어질 때, my_str을 길이 n씩 잘라서 저장한 배열을 return하도록 solution 함수를 완성해주세요.
 *
 * 조건
 * 1 ≤ my_str의 길이 ≤ 100
 * 1 ≤ n ≤ my_str의 길이
 * my_str은 알파벳 소문자, 대문자, 숫자로 이루어져 있습니다.
 *
 * 풀이방법
 * 주어진 문자열이 없어질 때까지 짤라서 배열에 저장해주면 된다.
 */

function solution(my_str, n) {
  const answer = [];
  let remainString = my_str;

  while (remainString.length > 0) {
    const slicePart = remainString.slice(0, n);
    answer.push(slicePart);
    remainString = remainString.slice(n);
  }

  return answer;
}

console.log(solution("abcdef123", 3));
