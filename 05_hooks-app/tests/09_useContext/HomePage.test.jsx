import {render, screen} from '@testing-library/react';
import {UserContext} from '../../src/09_useContext/context/UserContext';
import {HomePage} from '../../src/09_useContext/HomePage';

describe('Pruebas en el componente HomePage',  () => {
	
	const user = {
		id:1,
		name: 'Checho'
	}
	
	test('Debe de mostrar el componente HomePage sin el usuario', () => {
		render(
			<UserContext.Provider value={{user: null}}>
				<HomePage />
			</UserContext.Provider>
		)
		
		const preTag = screen.getByLabelText('pre');
		expect(preTag.innerHTML).toBe('null');
		// screen.debug()
	})
	
	test('Debe de mostrar el componente HomePage con el usuario', () => {
		render(
			<UserContext.Provider value={{user}}>
				<HomePage />
			</UserContext.Provider>
		)
		
		const preTag = screen.getByLabelText('pre');
		expect(preTag.innerHTML).toContain(user.name);
		expect(preTag.innerHTML).toContain(`${user.id}`);
		// screen.debug()
	})
	
})