//10 de diciembre de 2021
/* 
Crea una función que calcule el descuento que se le va a hacer a un cliente 
según el valor de su compra.

Si es una compra de menos de 100, se le hará un descuento del 10%. (0-99)
Si es una compra de 100 hasta menos de 200 se le hará un descuento del 20%.(100 - 199)
y si es una compra de más de 200 se le hará un descuento del 30%. (200 =>)

Utiliza prompt, funciones, condicionales y operadores de comparación.

La función debe pedir el precio al cliente, e imprimir el resultado del precio menos el descuento
 ya sea en pantalla o en consola.

(Se guardará en un archivo nuevo llamado ejercicioFunciones.js)
 */
//solucion equipaxo 6
function descuentoProducto(){//Se hace una funcion sin parametros
    
    let evaProducto= parseInt(prompt("Introduzca un precio; "));//pedimos al usuario el monto 

    if (evaProducto<100){//el valor de compra es menor a cien
        valorProductoDescontando= evaProducto*0.90;//se hace la operacion 
        return valorProductoDescontando;//Se devuelve el precio
    }else if(evaProducto>=100 && evaProducto<200){
        valorProductoDescontando=evaProducto*0.80;
        return valorProductoDescontando;
    }else if(evaProducto>=200){
        valorProductoDescontando= evaProducto*0.70;
        return valorProductoDescontando;
    }
}

const descuento = descuentoProducto();//aqui usamos un const por que el valor no cambia y llamamos nuestra funcion para que haga el calculo y sé guarde en descuento
document.write("<h1>El precio con descuento es; "+ descuento+" </h1>");//Aqui imprimimos el descuento de la variable descuento