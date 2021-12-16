/* 13 de dieimbre de 2021
Ciclos
while
do while
for
*/

//while Mientras
/* 
while(condicion){
    codigo 
    modificacion a condicion
}
*/

//imprimir numeros del 1-10

let condicioN = 1;
while (condicioN <= 10){

    console.log(condicioN);
    condicioN = condicioN + 1;

}
//++(suma 1), --(quita 1)

//do-while
let numeros=1;
do{
    console.log(numeros);
    numeros++;

}while (numeros<=10);

//for
for (let control = 0; control<5; control++) {
    console.log('hola');
}

const foods = ['flautas', 'tacos', 'cochina', 'bistec'];

for( let i=0; i<= foods.length; i++){
    console.log(foods[i]);
}