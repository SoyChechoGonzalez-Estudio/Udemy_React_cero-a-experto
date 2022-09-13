import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getPokemon} from './store/slices/pokemon/index.js';

const PokemonApp = () => {
	
	const dispatch = useDispatch();
	const {isLoading, pokemon, page} = (useSelector(state => state.pokemon));
	console.log(pokemon);
	
	useEffect(() => {
		dispatch(getPokemon());
	}, []);
	
	
	return (
		<>
			<h1>PokemonApp</h1>
			<hr />
			<span>Loading: {isLoading ? 'Cargando...' : 'Pokemon Cargados'} </span>
			<ul>
				{
					pokemon.map(({name}) => (
						<li key={name}>{name}</li>
					))
				}
			</ul>
			<button
				disabled={isLoading}
				onClick={() => dispatch(getPokemon(page))}
			>
				Next
			</button>
		</>
	);
};

export {PokemonApp};