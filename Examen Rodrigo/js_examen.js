// Comenzamos todo el proceso cuando la página se haya cargado completamente
window.addEventListener("load", comienzo);

// Función contenedora de todos los procedimientos
function comienzo() {
	//Selección de algunos de los elementos del DOM que necesitaremos
	var listadoTemas; //variable que podéis utilizar para almacenar el archivo json
	let botonDescargar = document.getElementById("descargar_temas");//boton para descargar los temas
	let botonQueDibujo = document.getElementById("que_dibujo");//botón ¿Qué dibujo?
	let selector = document.getElementById("temas");//Desplegable con los temas
	let dibAle = document.getElementById("dibujo_aleatorio");//Celda donde escribiremos el dibujo aleatorio
	let tamLienzo = document.getElementById("tam_lienzo");//Input donde ponemos el tamaño del lienzo
	let botonCrearLienzo = document.getElementById("crear_lienzo");//Botón Crear Lienzo
	let botonBorrar = document.getElementById("borrar");//Botón borrar
	let zonaDibujo = document.getElementById("dibujo");//Tabla en la que vamos a crear el lienzo
	let pincel = document.getElementById("pincel");//Celda donde pondremos el estado del pincel: ACTIVADO O DESACTIVADO
	let paleta = document.getElementById("paleta");//Fila que tiene la paleta de colores. Un color en cada
	var pincelActivo = false;//Variable booleana que guarda el estado del pincel 

	activarPaleta();

	botonCrearLienzo.addEventListener("click", crearLienzo);
	botonBorrar.addEventListener("click", borrarLienzo);
	botonDescargar.addEventListener("click", conexionAJAX);
	botonQueDibujo.addEventListener("click", dibujarAleatorio);
	zonaDibujo.addEventListener("click", activarPincel);

	function activarPaleta() {
		for (let color of paleta.children) {
			color.addEventListener("click", (ev) => {
				for (let c of paleta.children) {
					c.classList.remove("seleccionado");
				}
				ev.target.classList.add("seleccionado");
			});
		}
	}

	function crearLienzo() {
		for (let x = 0; x < tamLienzo.value; x++) {
			var tr = document.createElement("tr");
			tr.classList.add("fila");
			for (let y = 0; y < tamLienzo.value; y++) {
				var td = document.createElement("td");
				td.classList.add("celda");
				tr.appendChild(td);
			}
			zonaDibujo.appendChild(tr);
		}
		botonCrearLienzo.removeEventListener("click", crearLienzo);
	}

	function activarPincel() {
		if (!pincelActivo) {
			pincelActivo = true;
			pincel.innerHTML = "PINCEL ACTIVADO";
			for (tr of zonaDibujo.children) {
				for (td of tr.children) {
					td.addEventListener("mouseover", pintar);
				}
			}
		}
		else {
			pincelActivo = false;
			pincel.innerHTML = "PINCEL DESACTIVADO";
			for (tr of zonaDibujo.children) {
				for (td of tr.children) {
					td.removeEventListener("mouseover", pintar);
				}
			}
		}
	}

	function pintar(evento) {
		var color = evento.target.classList.item(1);
		evento.target.classList.remove(color);
		evento.target.classList.add(document.getElementsByClassName("seleccionado")[0].classList.item(0));
	}

	function borrarLienzo() {
		for (tr of zonaDibujo.children) {
			for (td of tr.children) {
				td.className = "celda";
			}
		}
	}

	function conexionAJAX() {
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function () {
			if (this.readyState == 4 && this.status == 200) {
				llenarLista(this.responseText);

			}
		};
		xmlhttp.open("GET", "temasDibujo.json", true);
		xmlhttp.send();
	}
	function llenarLista(json) {
		var docjson = JSON.parse(json);
		selector.innerHTML="";
		for (var i = 0; i < docjson.TEMAS.length; i++) {
			let tema = docjson.TEMAS[i][0];
				var option =document.createElement("option");
				var texto = document.createTextNode(tema);
				option.appendChild(texto);
				selector.appendChild(option);
		}
	}

	function dibujarAleatorio() {
		if (selector.value=="selecciona"){
			dibAle.innerHTML=="DEBES SELECCIONAR UN TEMA DE LA LISTA";
		}
		else{
			for(t of listadoTemas){
				if(t[0]==selector.value){
					let ale=parseInt(Math.random()*(t.length-1+1));
					dibAle.innerHTML=t[ale];
					break
				}
			}
		}
	}
}

