var lista = "";
let n = parseInt(prompt("Introduce el extremo menor"));
let n2;
do {
    n2 = parseInt(prompt("Introduce el extremo mayor"));
} while (n > n2);

for (let i = parseInt(n); i <= parseInt(n2); i++) {
    if (i % 2 == 0) {
        lista = lista + i + " ";
    }
}
document.write(`<p>` + `${lista}` + ` son multiplos de 2 ` + `</p>`);