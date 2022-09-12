import {render, screen} from '@testing-library/react';
import {MemoryRouter, Route, Routes} from 'react-router-dom';
import {AuthContext} from '../../src/auth';
import {PublicRoute} from '../../src/router/PublicRoute';

describe('Pruebas en PublicRoute', () => {
	test('Debe de mostrar el children si no está autenticado', () => {
		const contextValue = {
			logged: false,
		};
		
		render(
			<AuthContext.Provider value={contextValue}>
				<PublicRoute>
					<h1>Ruta pública</h1>
				</PublicRoute>
			</AuthContext.Provider>
		);
		
		expect(screen.getByText('Ruta pública')).toBeTruthy();
		// screen.debug();
	});
	
	test('Debe de navegar si está autorizado', () => {
		
		const contextValue = {
			logged: true,
			user:   {
				name: 'Sergio',
				id:   'ABC123'
			}
		};
		
		render(
			<AuthContext.Provider value={contextValue}>
				<MemoryRouter initialEntries={['/marvel']}>
					<Routes>
						<Route path={'/login'} element={
							<PublicRoute>
								<h1>Ruta pública</h1>
							</PublicRoute>
						} />
						<Route path={'/marvel'} element={<h1>Página Marvel</h1>} />
					</Routes>
				</MemoryRouter>
			</AuthContext.Provider>
		);
		
	});
});