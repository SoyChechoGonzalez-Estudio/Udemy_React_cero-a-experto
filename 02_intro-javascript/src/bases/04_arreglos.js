// Arreglos en JS
// Es una colección de elementos que se pueden acceder por un índice numérico y se encuentra dentro de una misma variable.
const arreglo = [1, 2, 3, 4];
let arreglo2 = [...arreglo, 5, 6];
console.log(arreglo2);

// Funciones en JS
const arreglo3 = arreglo.map(function (numero) {
	return numero * 2;
});
console.log(arreglo3);