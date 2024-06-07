/**
 * funciones
 */
function saludar(){
console.log('Hola soy luis');
}
saludar();

//con parametros
function saludar(nombre){
console.log(`Hola soy ${nombre}`);
}
saludar('Luis');


//con return
function saludar(nombre){
     return `Hola soy ${nombre}`
}
var saludo = saludar('luis');
console.log(saludo);
console.log(saludar('luis'));

//Expresiones o anonimas
var suma = function(a,b){
    return a+b;
}
console.log(suma(2,2));

//arrow function
var resta = (a,b) => {
    return a-b;
}
console.log(resta(4,2));

var multiplicar = (a,b) => a*b;
console.log(multiplicar(2,2));