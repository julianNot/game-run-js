# Generación Pseudoaleatoria en el Juego - Aventuras Caninas

Este juego utiliza métodos numéricos para la generación de números pseudoaleatorios con el objetivo de crear comportamientos y eventos aleatorios en el entorno del juego. Aquí se describen los métodos implementados:

## Métodos Implementados

### Montecarlo

El método de Montecarlo se utiliza para generar valores aleatorios basados en la estimación de áreas. En este juego, se emplea para la generación de eventos como la aparición de enemigos o power-ups en ubicaciones aleatorias.

### XORShift

XORShift es un generador de números pseudoaleatorios conocido por su simplicidad y rapidez en comparación con otros algoritmos más complejos. En el juego, XORShift se utiliza para determinar el comportamiento de ciertos elementos, como la dirección de movimiento de los enemigos voladores.

### Cuadrados Medios

El método de Cuadrados Medios se utiliza para generar secuencias pseudoaleatorias a través de la repetición de operaciones sobre una semilla. En el juego, se emplea para establecer la posición inicial y velocidad de los enemigos que descienden desde la parte superior de la pantalla.

### Congruencia Lineal

La Congruencia Lineal es un método clásico de generación pseudoaleatoria. Se utiliza en el juego para controlar la generación de elementos en el entorno, como la frecuencia de aparición de enemigos o eventos especiales.

## Implementación en el Juego

Cada método de generación pseudoaleatoria se ha integrado de manera específica en diferentes aspectos del juego:

- Montecarlo: Efectos de colisión
- XORShift: Colisiones con los enemigos
- Cuadrados Medios: Animación de los movimientos del personaje principal
- Congruencia Lineal: Ubicacíon de los enemigos

## Cómo Ejecutar el Juego

1. Clona este repositorio.
2. Abre el archivo `index.html` en tu navegador.

¡Disfruta del juego y explora cómo los diferentes métodos de generación pseudoaleatoria contribuyen a la experiencia de juego única!
