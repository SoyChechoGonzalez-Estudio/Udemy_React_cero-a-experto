import {act, renderHook} from '@testing-library/react';
import {useForm} from '../../src/Hooks';

describe('Pruebas en useForm', () => {
	
	const initialForm = {
		name : 'Checho',
		email: 'checho@gmail.com',
	};
	
	test('Debe de regresar los valores por defecto', () => {
		const {result} = renderHook(() => useForm(initialForm));
		
		expect(result.current).toEqual({
			                               name         : initialForm.name,
			                               email        : initialForm.email,
			                               formState    : initialForm,
			                               onInputChange: expect.any(Function),
			                               onResetForm  : expect.any(Function)
		                               });
	});
	
	test('Debe de cambiar el nombre en el formulario', () => {
		const newValue = 'Sergio';
		const {result} = renderHook(() => useForm(initialForm));
		const {onInputChange} = result.current;
		
		act(() => {
			onInputChange({target: {name: 'name', value: newValue}});
		});
		
		expect(result.current.name).toBe(newValue);
		expect(result.current.formState.name).toBe(newValue);
	});
	
	test('Debe resetear el formulario', () => {
		const newValue = 'Sergio';
		const {result} = renderHook(() => useForm(initialForm));
		const {onInputChange, onResetForm} = result.current;
		
		act(() => {
			onInputChange({target: {name: 'name', value: newValue}});
			onResetForm();
		});
		
		expect(result.current.name).toBe(initialForm.name);
		expect(result.current.formState.name).toBe(initialForm.name);
	});
});