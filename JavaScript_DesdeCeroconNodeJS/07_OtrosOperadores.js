/**
 * Operador de cadena o concatenacion(+)
 */

var nombre ='Luis';
var apellido = 'garcia';
var nombresCompletos = nombre+apellido;
console.log(nombresCompletos);

//operador de condicional (condicion ? valor1 : valor2)

console.log(2 > 3 ? 'Es mayor' : 'Es menor');//es menor

//Operador de desestructuracion
var persona = {
    nombre:'luis',
    apellido:'apellido'
}

var {nombre} = persona;
console.log(nombre);//imprime luis
console.log(persona);// imprime el objeto igual a como estaba 

var {nombre,apellido} = persona;
console.log(nombre);//imprime luis
console.log(apellido);//imprime apellido


//desestructuracion de arreglos
var arreglo = [1,2,3,4,5];

var[primeraPosicion] = arreglo;
console.log(primeraPosicion);//imprime 1

/**
 * opèrador de miembro o acceso de propiedad
 */

//Notacion punto
var persona = {
    nombre:'luis',
    apellido:'apellido'
}
console.log(persona.nombre);//imprime luis


//notacion por corchetes
var persona = {
    nombre:'luis',
    apellido:'apellido'
}
console.log(persona['nombre']);// imprime luis

//notacion por corchetes en arrelogs
var arreglos = [21,22,23,24];
console.log(arreglo[2]);//imprime 23

//operacion de determinacion de tipo (typeof) devuelve el tipo de dato
console.log(typeof 'Gabriel');//imprime string
console.log(typeof 21);//imprime number

