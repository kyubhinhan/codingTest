/**
 * 풀이 방법
 * 완전 탐색으로 숫자의 갯수를 세어준 후, 이를 합하여 수를 만들고 이를 제출해준다.
 * 연산량에 주의하여 풀어주면 된다.
 */

function solution(X, Y) {
  let answer = "";

  let numberXCount = [];
  let numberYCount = [];
  let arrayX = X.split("");
  let arrayY = Y.split("");

  for (let i = 9; i >= 0; i--) {
    const xCount = arrayX.reduce((acc, cur) => {
      if (cur === String(i)) {
        return acc + 1;
      } else {
        return acc;
      }
    }, 0);

    const yCount = arrayY.reduce((acc, cur) => {
      if (cur === String(i)) {
        return acc + 1;
      } else {
        return acc;
      }
    }, 0);

    numberXCount.push(xCount);
    numberYCount.push(yCount);
  }

  for (let i = 0; i < numberXCount.length; i++) {
    let addNumber = String(9 - i).repeat(
      Math.min(numberXCount[i], numberYCount[i])
    );
    answer += addNumber;
  }

  if (!answer) return "-1";
  if (answer[0] === "0") return "0";

  return answer;
}
