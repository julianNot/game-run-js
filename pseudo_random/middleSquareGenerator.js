export class MiddleSquareGenerator {
  constructor(seed, length) {
    this.seed = seed;
    this.length = length;
  }

  next() {
    this.seed = Math.pow(this.seed, 2);
    const seedString = this.seed.toString().padStart(this.length * 2, '0');
    const startIndex = Math.floor((seedString.length - this.length) / 2);
    const substring = seedString.substring(startIndex, startIndex + this.length);
    return parseInt(substring) / Math.pow(10, this.length);
  }
}