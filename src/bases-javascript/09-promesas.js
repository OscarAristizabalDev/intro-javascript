import { getHeroeById } from './bases-javascript/08-importar-exportar';
//promesas
/**
 * El resolve se ejecuta si la instruccion se cumple
 * El reject se ejecuta si se presento un problema
 */
// const promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const hereo = getHeroeById(2);
//         //console.log(hereo);
//         // por medio del resolve en los argumentos se transfiere lo que necesitemos al then
//         resolve(hereo);
//         //reject('No se puedo encontrar el hereo');
//     }, 2000)
// });

// promesa.then((heroe) => {
//         console.log(heroe);
//     })
//     .catch(err => console.log(err));



const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroeById(2);
            //console.log(hereo);
            // por medio del resolve en los argumentos se transfiere lo que necesitemos al then
            if (heroe) {
                resolve(heroe);
            } else {
                reject('No se puedo encontrar el hereo');
            }

            //reject('No se puedo encontrar el hereo');
        }, 2000)
    });
}

getHeroeByIdAsync(4)
    .then(heroe => console.log('heroe', heroe))
    .catch(err => console.warn(err));