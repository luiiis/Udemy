/**
 * control de flujo
 */
//Estructura if
var llueve = false;
if(llueve){
console.log('Necesito una sombrilla');
}

var administrador = 'administrador';
if(administrador ==='administrador'){
    console.log('Bienvenido al sistema');
}

const MAYORIA_DE_EDAD = 18;
var edadPersona = 12;
if(edadPersona>= MAYORIA_DE_EDAD){
console.log('Es mayor de edad');
}else{
console.log('Es menor de edad');
}


var semaforo = 'Rojo';
if(semaforo==='Verde'){
console.log('Arranca');
}else if(semaforo==='Amarillo'){
console.log('Listo');
}else if(semaforo==='Rojo'){
    console.log('Alto');
}else{
    console.log('Motores apagados');
}


//switch
var producto = 'mango';
switch(producto){
    case 'papaya': console.log('Las papayas cuestan $1 cada libra');break;
    case 'naranjas': console.log('las narangas cuestan $1 cada libra');break;
    case 'mango':console.log('los mangos cuestan $3 cada libra'); break;
    default: console.log('No disponemos de ese producto');

}