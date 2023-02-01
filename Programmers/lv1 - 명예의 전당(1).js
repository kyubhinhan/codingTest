/**
 * 문제 풀이 방법
 * score의 길이가 최대 1000이므로 완전 탐색으로 문제를 풀어줄 수 있다.
 * 먼저 배열에 집어넣고
 * 배열을 오름차순으로 정렬한다
 * 배열을 최대 길이가 k가 되도록 짜른다.
 * 배열의 마지막 원소를 정답 배열에 넣어준다.
 */

function solution(k, score) {
  let rankingList = [];
  const answer = [];
  score.forEach((value) => {
    rankingList.push(value);
    rankingList.sort((a, b) => b - a);
    rankingList = rankingList.slice(0, k);
    answer.push(rankingList[rankingList.length - 1]);
  });

  return answer;
}

console.log(solution(4, [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000]));
