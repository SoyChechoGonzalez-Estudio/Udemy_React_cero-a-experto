// Desestructuración de arreglos
const personajes = ['Goku', 'Vegeta', 'Trunks'];

// Desestructuración #1
console.log(personajes[0]);
console.log(personajes[1]);
console.log(personajes[2]);

// Desestructuración #2
// Debemos indicar el índice del arreglo que queremos desestructurar, si queremos llegar a un elemento que está más adelante en el arreglo,
// debemos ignorar los elementos que están antes del índice que queremos desestructurar y eso lo logramos con una coma (,), ejemplos en p2 y p3.
const [p1] = personajes;
console.log(p1);

const [, p2] = personajes; // p2 = vegeta, Con la coma ignoramos el primer elemento del arreglo y nos quedamos con el segundo elemento del arreglo (p2)
console.log(p2);

const [, , p3] = personajes; // p3 = trunks, Con la coma ignoramos el primer y segundo elemento del arreglo y nos quedamos con el tercer elemento del arreglo (p3)
console.log(p3);

// Desestructuración #3 con Funciones
const retornarArreglo = () => {
	return ['ABC', 123];
};

const [letra, numeros] = retornarArreglo();
console.log(letra, numeros);

// Desestructuración #4 con Funciones
const useState = (valor) => {
	return [valor, () => {
		console.log('Hola Mundo');
	}];
};

const arr = useState('Goku');
arr[1](); // Hola Mundo


// Tarea
// 1. El primer valor del arreglo se llamará nombre
// 2. El segundo valor del arreglo se llamará setNombre
// Imprimir en consola el nombre

const useState2 = (nombre) => {
	return [nombre, () => {
		console.log('Hola Gokú');
	}];
};

const [nombre, setNombre] = useState2('Goku');
console.log(nombre);
setNombre();