import {useCounter, useFetch} from '../Hooks';
import {LoadingQuote, Quote} from '../03_examples';

const Layout = () => {
	
	const {counter, increment} = useCounter(1);
	const {data, isLoading, hasError} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
	
	// console.log({data, isLoading, hasError});
	// console.log(data);
	
	const {author, quote} = !!data && data[0];
	
	
	return (
		<>
			<h1>Breaking Bad Quotes</h1>
			<hr />
			{
				isLoading
				? <LoadingQuote />
				: <Quote quote={quote} author={author} />
				
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

export {Layout};