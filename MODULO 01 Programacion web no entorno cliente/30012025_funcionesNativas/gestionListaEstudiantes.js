/*Imagina que tienes un sistema para administrar una lista de estudiantes en un curso. Debes realizar las siguientes operaciones utilizando los métodos de arrays indicados:

Pasos del ejercicio
1- Crear un array de nombres de estudiantes usando Array.of().
2- Convertir una lista de nombres en un array usando Array.from().
3 - Agregar un nuevo estudiante al final usando push().
4 - Eliminar el último estudiante usando pop().
5 - Eliminar el primer estudiante usando shift().
6 - Agregar un nuevo estudiante al inicio usando unshift().
7 - Eliminar o reemplazar estudiantes en una posición específica usando splice().
8 - Combinar dos listas de estudiantes usando concat().
9 - Obtener una parte de la lista usando slice().*/

// 1- Crear un array de nombres de estudiantes usando Array.of()
let nombreEstudiantes = Array.of("Rubén", "Yoli", "André", "Marina");
console.log("Lista de estudiantes :", nombreEstudiantes);

// 2- Convertir una lista de nombres en un array usando Array.from()
const nombres = ["Pepe", "Juan", "Luis", "Ana"];
nombreEstudiantes = Array.from(nombres);
console.log("Convertimos la lista nombres con Array.from y queda la lista asi: ", nombreEstudiantes);

// 3- Agregar un nuevo estudiante al final usando push()

nombreEstudiantes.push("Ricardo");
console.log("Añadido Ricardo a la lista de estudiantes:", nombreEstudiantes);
//4 - Eliminar el último estudiante usando pop().

nombreEstudiantes.pop();
console.log("Eliminado el último estudiante de la lista: ", nombreEstudiantes);
//5 - Eliminar el primer estudiante usando shift().

nombreEstudiantes.shift();
console.log("Eliminado el primer estudiante de la lista: ",nombreEstudiantes);
//6 - Agregar un nuevo estudiante al inicio usando unshift().

nombreEstudiantes.unshift("Ricardo");
console.log("Añadido Ricardo al principio de la lista: ",nombreEstudiantes);
//7 - Eliminar o reemplazar estudiantes en una posición específica usando splice().

nombreEstudiantes.splice(2, 1, "Marina");
console.log("Eliminado el nombre de la posicion 3 del array y lo cambiamos por Marina", nombreEstudiantes);
//8 - Combinar dos listas de estudiantes usando concat().
let listaConcatenada=nombreEstudiantes.concat(nombres);
console.log("La lista concatenada resultante es: ", listaConcatenada);
//9 - Obtener una parte de la lista usando slice().

let listaCortada=listaConcatenada.slice(0,6);
console.log("La lista cortada de la posicion 0 al 6 es: ", listaCortada);