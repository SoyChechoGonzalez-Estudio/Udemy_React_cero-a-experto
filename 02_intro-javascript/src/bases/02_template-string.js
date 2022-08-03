const nombre = 'Sergio';
const apellido = 'González';

// const nombreCompleto = nombre + ' ' + apellido;
// console.log(nombreCompleto);

const nombreCompleto = `${nombre} ${apellido}`;
console.log(nombreCompleto);

// Functions
function getRegard(nombre) {
	return `Hola ${nombre}`;
}

console.log(`Este es un texto ${getRegard(nombre)}`);
