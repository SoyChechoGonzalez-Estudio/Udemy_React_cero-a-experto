// Variables y Constantes
// Variables
const nombre = 'Sergio';
const apellido = 'González';

let valorDado = 5;
valorDado = 4;

console.log(nombre, apellido, valorDado);

// Scope
if (true) {
	let valorDado = 6;
	const nombre = 'Peter';
	console.log(valorDado);
	console.log(nombre);
}

console.log(valorDado);
