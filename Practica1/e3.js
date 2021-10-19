var edad;
var sexo;
var lista = "";


for (let i = 1; i < 6; i++) {
    edad = prompt("Introduce la edad");
    sexo = prompt("Introduce el sexo");
    lista = lista + i + ", " + sexo + ", " + edad + " años" + "</br>";
}


document.write(`<p>` + `${lista}` + `</p>`);