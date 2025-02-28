/*Crear un array para guardar los nombres de los días de la semana, empezando por 0 para el domingo. 
Para comprobar el funcionamiento pide al usuario un número entre 0 y 6 y devuelve el nombre del día. 
Se supone que el dato tecleado estará entre 0 y 6
Si tecleo el número 4 me deberá decir que el día de la semana es jueves.*/

//Creamos el array de días de la semana
const diaSem =["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sabado"];
/*let numero=parseInt(prompt("Introduce el numero del día de la semana de 0 a 6, teniendo en cuenta que el 0 es domingo: "));*/
let usuario= "2";
let diaUsuario=parseInt(usuario);
console.log(diaUsuario)
console.log(typeof diaUsuario)

respuesta(diaUsuario);

function respuesta(diaUsuario){
    return console.log(diaSem[diaUsuario])
}
//const input = prompt('Intrucir numero del día: ', "")

