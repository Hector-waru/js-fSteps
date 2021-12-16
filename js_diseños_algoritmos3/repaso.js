/* 
13 de diciembre de 2021

Arrays
Repaso de sus metodos 

*/

const comidas = ['Pozole', 'quesadilla', 'Tacos'];

//length
console.log(comidas.length);
 //pusha grega final ,pop quita al final- unshift(agrega al principio),shift(Elimina el primero)

 comidas.push('Torta');
 console.log(comidas);

 comidas.unshift('Pancita');
 console.log(comidas);

 comidas.pop();
 console.log(comidas);

 comidas.shift();
 console.log(comidas);
// foreach - metodos accion para cada uno de estos elementos

comidas.forEach(function (el){//a la funcion vacia se le puede cambiar el nombre
    console.log(el);
})

const numeros = [1,2,3,4,5]

numeros.forEach(function(el){
    let suma = el + 1;
    console.log(suma)
})
 //ejercicio
const arr=[];

 function suma(num){
     let sumNum = num+1;
     return arr.push(sumNum)
 }

 suma(6);
 suma(7);
 suma(8);
 suma(9);
 suma(10);

 console.log(arr);
