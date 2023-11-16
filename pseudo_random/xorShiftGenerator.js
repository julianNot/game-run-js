export class XORShiftGenerator {
  constructor() {
    this.state = Date.now() || 1;
  }

  next() {
    let x = this.state;
    x ^= (x << 21);
    x ^= (x >>> 35);
    x ^= (x << 4);
    this.state = x;
    return (x & 0x7FFFFFFF) / 0x7FFFFFFF; // Normaliza el resultado entre 0 y 1
  }
}