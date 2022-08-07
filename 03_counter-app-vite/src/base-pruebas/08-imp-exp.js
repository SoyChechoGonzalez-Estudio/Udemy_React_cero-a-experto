import {heroes} from '../data/heroes';

const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);

// Tarea
/*
* Debe retornar un arreglo con los heroes de DC
* length === 3
* toEqual al arreglo filtrado
*
* Debe retornar un arreglo con los heroes de Marvel
* length === 2
*
* */
const getHeroesByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);

export {getHeroeById, getHeroesByOwner};