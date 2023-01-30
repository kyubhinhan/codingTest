/**
 * 문제
 * 문자열 "hello"에서 각 문자를 오른쪽으로 한 칸씩 밀고 마지막 문자는 맨 앞으로 이동시키면 "ohell"이 됩니다.
 * 이것을 문자열을 민다고 정의한다면 문자열 A와 B가 매개변수로 주어질 때, A를 밀어서 B가 될 수 있다면 밀어야 하는 최소 횟수를 return하고
 * 밀어서 B가 될 수 없으면 -1을 return 하도록 solution 함수를 완성해보세요.
 *
 * 제한사항
 * 각 문자의 최대 길이는 100보다 작고
 * A,B는 알파벳 소문자로 이루어져 있다.
 *
 * 해결방법
 * 최대 길이가 모두 100까지임으로 완전 탐색으로 문제를 해결할 수 있다.
 * B를 고정시킨 다음에(비교 기준) A를 밀어준 후 같으면 민 횟수 return하고 다르면 넘어간다.
 * A의 길이보다 민 횟수가 많아지면 같아질 수 없으므로 -1을 return해준다.
 */

function makeMoveRight(word) {
  return word[word.length - 1] + word.slice(0, word.length - 1);
}

function solution(A, B) {
  // 길이가 다른 경우 밀어서 같은 것이 될 수 없다.
  if (A.length !== B.length) return -1;

  // 그냥 같은 경우
  if (A === B) return 0;

  // 밀어서 같은 경우
  let answer = 0;
  let targetA = A;
  while (answer < A.length) {
    // 오른쪽으로 밀어줌
    const newA = makeMoveRight(targetA);
    answer += 1;
    // 같으면 민 횟수를 return함
    if (B === newA) {
      return answer;
    }
    // 다르면 targetA를 갱신함
    targetA = newA;
  }

  // 다른 경우
  return -1;
}

console.log(solution("abc", "abc"));
