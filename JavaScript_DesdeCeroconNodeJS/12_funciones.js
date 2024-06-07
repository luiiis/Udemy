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