// Arreglos en JS
const arreglo = [1, 2, 3, 4];
//arreglo.push(1);
//arreglo.push(2);
//arreglo.push(3);
//arreglo.push(4);
// Esta linea sirve para inicializar un segundo arreglo con los valores de otro arreglo
let arreglo2 = [...arreglo, 5];
//arreglo2.push(5);

//metodo map recibe una funcion que se va a ejecutar por cada elemento del arreglo
const arreglo3 = arreglo2.map(function(numero) {
    return numero * 2;
});

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);