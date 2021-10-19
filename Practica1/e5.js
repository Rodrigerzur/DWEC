let passwd = prompt("Introduce tu contraseña");
if (isNaN(passwd) == false && (passwd.toString().length) == 6) {
    var pass = new Boolean(false);
    let i = 0;
    do {
        let n = prompt("Valida tu Contraseña");
        i++;
        if (passwd === n) {
            pass = true;
            alert("Contraseña correcta");
        }
        if (pass == false && i == 3) {
            alert("Has agotado el numero de intentos");
        }
    } while (i < 3 && pass == false);
}
else alert("Formato no permitido");