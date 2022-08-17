import {useCallback, useEffect, useState} from 'react';
import {ShowIncrement} from './ShowIncrement';

const CallbackHook = () => {
	
	const [counter, setCounter] = useState(10);
	
	const incrementFather = useCallback(
		(value) => {
			setCounter((count) => count + value);
		}, []);
	
	useEffect(() => {
		// incrementFather();
	}, [incrementFather]);
	/* const increment = () => {
	 setCounter(counter + 1);
	 }; */
	
	return (
		<>
			<h1>CallbackHook {counter}</h1>
			<hr />
			<ShowIncrement increment={incrementFather} />
		</>
	);
};

export {CallbackHook};