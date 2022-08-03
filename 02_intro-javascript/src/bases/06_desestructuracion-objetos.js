// Desestructuración de objetos
// Asignación desestructurante

const persona = {
	nombre: 'Tony',
	edad: 45,
	clave: 'Ironman',
};

const {nombre, edad, clave} = persona;
console.log(nombre);
console.log(edad);
console.log(clave);

// Desestructuración en funciones #1
const retornarPersona = (usuario) => {
	const {nombre, edad, clave} = usuario;
	console.log(nombre, edad, clave);
};

retornarPersona(persona);

// Desestructuración en funciones #2
const retornarPersona2 = ({nombre}) => {
	console.log(nombre);
};

retornarPersona2(persona);

// Desestructuración en funciones #3
// Podemos asignar un valor por defecto a una variable, incluso si esa variable no existe en el objeto
// Aunque si exista en el objeto, el valor por defecto no se asignará
const retornarPersona3 = ({nombre, edad, rango = 'Captain'}) => {
	console.log(nombre, edad, rango);
};

retornarPersona3(persona);


// Desestructuración en funciones #4
const useContext = ({nombre, edad, clave}) => {
	return {
		nombreClave: clave,
		anios: edad,
		latlng: {
			lat: 14.12353,
			lng: -12.12353,
		}
	};
};

const {nombreClave, anios, latlng: {lat, lng}} = useContext(persona);
console.log(nombreClave, anios, lat, lng);