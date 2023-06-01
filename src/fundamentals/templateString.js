


const nombre = "Ami";
const apellido = "Ami";

//const nombre completo = nombre + ' ' + apellido;
// back tick `
const nombreCompleto = 
`${nombre} 
${apellido}
${1 + 1}`;

console.log(nombreCompleto);

//declarar funciones

function getGreatings(){
    return 'Hola ' + nombre;
}

console.log(`Este es un texto: ${getGreatings(nombre)}`);

