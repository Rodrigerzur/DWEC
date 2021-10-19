let n;
let factorial = 1;
do {
    n = prompt("Introduce un numero entre 1 y 100 para calcular su factorial");
} while (isNaN(n) || n <= 0 || n > 100);

for (let i = 1; i <= n; i++) {
    factorial = factorial * i;
}

alert(factorial);