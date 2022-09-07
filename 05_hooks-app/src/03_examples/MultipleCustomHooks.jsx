import {useCounter, useFetch} from '../Hooks';
import {LoadingQuote, Quote} from './';

const MultipleCustomHooks = () => {
	
	const {counter, increment} = useCounter(1);
	const {data, isLoading, hasError} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
	const {author, quote} = !!data && data[0];
	
	return (
		<>
			<h1>Breaking Bad Quotes</h1>
			<hr />
			{
				isLoading
				? <LoadingQuote />
				: <Quote author={author} quote={quote} />
				
			}
			<button
				onClick={() => increment()}
				className='btn btn-primary'
				disabled={isLoading}>
				Next Quote
			</button>
		</>
	);
};

export {MultipleCustomHooks};