# How to find large prime numbers?

The implementation is based on the following article by Heise[^1] and uses the `Miller-Rabin-Test` to find large prime numbers.

Note, that this is a PoC and does not fully implement the Miller-Rabin-Test.

Execute the Javascript file with two arguments: the first argument is the number to apply the Miller-Rabin-Test and the second argument is the witness.

For numbers below `2047`, the witness should be `2`. For the witness argument, refer to the chapter [Deterministische Varianten](https://de.wikipedia.org/wiki/Miller-Rabin-Test).

Example: 
```bash
$ node mrt.js 11 2
```

[^1]: Kryptografie: Riesige Primzahlen für sichere Verschlüsselungen finden, https://www.heise.de/hintergrund/Kryptografie-Riesige-Primzahlen-fuer-sichere-Verschluesselungen-finden-7370508.html
