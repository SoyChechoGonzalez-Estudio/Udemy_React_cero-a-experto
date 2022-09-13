import {createSlice} from '@reduxjs/toolkit';

const initialState = {
	page:      0,
	pokemon:   [],
	isLoading: false,
};

export const pokemonSlice = createSlice({
	name:     'pokemon',
	initialState,
	reducers: {
		startLoadingPokemon: (state) => {
			state.isLoading = true;
		},
		setPokemon:          (state, action) => {
			state.isLoading = false;
			state.page = action.payload.page;
			state.pokemon = action.payload.pokemon;
		}
	},
});

export const {startLoadingPokemon, setPokemon} = pokemonSlice.actions;
