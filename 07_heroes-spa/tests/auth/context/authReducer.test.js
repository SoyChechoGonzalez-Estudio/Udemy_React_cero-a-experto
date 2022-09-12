import {authReducer, types} from '../../../src/auth';

describe('Pruebas en authReducer', () => {
	const initialState = {
		logged: false,
	};
	test('Debe retornar el estado por defecto', () => {
		const state = authReducer(initialState, {});
		
		expect(state).toEqual(initialState);
	});
	
	test('(Login) Debe de llamar el login, autenticar y establecer el user', () => {
		const action = {
			type:    types.login,
			payload: {
				name: 'Checho',
				id:   '123'
			}
		};
		
		const state = authReducer(initialState, action);
		expect(state).toEqual({
			logged: true,
			user:   action.payload
		});
	});
	
	test('(Logout) Debe de borrar el name del usuario y logged en false', () => {
		const state = {
			logged: true,
			user:   {id: '123', name: 'Checho'}
		};
		
		const action = {
			type: types.logout
		};
		
		const newState = authReducer(state, action);
		
		expect(newState).toEqual(initialState);
	});
});