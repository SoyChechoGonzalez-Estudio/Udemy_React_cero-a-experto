import {getHeroesById2} from './08_import-export';

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

const getHeroByIdAsync = (id) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const hero = getHeroesById2(id);
			if (hero) {
				resolve(hero);
			} else {
				reject('No se pudo encontrar el héroe');
			}
		}, 2000);
	});
};

getHeroByIdAsync(2)
	.then(hero => console.log(hero))
	.catch(console.warn);