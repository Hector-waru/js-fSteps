/*09 de diciembre de 2021*/
//Variable var se utilizaba anteriormente fuera de condicionales es un global
//let es una variable de contexto
var Numero = 505;
console.log("el numero de la variable var es "+Numero);

if(true){ //ha cambiado el valor de mi variable Numero
    var Numero = 21.20;
    console.log(Numero);
}
console.log(Numero);

var texto = 'Bootcamp java';//empezamos como una cadena
console.log(texto);

if(true){//Aprendiendo condicionales
    var texto = '\n cohorte 8 ';//y aqui cambiamos de una a otra 
    console.log(texto);
    //let numFavorito = 9; aqui no puede existir porque solo existe aqui como un auxiliar
}
console.log(texto);//y encontramos que aqui sigue igual 