function random() {
    return Math.random() * (10 - 1) + 1;
}
let aleatorio = Math.trunc(random());
let n;
var acierto = new Boolean(false);
for (let i = 1; i <= 5 && acierto == false; i++) {
    do {
        n = prompt(i + "º Intento para adivinar el numero");
    } while (isNaN(n));
    if (n != null) {

        if (n == aleatorio) {
            acierto = true;
            alert("CORRECTO, Nº de intentos necesarios " + i);
        }
        else {
            if (i != 5) {
                if (n > aleatorio) {
                    alert("INCORRECTO, el numero es menor");
                }
                else if (n < aleatorio) {
                    alert("INCORRECTO, el numero es mayor");
                }
                else {
                    alert("Incorrecto")
                }
            } else {
                alert("Incorrecto, este era el ultimo intento");
            }
        }
    }
    else {
        alert("Juego cancelado");
        break;
    }
}
if (window.confirm("¿Quieres jugar otra vez?") == true) {
    location.reload();
}
else {
    alert("Bye");
}