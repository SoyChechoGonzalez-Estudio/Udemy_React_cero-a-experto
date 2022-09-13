import {useDispatch, useSelector} from 'react-redux';
import {increment, decrement, incrementBy} from './store/slices/counter';

import './App.css';

function App() {
	
	const {counter} = useSelector(state => state.counter);
	
	const dispatch = useDispatch();
	
	return (
		<div className='App'>
			<p>count is {counter}</p>
			<div className='card'>
				<button onClick={() => dispatch(increment())}>
					Increment
				</button>
				<button onClick={() => dispatch(decrement())}>
					Decrement
				</button>
				<button onClick={() => dispatch(incrementBy(2))}>
					Increment By 2
				</button>
			</div>
		
		</div>
	);
}

export default App;
