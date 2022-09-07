import {fireEvent, render, screen} from '@testing-library/react';
import {MultipleCustomHooks} from '../../src/03_examples';
import {useFetch} from '../../src/Hooks/useFetch';
import {useCounter} from '../../src/Hooks/useCounter';

jest.mock('../../src/Hooks/useFetch');
jest.mock('../../src/Hooks/useCounter');

describe('Pruebas en MultipleCustomHooks', () => {
	
	const mockIncrement = jest.fn();
	
	useCounter.mockReturnValue({
		counter:   1,
		increment: mockIncrement
	});
	
	beforeEach(() => {
		jest.clearAllMocks();
	});
	
	test('Debe de mostrar el componente por defecto', () => {
		useFetch.mockReturnValue({
			data:      null,
			isLoading: true,
			hasError:  null
		});
		
		render(<MultipleCustomHooks />);
		expect(screen.getByText('Loading...'));
		expect(screen.getByText('Breaking Bad Quotes'));
		
		const nextButton = screen.getByRole('button', {name: 'Next Quote'});
		expect(nextButton.disabled).toBeTruthy();
		// screen.debug();
	});
	
	test('Debe de mostrar un Quote', () => {
		useFetch.mockReturnValue({
			data:      [{author: 'Checho', quote: 'Hola Mundo'}],
			isLoading: false,
			hasError:  null
		});
		
		render(<MultipleCustomHooks />);
		expect(screen.getByText('Hola Mundo')).toBeTruthy();
		expect(screen.getByText('Checho')).toBeTruthy();
		
		const nextButton = screen.getByRole('button', {name: 'Next Quote'});
		expect(nextButton.disabled).toBeFalsy();
		// screen.debug();
	});
	
	test('Debe de llamar la función de incrementar', () => {
		
		
		useFetch.mockReturnValue({
			data:      [{author: 'Checho', quote: 'Hola Mundo'}],
			isLoading: false,
			hasError:  null
		});
		
		render(<MultipleCustomHooks />);
		const nextButton = screen.getByRole('button', {name: 'Next Quote'});
		fireEvent.click(nextButton);
		
		expect(mockIncrement).toHaveBeenCalled();
	});
});