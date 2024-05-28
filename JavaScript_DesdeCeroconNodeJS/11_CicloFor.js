/** 
 * Ciclo for
 * for(expresioninicial; expresionCondiciona; expresionDeActualizacion){
    //instrucciones
}
*/
for(let contador = 0; contador<=5;contador++){
    console.log('Hola mundo')
}

/**
 * For in
 * 
 * for(variable operadorIN objeto){
//instrucciones
}
 */
var persona ={
    nombre:'Luis',
    apellido:'Garcia',
    edad:23
}
for(let clave in persona){
console.log(clave,persona[clave]);
}
/**IMPRIME
 * nombre Luis
apellido Garcia
edad 23
 */


//for of
var arreglo = [1,2,3,4,5];
var nombe ='luis';
for(let valor of nombe){
console.log(valor);
}