import {useRef} from 'react';

const FocusScreen = () => {
	
	const inputRef = useRef();
	
	const handleClickButton = () => {
		console.log(inputRef);
		inputRef.current.select();
	};
	
	return (
		<>
			<h1>FocusScreen</h1>
			<hr />
			
			<input
				ref={inputRef}
				type='text'
				placeholder='Ingresar Nombre'
				className='form-control' />
			<button onClick={handleClickButton} className='btn btn-primary mt-2'>Set Focus</button>
		</>
	);
};

export {FocusScreen};