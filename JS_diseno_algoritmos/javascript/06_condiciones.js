//09 de diciembre de 2021
/* Condicionales utilizados para tomar decisiones en nuestros programas */
let edad = 15;

if(edad>=18){//abre condidcional
document.write("Eres mayor de edad, puedes votar.");//manera para mostrar en la pagina diferente a mostrarlo en consola, como lo habiamos estado haciendo
}else{//cierra if y abre else
    document.write("\nLastima no puedes votar");
}//cierra else

//practica para pedir y aplicar condicional

let EdadReq = parseInt(prompt("Por favor ingresa tu edad; "));//aplicamos el prompt y parseInt para pedir y cambiar la informacion a un número entero

if(EdadReq>=18 && EdadReq<=30){//hacemos nuestra condicional
    document.writeln(" Son jovenes entusiasmados por la vivicion \n");
}else if (EdadReq >30 && EdadReq<=60){//Else if meter mas condicionales
    document.write("Ufff señor no se desanime");
} else if (EdadReq > 60 ){//meter operadores logicos
    document.write("Han sido un gran ejemplo de como es vivir ");
}
else{//En caso contario
    document.writeln("\n camara ya vete y regresa cuando tengas una mayoria de edad ");
}
