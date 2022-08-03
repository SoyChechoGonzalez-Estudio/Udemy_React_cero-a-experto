import {getHeroesById2} from './bases/08_import-export';

/*const promesa = new Promise((resolve, reject) => {
	setTimeout(() => {
		// Tarea
		// Importar
		const hero = getHeroesById2(3);
		// resolve(hero);
		resolve(hero);
		// reject('No se pudo encontrar el héroe');
	}, 2000);
});

promesa.then((hero) => {
	console.log(`Heroe ${hero}`);
})
	.catch((err) => {
		console.warn(err);
	});*/

const getHeroByIdAsync = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			// const hero = getHeroesById2(3);
			// console.log(getHeroesById2(3));
			resolve(getHeroesById2(3));
		}, 2000);
	});
};

getHeroByIdAsync(2)
	.then((hero) => {
		console.log(`Heroe ${hero}`);
	});