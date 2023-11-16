export class CongruentialGenerator {
  constructor() {
    this.seed = new Date().getTime();
    this.a = 1664525;
    this.c = 1013904223;
    this.m = Math.pow(2, 32);
  }

  next() {
    this.seed = (this.a * this.seed + this.c) % this.m;
    return this.seed / this.m; // Normalizando el resultado entre 0 y 1
  }
}