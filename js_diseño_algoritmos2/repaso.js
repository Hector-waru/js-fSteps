//10 de diciembre de 2021
/* Condicionales if-else, else if 
Funcion con o sin parametros para reciclar codigo 
*/

function procesadorDefrutas(Manzanas, Naranjas){//funcion que devuelve un mensaje con los parametros que utilizamos
    let jugo = "jugo de "+Manzanas+" manzanas y "+Naranjas+" naranjas";
    return jugo;
}

let jugoDenaranja = procesadorDefrutas(8,0);
console.log(jugoDenaranja);

let jugoDemanzana = procesadorDefrutas(3,2);
console.log(jugoDemanzana);
