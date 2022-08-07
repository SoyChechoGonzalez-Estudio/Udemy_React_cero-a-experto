import {getHeroeById, getHeroesByOwner} from '../../src/base-pruebas/08-imp-exp.js';

describe('Pruebas en 08-imp-exp.test', () => {
	test('getHeroeById debe retornar un héroe por ID', () => {
		const id = 2;
		const hero = getHeroeById(id);
		console.log(hero);
		
		expect(hero).toEqual({id: 2, name: 'Spiderman', owner: 'Marvel'});
	});
	test('getHeroeById debe retornar undefined si el héroe no existe', () => {
		const id = 200;
		const hero = getHeroeById(id);
		console.log(hero);
		
		expect(hero).toBeFalsy();
	});
	test('getHeroesByOwner debe retornar un arreglo con los heroes de DC', () => {
		const owner = 'DC';
		const testHeroes = getHeroesByOwner(owner);
		console.log(testHeroes);
		
		expect(testHeroes.length).toBe(3);
		expect(testHeroes).toEqual([
			{id: 1, name: 'Batman', owner: 'DC'},
			{id: 3, name: 'Superman', owner: 'DC'},
			{id: 4, name: 'Flash', owner: 'DC'}
		]);
		
		expect(testHeroes).toEqual(testHeroes.filter((hero) => hero.owner === owner));
	});
	
	test('getHeroesByOwner debe retornar un arreglo con los heroes de Marvel', () => {
		const owner = 'Marvel';
		const testHeroes = getHeroesByOwner(owner);
		console.log(testHeroes);
		
		expect(testHeroes.length).toBe(2);
		expect(testHeroes).toEqual(testHeroes.filter((hero) => hero.owner === owner));
	});
});