export class MonteCarloPi {
  constructor(iterations) {
    this.iterations = iterations;
  }

  estimatePi() {
    let insideCircle = 0;

    for (let i = 0; i < this.iterations; i++) {
      const x = Math.random();
      const y = Math.random();

      // Verificar si el punto (x, y) está dentro del círculo unitario
      if (x * x + y * y <= 1) {
        insideCircle++;
      }
    }

    // Calcular la estimación de π basada en la proporción de puntos dentro del círculo
    const piEstimation = (insideCircle / this.iterations) * 4;

    return piEstimation;
  }
}