export default class Problem {
  static LIMIT_TIMES_TABLE = 31;
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

  static dedupeArr(arr) {
    return [...new Set(arr)];
  }

  static genAnswerArr(a, b) {
    let original = [
      a * b,
      // 1
      a * (b + 1),
      (a + 1) * b,
      a * (b - 1),
      (a - 1) * b,
      // 5, 10
      a * (10 + b),
      a * (b + 5),
      (a + 10) * b,
      (a + 5) * b,
      // 2
    ];
    original = original.filter((n) => n >= 1 && n <= Problem.LIMIT_TIMES_TABLE ** 2 );
    original = Problem.dedupeArr(original);
    return original.sort((a, b) => a - b);
  }

  static genPair() {
    return [Problem.genNumber(), Problem.genNumber()];
  }

  static genPairBiased() {
    const pairList = [
      Problem.genPair(),
      Problem.genPair(),
      Problem.genPair(),
      Problem.genPair(),
    ];
    const sortedPairList = pairList.sort((a, b) => -a[0] * a[1] + b[0] * b[1]);
    console.debug(sortedPairList);
    return sortedPairList[0];
  }

  static gen() {
    const [a, b] = Problem.genPairBiased();
    return new Problem([a, b], Problem.genAnswerArr(a, b));
  }

  static getPointsForCurrent(deltaTime) {
    const p = deltaTime / Problem.HALF_LIFE;
    return Math.ceil(this.POINTS_PER_PROBLEM * (1 - p));
  }
}
