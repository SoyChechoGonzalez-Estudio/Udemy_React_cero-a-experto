import {useForm} from '../Hooks/useForm.js';

const FormWithCustomHook = () => {
	
	const {formState, handleResetForm, handleInputChange} = useForm({
		username: '',
		email: '',
		password: '',
		
	});
	
	const {username, email, password} = formState;
	
	return (
		<>
			<h1>Formulario con Custom Hook</h1>
			<hr />
			<input
				type='text'
				className='form-control'
				placeholder='Username'
				name='username'
				value={username}
				onChange={handleInputChange} />
			<input
				type='email'
				className='form-control mt-2'
				placeholder='checho@outlook.es'
				name='email'
				value={email}
				onChange={handleInputChange} />
			<input
				type='password'
				className='form-control mt-2'
				placeholder='Contraseña'
				name='password'
				value={password}
				onChange={handleInputChange} />
			<button onClick={handleResetForm} className='btn btn-primary mt-2'>Borrar</button>
		</>
	);
};

export {FormWithCustomHook};