/* 09 de diciembre de 2021 */
/* 
operadores aritmeticos de toda la vida
+ suma
- resta
/ division
* mutiplicacion 
% modulo 
*/
/*
let nuM1 = 34;
let nuM2 = 5;
const suma = nuM1 + nuM2; //usar const aqui porque no necesitaremos cambiar este valor
*/
const numObt1 = parseInt(prompt("Ingrese su primer numero \n")); //prompt pide a usuario en el navegador 
const numObt2 = parseInt(prompt("Ingrese su segundo numero \n")); //En este caso se hace un parseInt(prompt());
/* en un principio solo concateno nuestaros valores, por lo cual debe de cambiarse de cadena a numero */

const suma = (numObt1 + numObt2);
console.log(suma);

//por nuestra cuenta
const resta = numObt1 - numObt2;
console.log("Valor de la resta es; " + resta);

const division = numObt1/numObt2;
console.log("Valor de la division es; " + division);

const multiplicacion = numObt2*numObt2;
console.log("Valor de la multiplicación es; "+ multiplicacion)

const modulo = numObt1 % numObt2; //divide un numero y pone el residuo 
console.log("Valor del modulo es; " + modulo);

/* Operadores logicos
&& and - || or - ! not no */



