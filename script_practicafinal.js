// Seleccionamos el documento al que añadir el botón
let pagina = document.querySelector("body");

//Creamos el botón, le damos un id para acceder a él
//desde la hoja de estilos, y le añadimos el texto:
boton = document.createElement("button");
boton.setAttribute("id","tema");
boton.append("Cambiar el fondo");

//Añadimos el botón al inicio de la página
pagina.prepend(boton);

function cambiaTema(){
	if ( ( pagina.className === "claro") || (pagina.className === "") ) {
		pagina.setAttribute("class", "oscuro");
	} else {
		pagina.setAttribute("class", "claro");
	}
}

// En el botón, asociamos al evento click la ejecuación de la función:
boton.addEventListener("click", cambiaTema);











