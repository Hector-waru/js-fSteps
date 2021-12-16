//10 de diciembre de 2021
/* 
Coleccion de elemtos 
tienen metodos o funciones que nos permiten ordenas o manipular los datos almacenados
*/
//way 1
const arreglo1=[5,"Gosh, D:", true, [1,2,3,9,4]];//cnst en arreglos para no perder datos, js admite varios tipos de datos en el
console.log(arreglo1);
//way 2 current
const arreglo2=Array.of(1,2,"think you keep up with me");
console.log(arreglo2);
//oldway 3
const arreglo3 = new Array(1,2,"knock about");

const frutas = ["manzana", "naranjas","uvas", "sandias", [1,2,3,4,5,['a','b','c']]];
//notacion de corchetes :P
console.log(frutas[2]);

console.log(frutas[4][4]);//por ejemplo para el segundo arraya sí cuenta  como 0-4

console.log(frutas[4][5][0]);

//metodos
//length

const letras = ['a','b','c','d'];
console.log(letras.length);//Cantidad de elemnetos que estan guardados dentro del arreglo

//push añade un elemento dentro del arreglo
letras.push('e');
console.log(letras);

//pop elimina el ultimo elemento dentro de nuestro arreglo
letras.pop();
console.log(letras);

//unshift-shift FIFO?
//unshift agreaga al principio
letras.unshift('1');
console.log(letras);

//shift elimina el primer elem3nto
letras.shift();
console.log(letras);

