// Importaciones
import heroes, {owners} from '../data/heroes';

// console.log(heroes);


// Find #1

const getHeroesById = (id) => {
	return heroes.find((hero) => {
		if (hero.id === id) {
			return true;
		} else {
			return false;
		}
	});
};

// console.log(getHeroesById(3));

// Find #2 (Alternativa a #1)
const getHeroesById2 = (id) => heroes.find((hero) => hero.id === id);

// console.log(getHeroesById2(2));


// Find #3
const getHeroesByOwner = (owner) => {
	return heroes.find((hero) => hero.owner === owner);
};

// console.log(getHeroesByOwner('DC'));

// Filter
// En la anterior función funciona perfecto el find, sin embargo, el find nos permite retornar el valor del PRIMER elemento que
// cumple con la función, esta vez necesitamos retornar todos los elementos del array que cumplan con la función

const getHeroesByOwner2 = (owner) => {
	return heroes.filter(hero => hero.owner === owner);
};

// console.log(getHeroesByOwner2('DC'));

export {getHeroesById2};