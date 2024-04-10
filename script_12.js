// Definimos una variable de tipo string para la respuesta:
let r = "";

// Y pedimos el tema al visitante hasta que no se pulse una 'o' u una 'c' 
do {
    r = window.prompt("Pulse 'O' para usar el tema oscuro o 'C' para el claro.");
} while ( ( r.toUpperCase() !== "O" ) && ( r.toUpperCase() !== "C" ) );

//Notese el uso de la función toUpperCase()para que el bucle finalice
// sin importar que la letra se haya indicado en minúscula o mayúscula.
// Obtenemos el elemento al que aplicaremos la clase adecuada
cuerpo = document.querySelector("body");

// Como sabemos que r solo puede contener una 'O' o una 'C'
// podemos usar un simple If para aplicar la clase que corresponda:
if (r.toUpperCase() === "C") {
    cuerpo.setAttribute('class','claro');
} else {
    cuerpo.setAttribute('class','oscuro');
}




