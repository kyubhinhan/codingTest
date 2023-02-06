/**
 * 풀이 방법
 * 배열의 길이가 최대 13이므로 완전 탐색으로 문제를 풀 수 있다.
 * 13C3 = 13*12*11/(3*2*1)
 *
 * dfs로 3개의 index가 쌓일 때까지 돌려주고 쌓이면, 0인지 확인해서 계산해주면 된다.
 */

function solution(number) {
  let answer = 0;
  const targetNumber = 3;

  function getThreeNumber(targetList) {
    if (targetList.length === targetNumber) {
      let sum = targetList.reduce((acc, cur) => {
        return acc + number[cur];
      }, 0);
      if (!sum) answer += 1;
      return;
    }

    for (let i = 0; i < number.length; i++) {
      if (!targetList.includes(i)) {
        getThreeNumber([...targetList, i]);
      }
    }
  }

  getThreeNumber([]);
  answer = answer / 6;

  return answer;
}

console.log(solution([-2, 3, 0, 2, -5]));
