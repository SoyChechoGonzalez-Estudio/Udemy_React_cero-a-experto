const persona = {
	nombre: 'Sergio',
	apellido: 'González',
	edad: 26,
	address: {
		ciudad: 'El Retiro',
		zip: 0o55430,
		lat: 14.3232,
		lng: -12.3232,
	}
};

console.table(persona);

// Esta mutación es incorrecta
const persona2 = persona;
persona2.nombre = 'Sergio2';
console.log(persona2);

// Esta mutación es correcta
const persona3 = {...persona};
persona3.nombre = 'Sergio3';
console.log(persona3);