/**
 * 문제
 * 정수 M, N이 매개변수로 주어질 때, M x N 크기의 종이를 최소로 가위질 해야하는 횟수를 return 하도록 solution 함수를 완성해보세요.
 *
 * 제한사항
 * 0<M,N<100
 * 종이를 겹쳐서 자를 수는 없다.
 *
 * 풀이 방법
 * 기초적인 DP문제이다.
 * 작은 문제에 대한 답을 테이블에 기록하고 다음에는 그 테이블의 값을 사용하는 문제이다.
 */

function solution(M, N) {
  const dp = Array.from(Array(100), () => Array(100).fill(0));
  // 초기값 할당
  for (let i = 1; i < 100; i++) {
    dp[i][1] = i - 1;
    dp[1][i] = i - 1;
  }

  for (let i = 2; i < 100; i++) {
    for (let j = 2; j < 100; j++) {
      const first = Math.floor(j / 2);
      const second = j - first;
      dp[i][j] = 1 + dp[i][first] + dp[i][second];
    }
  }

  return dp[M][N];
}
