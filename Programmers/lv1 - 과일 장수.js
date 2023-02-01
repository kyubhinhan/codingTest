/**
 * 풀이 방법
 * 결국 최대의 이익을 받을려면, 내림차순해서 짤라서 파는 것이 최대일 것 같은데.. 반례가 있나..
 */
function solution(k, m, score) {
  let answer = 0;

  // 내림차순 정렬
  const newScore = score;
  newScore.sort((a, b) => b - a);

  // m씩 짤라서 결과를 확인함
  const repeatCount = Math.floor(score.length / m);
  let checkIndex = -1;
  for (let i = 0; i < repeatCount; i++) {
    checkIndex += m;
    answer += newScore[checkIndex] * m;
  }

  return answer;
}

console.log(solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]));
