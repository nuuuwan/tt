const HALF_LIFE = 20;
const POINTS_FOR_SUM = 1_000;
export default class Time {
  static getUnixTime() {
    return Date.now() / 1_000.0;
  }

  static actualPoints(totalPoints, deltaTime) {
    let actualPoints, color;
    if (deltaTime < HALF_LIFE) {
      const p = deltaTime / HALF_LIFE;
      actualPoints = Math.ceil(totalPoints - POINTS_FOR_SUM * p);
      color = "#084";
    } else {
      const k = Math.pow(2, -(deltaTime - HALF_LIFE) / HALF_LIFE);
      actualPoints = Math.ceil((totalPoints - POINTS_FOR_SUM) * k);
      color = "#800";
    }
    return { actualPoints, color };
  }
}
