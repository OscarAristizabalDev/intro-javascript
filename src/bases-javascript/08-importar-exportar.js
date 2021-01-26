// Maneras de hacer importaciones
//import { heroes } from './data/hereos';
//import { hereos } from './data/hereos'
import heroes, { owners } from "../data/hereos";

console.log(owners);

/**const getHeroeById = (id) => {

    return heroes.find((hereo) => {
        if (heroe.id === id) {
            return true;
        } else {
            return false;
        }
    });
};*/

const getHeroeById = (id) => {
    // Buscar una posicion 
    return heroes.find(heroe => heroe.id === id);
};

//console.log(getHeroeById(1));

const getHeroesByOwner = (owner) => {
    // buscar varias posiciones
    return heroes.filter(heroes => heroes.owner === owner);
};

//console.log(getHeroesByOwner('DC'));

export {
    getHeroeById,
    getHeroesByOwner
}