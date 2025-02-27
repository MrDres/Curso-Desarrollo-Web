/* Crear una funcion calcularPromedioEdad que reciba un array de objetos usuario (con propiedad 'edad') y devuelva el promedio de edad.

Ejemplo entrada:
[
  { nombre: 'Juan', edad: 25 },
   { nombre: 'Lucia', edad: 35 },
    { nombre: 'Pedro', edad: 30 }
]
    salida esperada: 30 
*/

function calcularPromedioEdad(usuarios){
    const totalEdades = usuarios.reduce((suma , usuarios)=> suma + usuarios.edad,0);
    return totalEdades/usuarios.length;
}

const usuarios=[{ nombre: 'Juan', edad: 25 },{ nombre: 'Lucia', edad: 35 },{ nombre: 'Pedro', edad: 30 }];

console.log("promedio de edad: ", calcularPromedioEdad(usuarios));
 /* Ejercicio 01
 document.getElementById('ejercicio01').innerText='Promedio de edad: ${calcularPromedioEdad(usuarios)}'; */ 