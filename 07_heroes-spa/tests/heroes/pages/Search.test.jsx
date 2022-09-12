import {fireEvent, render, screen} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import {Search} from '../../../src/heroes';

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useNavigate: () => mockedUseNavigate
}));


describe('Pruebas en Search', () => {
	
	test('Debe de mostrarse correctamente con valores por defecto', () => {
		const {container} = render(
			<MemoryRouter>
				<Search />
			</MemoryRouter>
		);
		
		expect(container).toMatchSnapshot();
	});
	
	
	test('Debe de mostrar a Batman y el input con el valor del query string', () => {
		render(
			<MemoryRouter initialEntries={['/search?q=batman']}>
				<Search />
			</MemoryRouter>
		);
		
		const input = screen.getByRole('textbox');
		expect(input.value).toBe('batman');
		
		const img = screen.getByRole('img');
		expect(img.src).toContain('/assets/heroes/dc-batman.jpg');
		
		const alert = screen.getByLabelText('alert-danger');
		expect(alert.style.display).toBe('none');
	});
	
	test('Debe de mostrar un error si no se encuentra el hero (batman123)', () => {
		render(
			<MemoryRouter initialEntries={['/search?q=batman123']}>
				<Search />
			</MemoryRouter>
		);
		
		const alert = screen.getByLabelText('alert-danger');
		expect(alert.style.display).toBe('');
		
	});
	
	test('Debe de llamar el navigate a la pantalla nueva', () => {
		
		const inputValue = 'superman';
		
		render(
			<MemoryRouter initialEntries={['/search']}>
				<Search />
			</MemoryRouter>
		);
		
		const input = screen.getByRole('textbox');
		fireEvent.change(input, {target: {name: 'searchText', value: inputValue}});
		
		const form = screen.getByRole('form');
		fireEvent.submit(form);
		
		expect(mockedUseNavigate).toHaveBeenCalledWith(`?q=${inputValue}`);
	});
	
	
});