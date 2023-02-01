/**
 * 해결 방법
 * 수가 주어졌을 때 해당하는 수의 약수의 개수를 구해주는 함수를 만들어주고
 * 각 수를 돌면서 약수의 개수를 구해준 다음 limit를 넘기는지 보고 넘기면 power 안넘기면 그 수를 더해준다.
 */

function solution(number, limit, power) {
  let ironWeight = 0;
  for (let i = 1; i <= number; i++) {
    const measureCount = findMeasureCount(i);
    if (measureCount > limit) {
      ironWeight += power;
    } else {
      ironWeight += measureCount;
    }
  }
  return ironWeight;
}

function findMeasureCount(targetNumber) {
  const max = Math.floor(targetNumber ** 0.5) + 1;
  let count = 0;
  for (let i = 1; i < max; i++) {
    if (targetNumber % i === 0) {
      if (targetNumber / i === i) {
        count += 1;
      } else {
        count += 2;
      }
    }
  }
  return count;
}

console.log(solution(10, 3, 2));
