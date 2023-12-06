export default class Number {
  constructor(n) {
    this.n = n;
  }

  isPrime() {
    if (this.n < 2) {
      return false;
    }
    for (let i = 2; i < this.n; i++) {
      if (this.n % i === 0) {
        return false;
      }
    }
    return true;
  }

  isEven() {
    return this.n % 2 === 0;
  }

  isOdd() {
    return !this.isEven();
  }
}
