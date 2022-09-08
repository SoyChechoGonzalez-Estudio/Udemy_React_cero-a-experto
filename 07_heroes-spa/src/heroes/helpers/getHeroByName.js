import {heroes} from '../data/index.js';

const getHeroByName = (name = '') => {
	
	name = name.toLowerCase().trim();
	
	if (name.length === 0) return [];
	
	return heroes.filter(
		hero => hero.superhero.toLowerCase().includes(name)
	);
};

export {getHeroByName};