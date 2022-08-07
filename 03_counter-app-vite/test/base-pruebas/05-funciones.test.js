import {getUser, getUsuarioActivo} from '../../src/base-pruebas/05-funciones.js';

describe('Pruebas en 05-funciones', () => {
	test('getUser debe retornar un objeto', () => {
		const testUser = {
			uid: 'ABC123',
			username: 'El_Papi1502'
		};
		
		const user = getUser();
		console.log(user);
		
		expect(testUser).toEqual(user);
	});
	
	test('getUsuarioActivo debe retornar un objeto', () => {
		const name = 'Checho';
		
		const testGetUser = {
			uid: 'ABC567',
			username: name,
		};
		const getUser = getUsuarioActivo(name);
		console.log(getUser);
		
		expect(getUser).toEqual(testGetUser);
		
	});
});