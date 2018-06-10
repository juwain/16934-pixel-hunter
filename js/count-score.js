const SHORT_ANSWER_MAX_TIME = 10;
const LONG_ANSWER_MIN_TIME = 20;
const MIN_ANSWERS_COUNT = 10;
const ANSWER_SCORE_COUNT = 100;
const ANSWER_SCORE_CORRECTION = 50;

export const countScore = (arrAnswers, livesCount) => {
  let scoreCount = 0;

  if (arrAnswers.length < MIN_ANSWERS_COUNT || livesCount === 0) {
    return -1;
  }

  arrAnswers.forEach((answer) => {
    if (answer.isRight) {
      scoreCount += ANSWER_SCORE_COUNT;

      if (answer.time < SHORT_ANSWER_MAX_TIME) {
        scoreCount += ANSWER_SCORE_CORRECTION;
      } else if (answer.time >= LONG_ANSWER_MIN_TIME) {
        scoreCount -= ANSWER_SCORE_CORRECTION;
      }
    }
  });

  if (arrAnswers.length >= MIN_ANSWERS_COUNT) {
    for (let i = 0; i < livesCount; i++) {
      scoreCount += ANSWER_SCORE_CORRECTION;
    }
  }

  return scoreCount;
};
