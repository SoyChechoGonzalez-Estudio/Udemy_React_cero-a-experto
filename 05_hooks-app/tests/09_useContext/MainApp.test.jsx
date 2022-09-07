import {render, screen} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import {MainApp} from '../../src/09_useContext/MainApp';

describe('Pruebas en el componente MainApp', () => {
	
	test('Debe de mostrar el componente HomePage', () => {
		render(
			<MemoryRouter>
				<MainApp />
			</MemoryRouter>
		)
		
		expect(screen.getByText('HomePage:')).toBeTruthy();
	})
	
	
	test('Debe de mostrar el componente LoginPage', () => {
		render(
			<MemoryRouter initialEntries={['/login']}>
				<MainApp />
			</MemoryRouter>
		)
		
		expect(screen.getByText('LoginPage')).toBeTruthy();
	})
});