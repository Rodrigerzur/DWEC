let numero = prompt("Introduce numero de asteriscos");
document.write("<h2>Triangulo 1</h2>");
for (let i = 0; i < parseInt(numero); i++) {
    for (let x = 0; x <= i; x++) {
        document.write("* ");
    }
    document.write(`</br>`);
}

document.write("<h2>Triangulo 2</h2>");

for (let i = numero; i > 0; i--) {
    for (let j = 0; j < i; j++) {
        document.write("* ");
    }
    document.write("</br>");
}

document.write("<h2>Triangulo 3</h2>");

for (let i = 1; i <= numero; i++) {
    for (j = 1; j <= numero - i; j++) {
        document.write("&nbsp;");
    }
    for (let j = 1; j <= i; j++) {
        document.write("* ");
    }
    document.write("</br>");
}

document.write("<h2>Triangulo 4</h2>");
for (let i = numero; i > 0; i--) {
    for (let x = 1; x <= numero - i; x++) {
        document.write("&nbsp;");
    }
    for (let j = 0; j < i; j++) {
        document.write("* ");
    }
    document.write("</br>");
}