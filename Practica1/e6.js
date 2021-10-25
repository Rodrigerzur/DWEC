let numeroAlumnos = parseInt(prompt("Introduce el numero de alumnos a gestionar"));
let notaTeorica;
let notaPractica;
let actitud;
var nombre = "";
var numExp = "";
var lista = "";
let media = 0;
let mediaPrac = 0;
let mediaTeo = 0;
let mediaAct = 0;

for (let i = 0; i < numeroAlumnos; i++) {

    nombre = prompt("Introduce el nombre del " + (i + 1) + "º alumno");
    numExp = prompt("Introduce el numero de expediente del " + (i + 1) + "º alumno");

    do {
        notaPractica = prompt("Introduce la nota en la parte practica del " + (i + 1) + "º alumno");
        if (isNaN(notaPractica) || notaPractica > 10 || notaPractica < 0) {
            alert("Numero incorrecto, pruebe de nuevo");
        }
    } while (isNaN(notaPractica) || notaPractica > 10 || notaPractica < 0);

    do {
        notaTeorica = prompt("Introduce la nota en la parte teorica del " + (i + 1) + "º alumno");
        if (isNaN(notaTeorica) || notaTeorica > 10 || notaTeorica < 0) {
            alert("Numero incorrecto, pruebe de nuevo");
        }
    } while (isNaN(notaTeorica) || notaTeorica > 10 || notaTeorica < 0);

    do {
        actitud = prompt("Introduce la calificacion en base a la actitud del " + (i + 1) + "º alumno");
        if (isNaN(actitud) || actitud > 10 || actitud < 0) {
            alert("Numero incorrecto, pruebe de nuevo");
        }
    } while (isNaN(actitud) || actitud > 10 || actitud < 0);

    let notaFinal = ((notaPractica * 0.40) + (notaTeorica * 0.30) + (actitud * 0.10));
    media = media + notaFinal;
    mediaPrac = parseInt(mediaPrac) + parseInt(notaPractica);
    mediaTeo = parseInt(mediaTeo) + parseInt(notaTeorica);
    mediaAct = parseInt(mediaAct) + parseInt(actitud);
    lista = lista + numExp + ", " + nombre + ", " + " Nota Practica: " + notaPractica + ", Nota Teorica: " + notaTeorica + ", Actitud: " + actitud + ", Nota Final: " + notaFinal + "</br>";
}
document.write(`<p>` + `${lista}` + `</p>`);
document.write(`<p>` + `La nota media final de todos los alumnos es ` + `(${media / numeroAlumnos})` + `</p>`);
document.write(`<p>` + `La nota media en la parte practica de todos los alumnos es ` + `(${parseInt(mediaPrac) / parseInt(numeroAlumnos)})` + `</p>`);
document.write(`<p>` + `La nota media en la parte teorica de todos los alumnos es ` + `(${parseInt(mediaTeo) / parseInt(numeroAlumnos)})` + `</p>`);
document.write(`<p>La nota media en cuanto a actitud de todos los alumnos es (${parseInt(mediaAct) / parseInt(numeroAlumnos)})</p>`);