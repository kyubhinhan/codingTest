//  문제
//  "aya", "ye", "woo", "ma" 를 최대 한 번씩만 사용해 조합한 발음 밖에 하지 못한다.
//  문자열 배열이 주어졌을 때, 조카가 발음할 수 있는 단어의 갯수를 return해라

// 조건
// 문자열 배열의 길이는 100까지
// 한 단어당 최대 길이는 15
// 문자열은 알파벳 소문자로만 이루어져 있다.

// 해결방법
// 완전 탐색으로 문제를 해결할 수 있다.(연산 : 100 * 4 -> 400 밖에 안 됨)
// 우선 최대 한 번씩만 사용해야 함으로 단어의 길이가 10보다 큰 것은 넘어간다.
// 처음에는 정규식으로 해줄려고 했는데 이럴 때 반례가 있다(반례 wyeoo)
// 따라서 발음 가능한 단어를 모두 돌면서 처음 단어가 없어질 때까지 돌려주었다.

function canSpeak(word) {
  let remainWord = word;
  const speakableWordList = ["aya", "ye", "woo", "ma"];

  if (word.length > 10) return false;

  while (remainWord.length > 0) {
    let reduce = false;
    for (let i = 0; i < speakableWordList.length; i++) {
      const speakableWordLength = speakableWordList[i].length;
      if (remainWord.slice(0, speakableWordLength) === speakableWordList[i]) {
        remainWord = remainWord.slice(speakableWordLength);
        reduce = true;
      }
    }
    if (!reduce) return false;
  }
  return true;
}

function solution(babbling) {
  let answer = 0;

  babbling.forEach((word) => {
    if (canSpeak(word)) {
      answer += 1;
    }
  });

  return answer;
}
