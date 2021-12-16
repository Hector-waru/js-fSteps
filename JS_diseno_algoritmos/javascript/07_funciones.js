//09-Diciembre-2021
/* Funciones bloques de codigo que se pueden reutilizar */
//Creamos funciones = function nombre() { }
function suma (){//funcion 
    let numF1=504;
    let numF2=1;
    let sumar = numF1+numF2;
    document.write('<h1>'+sumar +'</h1>');//document.write'(<h1>'+ +'</h1>'); para mostrarlo en html
}//cierra funcion

function nsuma(numerO1, numerO2){//nueva funcion con parametros a recibir
    let sumar = numerO1+numerO2;
    document.write('<h1>'+sumar +'</h1>');//document.write'(<h1>'+ +'</h1>'); para mostrarlo en el html
}

suma();//sin parametros

nsuma(505,1);//con parametros


