import {Hijo} from './Hijo.jsx';
import {useCallback, useState} from 'react';

const Padre = () => {
	
	const numbers = [2, 4, 6, 8, 10];
	const [valor, setValor] = useState(0);
	
	const incrementar = useCallback(
		(num) => {
			setValor((oldValue) => oldValue + num);
		}, []);
	
	
	return (
		<div>
			<h1>Padre</h1>
			<p> Total: {valor} </p>
			
			<hr />
			
			{
				numbers.map(number => (
					<Hijo
						key={number}
						numero={number}
						incrementar={incrementar}
					/>
				))
			}
			{/* <Hijo /> */}
		</div>
	);
};

export {Padre};