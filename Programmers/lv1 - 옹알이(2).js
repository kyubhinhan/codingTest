/**
 * 문제 풀이 방법
 * 옹알이에서 연속해서 발음할 수 없는 것이 추가되었다.
 * @param {*} babbling
 * @returns
 */

function solution(babbling) {
  let answer = 0;

  babbling.forEach((word) => {
    if (canSpeak(word)) {
      answer += 1;
    }
  });

  return answer;
}

function canSpeak(word) {
  let remainWord = word;
  const speakableWordList = ["aya", "ye", "woo", "ma"];

  while (remainWord.length > 0) {
    let reduce = false;
    for (let i = 0; i < speakableWordList.length; i++) {
      const speakableWordLength = speakableWordList[i].length;
      if (remainWord.slice(0, speakableWordLength) === speakableWordList[i]) {
        if (
          remainWord.slice(speakableWordLength, 2 * speakableWordLength) !==
          speakableWordList[i]
        ) {
          remainWord = remainWord.slice(speakableWordLength);
          reduce = true;
        }
      }
    }
    if (!reduce) return false;
  }
  return true;
}
