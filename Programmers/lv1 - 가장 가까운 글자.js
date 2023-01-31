/**
 * 해결 방법
 * Map을 이용하여 문제를 해결할 수 있다.
 * 각 문자열을 돌면서 해당 문자가 map의 key로 없다면 결과에 -1을 넣고 map에 해당 index를 넣어준다.
 * 해당 문자가 map의 key로 있다면 index-맵의 해당 키의 값 을 결과에 넣고, 맵의 값을 index로 갱신해준다.
 */

function solution(s) {
  const answer = [];
  const alphabetMap = {};

  s.split("").forEach((alphabet, index) => {
    if (Object.keys(alphabetMap).includes(alphabet)) {
      // key 값이 존재할 때
      answer.push(index - alphabetMap[alphabet]);
      alphabetMap[alphabet] = index;
    } else {
      // 존재하지 않을 때
      alphabetMap[alphabet] = index;
      answer.push(-1);
    }
  });

  return answer;
}
