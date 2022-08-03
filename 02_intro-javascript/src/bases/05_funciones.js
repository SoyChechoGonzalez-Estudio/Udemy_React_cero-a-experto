// funciones en JS Forma #1
function saludar(nombre) {
	return `Hola ${nombre}`;
}

console.log(saludar('Checho1'));


// funciones en JS Forma #2
const saludar2 = function (nombre) {
	return `Hola ${nombre}`;
};
console.log(saludar2('Checho2'));


// funciones en JS Forma #3
const saludar3 = (nombre) => {
	return `Hola ${nombre}`;
};

console.log(saludar3('Checho3'));


// funciones en JS Forma #4
const saludar4 = (nombre) => `Hola ${nombre}`;
const saludar5 = nombre => `Hola ${nombre}`;
const saludar6 = () => `Hola Mundo`;
console.log(saludar4('Checho4'), saludar5('Checho5'), saludar6('Checho6'));

// funciones en JS Forma #5
const getUser = () => ({
	uid: 'ABC123',
	username: 'El_Checho',
});

const user = getUser();
console.log(user);

// funciones en JS Forma #6
function getUserActive(nombre) {
	return {
		uid: 'ABC456',
		username: nombre,
	};
}

const userActive = getUserActive('Sergio');
console.log(userActive);

// 1. Transforma función anterior en una función de flecha
// 2. Debe retornar un objeto implícito
// 3. Pruebas
const getUserActive2 = (nombre) => ({
	uid: 'ABC456',
	username: nombre,
});

const userActive2 = getUserActive2('Sergio en Arrow function');
console.log(userActive2);