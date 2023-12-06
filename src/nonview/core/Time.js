export default class Time {
  static getUnixTime() {
    return Date.now() / 1_000.0;
  }
}
