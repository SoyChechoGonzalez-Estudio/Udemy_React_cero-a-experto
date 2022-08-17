import {useEffect, useState} from 'react';
import {Message} from './Message';

const SimpleForm = () => {
	const [formState, setFormState] = useState({
		username: 'strider',
		email: 'strider@gmail.com'
	});
	const {username, email} = formState;
	
	const handleInputChange = ({target}) => {
		const {name, value} = target;
		setFormState({
			...formState,
			[name]: value
		});
	};
	
	useEffect(() => {
		// console.log('useEffect called');
	}, []);
	
	useEffect(() => {
		// console.log('formState changed');
	}, [formState]);
	
	useEffect(() => {
		// console.log('email changed');
	}, [email]);
	return (
		<>
			<h1>SimpleForm</h1>
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
			{
				(username === 'strider') && <Message />
			}
		</>
	);
};

export {SimpleForm};