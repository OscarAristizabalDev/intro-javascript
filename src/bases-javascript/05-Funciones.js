// Funciones en JS

// Crear funciones como una constante
const saludar = function(nombre) {
    return `Hola, ${nombre}`;
}

console.log(saludar('Oscar'));

// Funciones de flecha
const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}
console.log(saludar2('Daniela'));

// Funcion de flecha simplificada
const saludar3 = (nombre) => `Hola, ${nombre}`;
console.log(saludar3('Fernando'));

// Funcion de flecha simplicada que no tiene parametros
const saludar4 = () => `Hola mundo`;
console.log(saludar4());

// Funcion de flecha con return de un objeto
const getUser = () => {
    return {
        uid: 'ASBCS545',
        username: 'Oscar el papi'
    }
}

console.log(getUser());
// Funcion de flecha con return de un objeto optimizada
const getUser2 = () =>
    ({
        uid: 'ASBCS545 dasd',
        username: 'Oscar el papi 2'
    });

const user2 = getUser2();
console.log(user2);

// Tarea
// Transformen a una funcion de flecha
// Tiene que retornar un usuario implicito
// pruebas
function getUsuarioActivo(nombre) {
    return {
        id: '1',
        username: nombre
    }
}

const usuarioActivo = getUsuarioActivo('oscar');
console.log(usuarioActivo);

const getUsuarioActivo2 = (nombre) => ({
    id: '2',
    username: nombre
});

const usuarioActivo2 = getUsuarioActivo2('Andres');
console.log(usuarioActivo2);