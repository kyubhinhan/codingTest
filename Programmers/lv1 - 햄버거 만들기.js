/**
 * 풀이 방법
 * 스택을 사용하여 해결하는 문제이다.
 * 스택에 재료를 넣고, 스택의 끝 4 자리가 1,2,3,1이 되면 제거해주면 된다.
 */

function solution(ingredient) {
  let burgerCount = 0;
  const stk = [];

  for (let i = 0; i < ingredient.length; i++) {
    stk.push(ingredient[i]);
    if (
      stk[stk.length - 1] === 1 &&
      stk[stk.length - 2] === 3 &&
      stk[stk.length - 3] === 2 &&
      stk[stk.length - 4] === 1
    ) {
      burgerCount += 1;
      stk.splice(stk.length - 4);
    }
  }
  return burgerCount;
}
