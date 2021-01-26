const persona = {
    nombre: 'Oscar',
    apellido: 'Aristizabal',
    edad: 45,
    direccion: {
        ciudad: 'Armenia',
        zip: '5d45as4da',
        lat: '14.56565',
        lng: '5.454646'
    }
};

// se hace el clone de persona y se asigna a persona 2
const persona2 = {...persona };
persona2.nombre = 'Leonardo';

console.log({ persona });
console.log({ persona2 });
//console.table({ persona });