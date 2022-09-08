import {heroes} from '../data/index.js';

const getHeroById = (id) => {
	return heroes.find(hero => hero.id === id);
};

export {getHeroById};