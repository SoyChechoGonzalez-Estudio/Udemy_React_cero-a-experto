import {pokemonApi} from '../../../api/pokemonApi.js';
import {setPokemon, startLoadingPokemon} from './pokemonSlice.js';

const getPokemon = (page = 0) => {
	return async(dispatch, getState) => {
		dispatch(startLoadingPokemon());
		
		// TODO: Realizar petición HTTP
		// /* const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`);
		//  const data = await response.json(); */
		
		const {data} = await pokemonApi.get(`/pokemon?limit=10&offset=${page * 10}`);
		
		dispatch(setPokemon({
				pokemon: data.results,
				page:    page + 1
			}
		));
	};
};

export {getPokemon};