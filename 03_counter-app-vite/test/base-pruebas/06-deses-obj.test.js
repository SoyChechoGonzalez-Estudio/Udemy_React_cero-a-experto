import {usContext} from '../../src/base-pruebas/06-deses-obj.js';

describe('Pruebas en 06-desestructurar-objetos', () => {
	test('usContext debe retornar un objeto', () => {
		const clave = 'Superman';
		const yearsOld = 42;
		const latitude = 14.1232;
		const longitude = -12.3232;
		
		const testContext = {
			nombreClave: clave,
			anios: yearsOld,
			latlng: {
				lat: latitude,
				lng: longitude
			}
		};
		
		const getContext = usContext({clave, yearsOld, latitude, longitude});
		console.log(getContext);
		
		expect(testContext).toEqual(getContext);
		
	});
});