/**
 * variables
 * 
 * 3 formas de definir variables
 * 
 * var
 * let
 * const
 */
//variables con VAR
var nombre = 'Garcia Luis'; // x = 2
console.log(nombre);

var edad = 27;
console.log(edad);

var persona ={
    nombre: 'Garcia',
    apellido: 'Ruiz',
    edad: 27,
    direccion: {
        calle: 'siempre viva',
        numeroDeCasa: 123
    },
    ciudadesVisitadas: [
        'Guadalajara',
        'Cuenca',
        'Manta'
    ]
}
console.log(persona);
//es debil mente equipado por que a las variables les puedes asignar diferentes valores.
var ciudad;
ciudad = 'Quito';
ciudad= 'Guayaquil';//reasignacion con la variable var
console.log(ciudad);

//variables con let
let nombre = 'Luis';
console.log(nombre);
//bloque del codigo
{
    let saludo = 'Hola soy Luis';
    console.log(saludo);
}
console.log(saludo);//no puede ser utilizado dentro del bloque del codigo con la variable let, solo funciona 
//en el bloque del codigo donde esta declarada la varoable var es global


//variables con Const
const PI =3.14;
console.log(PI);

var nombre = 'Luis Garcia';
var saludo = `Hola soy ${nombre}

como estas?`;
console.log(saludo);
