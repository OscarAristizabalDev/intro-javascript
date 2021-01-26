// desestructuracion de arreglos

const personajes = ['Goku', 'Vegeta', 'Trunks'];

console.log(personajes[0]);
console.log(personajes[1]);
console.log(personajes[2]);

// Desestructuracion
const [, vegeta, trunks] = personajes;
console.log(vegeta, trunks);

const retornarArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros] = retornarArreglo();
console.log(letras, numeros);


//Tarea
// 1. El primer valor del arr se llamara nombre
//.2. Se llamara set nombre
const vender = (valor) => {
    return [valor, () => { console.log('Hola Mundo') }];
};
// desestructuracion de un arreglo que esta dentro de una funcion de flecha
// el arreglo tiene un valor y una funcion
const [nombre, setNombre] = vender('Goku');
console.log(nombre);
setNombre();