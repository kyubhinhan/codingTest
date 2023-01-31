/**
 * 해결 방법
 * 일단 모든 날짜를 2000년 1월 1일 기준으로 일수로 바꾸는 함수가 있으면 편하고(모든 달은 28일)
 * 각 일별로 유효기간을 일수로 바꾸는 함수가 있으면 편하고
 * 마지막으로 현재 일을 보면 되겠다.
 */

function solution(today, terms, privacies) {
  // dictionary 형태로 term을 변형시켜줌
  const termMap = {};
  terms.forEach((term) => {
    const splitTerm = term.split(" ");
    termMap[splitTerm[0]] = Number(splitTerm[1]) * 28;
  });
  // 각 privacies마다 유효기간을 일수로 구해줌
  const expList = [];
  privacies.forEach((privacy) => {
    expList.push(findExp(termMap, privacy));
  });
  // 유효기간을 돌면서 지난 것을 파악해줌
  const answer = [];
  expList.forEach((exp, index) => {
    if (exp <= findDay(today)) {
      answer.push(index + 1);
    }
  });

  return answer;
}

// 2000년 1월 1을 기준으로 하여 얼마나 흘렀는지 계산해주는 함수
function findDay(date) {
  const year = Number(date.slice(0, 4));
  const month = Number(date.slice(5, 7));
  const day = Number(date.slice(8, 10));

  const totalDay = (year - 2000) * 28 * 12 + (month - 1) * 28 + day - 1;
  return totalDay;
}

// 유효기간이 언제까지인지 일수로 표현해주는 함수
function findExp(termMap, privacy) {
  const splitPrivacy = privacy.split(" ");
  const totalDay = findDay(splitPrivacy[0]);
  const exp = totalDay + termMap[splitPrivacy[1]];
  return exp;
}
