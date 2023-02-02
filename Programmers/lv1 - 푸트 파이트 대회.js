/**
 * 풀이 방법
 * 푸드 배열을 돌면서, 나누기 2한 몫을 반복횟수로 문자열을 하나 만든 다음 이 문자열을 뒤집어서 붙이면 된다.
 */

function solution(food) {
  let firstPerson = "";
  for (let i = 1; i < food.length; i++) {
    const foodWeight = food[i];
    const foodWeightForOnePerson = Math.floor(foodWeight / 2);
    for (let j = 0; j < foodWeightForOnePerson; j++) {
      firstPerson += String(i);
    }
  }
  const secondPerson = firstPerson.split("").reverse().join("");
  const answer = firstPerson + "0" + secondPerson;
  return answer;
}

console.log(solution([1, 7, 1, 2]));
