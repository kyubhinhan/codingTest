/**
 * 문제
 * 등차 수열 또는 등비 수열이 매개변수로 주어질 때 마지막 원소 다음에 올 숫자를 return하라
 *
 * 조건
 * 배열의 길이 2 ~ 1000
 * 배열의 원소 -1000 ~ 2000
 *
 * 풀이방법
 * 등차 또는 등비 수열이므로,
 * 등차일 때 -> 등차 수열로 구해주고
 * 아니면 등비로 해준다.
 *
 */

// 등차수열이 맞는지 확인해주는 함수
// 배열의 원소가 3개 이상일때만 입력된다고 설계함
function checkSequence(common) {
  return common[0] - common[1] === common[1] - common[2];
}

function solution(common) {
  if (common.length === 2) {
    // 등차 수열로 가능할 때
    if (
      2 * common[1] - common[0] >= -1000 &&
      2 * common[1] - common[0] <= 2000
    ) {
      return 2 * common[1] - common[0];
    }
    // 등비 수열일때
    return (common[1] * common[1]) / common[0];
  }
  // 등차수열일 때
  if (checkSequence(common)) {
    return 2 * common[common.length - 1] - common[common.length - 2];
  }
  // 등비수열일 때
  return common[common.length - 1] ** 2 / common[common.length - 2];
}

console.log(solution([2, 4, 8]));
