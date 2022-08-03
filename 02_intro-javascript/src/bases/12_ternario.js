// Operadores ternarios, Ejemplo #1, con if
const activo = false;
let mensaje;

if (activo) {
	mensaje = 'Activo';
} else {
	mensaje = 'Inactivo';
}

console.log(mensaje);

// Operadores ternarios, Ejemplo #2, con operador ternario

const activo2 = true;
const mensaje2 = (activo2) ? 'Activo' : 'Inactivo';
console.log(mensaje2);

// También podemos ejecutar condigo en el caso de que la condición sea true sin necesidad de entrar a false

const activo3 = true;
const mensaje3 = (activo3) && 'Activo';
console.log(mensaje3);