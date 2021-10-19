let numero = prompt("Introduce un numero");
let primo = true;


if (isNaN(Number(numero)) == true) {
    console.log("No es un numero");
}
else {
    for (let i = 2; i < numero; i++) {
        if (numero % i == 0) {
            primo = false;
            break;
        }
    }
    if (numero % 2 == 0) {
        if (primo) {
            console.log("Es un numero par y primo");
        } else {
            console.log("Es un numero par y no es primo");
        }
    }

    else {

        if (primo) {
            console.log("Es un numero impar y primo");
        }
        else {
            console.log("Es un numero impar y no es primo");
        }
    }
}