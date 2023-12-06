export default class Problem {
  static LIMIT_TIMES_TABLE = 9;
  static HALF_LIFE = 20;
  static POINTS_PER_PROBLEM = 1_000;

  constructor(correctAnswer, candidateAnswerList) {
    this.correctAnswer = correctAnswer;
    this.candidateAnswerList = candidateAnswerList;
  }

  static genRandomInt(minNumber, maxNumber) {
    return Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
  }

  static genNumber() {
    return Problem.genRandomInt(1, Problem.LIMIT_TIMES_TABLE);
  }

  static shuffleArr(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  static genAnswerArr(a, b) {
    return Problem.shuffleArr([
      a * b,
      a * (b + 1),
      (a + 1) * b,
      a * (b - 1),
      (a - 1) * b,
      a * (10 + b),
      a * (b + 5),
      (a + 10) * b,
      (a + 5) * b,
      a * b - 2,
      a * b + 2,
      Math.floor((a * b) / 2),
      a * b * 2,
    ]);
  }

  static gen() {
    const a = Problem.genNumber();
    const b = Problem.genNumber();
    return new Problem([a, b], Problem.genAnswerArr(a, b));
  }

  static getPointsForCurrent(deltaTime) {
    const p = deltaTime / Problem.HALF_LIFE;
    return Math.ceil(this.POINTS_PER_PROBLEM * (1 - p));
   }
}
