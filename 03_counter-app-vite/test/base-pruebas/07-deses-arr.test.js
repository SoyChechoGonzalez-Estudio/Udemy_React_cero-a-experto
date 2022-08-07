import {retornaArreglo} from '../../src/base-pruebas/07-deses-arr.js';

describe('Pruebas en 07-deses-arr', () => {
	test('retornaArreglo debe retornar un string y un número', () => {
		const [letters, numbers] = retornaArreglo();
		console.log(letters, numbers);
		console.log(typeof letters);
		console.log(typeof numbers);
		
		expect(typeof letters).toBe('string');
		expect(typeof numbers).toBe('number');
		
		expect(letters).toEqual(expect.any(String));
		expect(numbers).toEqual(expect.any(Number));
	});
});