import {fireEvent, render, screen} from '@testing-library/react';
import {UserContext} from '../../src/09_useContext/context/UserContext';
import {LoginPage} from '../../src/09_useContext/LoginPage';

describe('Pruebas en el componente LoginPage', () => {
	
	test('Debe de mostrar el componente sin el usuario', () => {
		render(
			<UserContext.Provider value={{user: null}}>
				<LoginPage />
			</UserContext.Provider>
		)
		const preTag = screen.getByLabelText('pre');
		expect(preTag.innerHTML).toBe('null')
	})
	
	test('Debe de llamar el setUser cuando se hace click en el button', () => {
		
		const setUserMock = jest.fn();
		render(
			<UserContext.Provider value={{user: null, setUser: setUserMock}}>
				<LoginPage />
			</UserContext.Provider>
		)
		const button = screen.getByRole('button');
		fireEvent.click(button);
		
		expect(setUserMock).toHaveBeenCalledWith({"email": "checho@gmail.com", "id": 1, "name": "Checho"})
	})
	
});