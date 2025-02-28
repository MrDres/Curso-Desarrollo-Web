/*30012025_FUNCIONES NATIVAS(TEORIA)
En JavaScript, existen varias funciones nativas para manejar arrays. Listado de las más utilizadas:
Métodos de creación y manipulación de arrays:
1.	Array.of(): Crea una nueva instancia de array con un número variable de elementos pasados como argumentos.
2.	Array.from(): Crea un nuevo array a partir de un objeto iterable (como una cadena o un conjunto).
3.	push(): Añade uno o más elementos al final de un array y devuelve la nueva longitud del array.
4.	pop(): Elimina el último elemento de un array y lo devuelve.
5.	shift(): Elimina el primer elemento de un array y lo devuelve.
6.	unshift(): Añade uno o más elementos al principio de un array y devuelve la nueva longitud del array.
7.	splice(): Cambia el contenido de un array eliminando, reemplazando o añadiendo elementos.
8.	concat(): Combina dos o más arrays y devuelve un nuevo array.
9.	slice(): Devuelve una copia superficial de una porción de un array, sin modificar el array original.
Métodos de búsqueda y transformación:
10.	indexOf(): Devuelve el primer índice en el que se encuentra un determinado elemento, o -1 si no lo encuentra.
11.	lastIndexOf(): Devuelve el último índice en el que se encuentra un determinado elemento.
12.	includes(): Determina si un array contiene un determinado elemento.
13.	find(): Devuelve el primer elemento que cumple con la condición de la función de prueba.
14.	findIndex(): Devuelve el índice del primer elemento que cumple con la condición de la función de prueba.
15.	map(): Crea un nuevo array con los resultados de la función aplicada a cada elemento del array original.
16.	filter(): Crea un nuevo array con todos los elementos que pasen la prueba de la función dada.
17.	reduce(): Aplica una función a un acumulador y a cada elemento de un array (de izquierda a derecha), para reducirlo a un solo valor.
18.	reduceRight(): Similar a reduce(), pero procesa los elementos de derecha a izquierda.
19.	forEach(): Ejecuta una función en cada elemento de un array, pero no devuelve nada (solo efectos secundarios).
Métodos de ordenación y manipulación de elementos:
20.	sort(): Ordena los elementos de un array en su lugar.
21.	reverse(): Invierte el orden de los elementos de un array.
22.	fill(): Rellena todos los elementos de un array con un valor estático, desde un índice inicial hasta un índice final.
Métodos de comparación y prueba:
23.	every(): Determina si todos los elementos del array cumplen con una condición.
24.	some(): Determina si al menos un elemento del array cumple con una condición.
25.	includes(): Comprueba si un array contiene un elemento específico.
26.	join(): Une todos los elementos de un array en una cadena, usando un separador especificado.
Métodos de transformación de estructuras:
27.	flat(): Devuelve un nuevo array con todos los elementos de subarrays concatenados de manera recursiva.
28.	flatMap(): Similar a map(), pero luego aplica flat() al resultado.
Métodos de iteración avanzada:
29.	keys(): Devuelve un objeto Array Iterator que contiene las claves (índices) de los elementos de un array.
30.	values(): Devuelve un objeto Array Iterator que contiene los valores de los elementos de un array.
31.	entries(): Devuelve un objeto Array Iterator con pares clave-valor (índice y valor) de los elementos del array.
*/

// CREACION MANIPULACION

//Ejemplo de uso de Array.of() cra un nuevo array a partir de un objeto

const arr =Array.of(1,2,3);
console.log(arr);

// Array.from() crea un nuevo array a partir de un objeto 

const str = "Hola";
const arrFromString = Array.from(str);
console.log(arrFromString);

// push() añade uno o más elementos al final de un array

let ary = [1,2,3];
ary.push(4,8);
console.log(ary);

//pop elimina el último elemento de un array y lo devuelve

let remove = ary.pop();
console.log(ary);
console.log(remove);

// shift() elimina el primer elementos de un array y lo devuelve

let removeFirst = ary.shift();
console.log(ary);
console.log(removeFirst);

// unshift() añade uno o más elementos al principio de un array 

ary.unshift(-2,-1,0);
console.log(ary);

// splice() cambia el contenido eliminado, reemplazando o añadiendo elementos

let arraysp = [2,4,8,25];
console.log(arraysp);
arraysp.splice(2,1,10);//el primer numero es la posicion en el array, el segundo es la cantidad de elementos a eliminar y el tercero es el elemento a añadir
console.log(arraysp);

// concat() combina dos o mas arrays
let array01=[5,6,7,8];
let array02=[10,11,12,13];
let arrayConcat=array01.concat(array02);
console.log(arrayConcat);

// slice() devuelve una copia temporal de una parte del array sin modificar el original

let arrayOriginal=[1,2,3,4,5,6,7,8,9];
let arrayCopia= arrayOriginal.slice(0,4);//el primer numero es de donde empieza a extraer y el segundo es hasta donde extrae sin incluirlo
console.log("este es la copia "+arrayCopia);
console.log("este es el original "+arrayOriginal);

// ORDENAR Y MANIPULAR

// sort() ordena los elementos de un array

let arraySort=[3,7,5,1,6,4,2];
console.log("Este es el array original ",arraySort);
arraySort.sort((a,b) => a-b);//ordena los elementos de menor a mayor
console.log("Este es el array ordenado de menos a mayor ",arraySort);

// reverse() invierte el orden de los elementos de un array
let arrayReverse=["paco","pepe","luis","juan"];
console.log(arrayReverse);
arrayReverse.reverse();
console.log(arrayReverse);

// fill() rellena 

let arrayFill=[1,2];
arrayFill.fill(0,0,12); //el primer numero es el valor a rellenar, el segundo es el inicio y el tercero es el final sin incluirlo
console.log(arrayFill);

// BUSQUEDA Y TRANSFORMACION

//indexOf() devuelve el primer indice en el que se encuentra un determinado elemento o -1 si no lo encuentra

let arrayIndexOf=["pepe","paco","luis","juan"];
let indexOf=arrayIndexOf.indexOf("paco");//devuelve 1
console.log(indexOf);

function buscarPalabra(oracion,palabra){
    return oracion.toLowerCase().indexOf(palabra.toLowerCase());
}
console.log(buscarPalabra("Javascript es poderoso lenguaje","es"));//en la oracion busca "lenguaje"


//lastIndexOf() devuelve el ultimo indice en el que se encuentra un determinado elemento

//includes() determina si un array contiene un determinado elemento

//find() devuelve el primer elemento que cumple con la condicion de la funcion de prueba

//findIndex() devuelve el indice del primer elemento que cumple con la condicion de la funcion de prueba

