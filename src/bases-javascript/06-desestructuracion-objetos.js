// Desestructuracion 
// ó Asignacion desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
}

// extrae lo que coloco dentro de las llaves de ese objeto
const { nombre, edad, clave } = persona;

console.log(nombre);
console.log(edad);
console.log(clave);

//desestructuracion dentro de la funcion de flecha
const retornarPersona = ({ clave, nombre, edad, rango = 'Capitan' }) => {
        //console.log(nombre, edad, rango);
        return {
            nombreClave: clave,
            anios: edad,
            latlng: {
                lat: '4.265',
                lng: '5.55454'
            }
        }
    }
    // Desestructuración de un objeto
const { nombreClave, anios, latlng: { lat, lng } } = retornarPersona(persona);

console.log(nombreClave, anios);
console.log(lat, lng);