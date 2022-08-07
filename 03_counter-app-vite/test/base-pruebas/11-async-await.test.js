import {getImagen} from '../../src/base-pruebas/11-async-await.js';

describe('Pruebas en 11-async-await.test', () => {
	test('getImagen debe retornar un error si no tenemos api Key', async () => {
		const response = await getImagen();
		console.log(response);
		
		expect(response).toBe('No se encontró la imagen');
	});
});