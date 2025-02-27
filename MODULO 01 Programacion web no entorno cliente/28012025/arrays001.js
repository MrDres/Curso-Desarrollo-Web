//Array: Me permite almacenar múltiples valores en una sóla variable.
//Son una lista ordenada
//Comienzan las posiciones por 0,1,2..
const num = [1, 2, 3, 4, 5];
console.log(num[2]);

const coches = ["Toyota", "Ford", "Seat", "Peugot"];
console.log(coches);
console.log("Posición que NO existe");
console.log(coches[5]);//Posición qeu no existe
console.log("Posición que SI existe");
console.log(coches[3]);
console.log("Agrego un nuevo elemento, PUSH");
coches.push("Fiat");
console.log(coches);
coches.push("Ferrari", "Audi");
console.log(coches);
console.log("Eliminar el último elemento, POP");
coches.pop();
console.log(coches);
console.log("Eliminar primer elemento, SHIFT");
coches.shift();
console.log(coches);
console.log("Agrego un nuevo elemento primero,UNSHIFT");
coches.unshift("BMW");
console.log(coches);
//Métodos funcionales
//Operaciones básicas
//MAP(crea nuevo array aplicando función a cada elemento)
console.log("MAP, FUNCIÓN FLECHA");
const numeros = [1, 2, 3, 4, 5];
const cuadrados = numeros.map(num => num * num);//Recoge los números del array
console.log(cuadrados);

//FILTER, nuevo array con los elementos que cumplen una condición específica
console.log("FLECHA, FUNCIÓN FLECHA");
const edades = [6, 15, 20, 23, 34, 46];
const mayorEdad = edades.filter(edad => edad <= 18);
console.log(mayorEdad);

//REDUCE() aplica una función acumuladora de cada elemento y devuelve un único valor
console.log("REDUCE()");
const numeros2 = [1, 3, 6, 8, 9, 15, 19];
const producto = numeros2.reduce((acumulado, num) => acumulado * num, 0);//El 0 es el valor inicial del acumulador
console.log(producto);
const producto2 = numeros2.reduce((acumulado, num) => acumulado * num, 1);//El 1 es el valor inicial del acumulador
console.log(producto2);
const suma = numeros2.reduce((acumulado, num) => acumulado + num, 0);//El 0 es el valor inicial del acumulador
console.log(suma);

//Crea un array de objetos representando productos con propiedades como nombre y precio
//Usar map para obtener el array de sólo precios
//filter : filtrar productos con precio mayor a 20 euros
//reduce para obtener la suma total de los precios

const productos = [
    { nombre: "Camisa", precio: 20 },
    { nombre: "Pantalón", precio: 35 },
    { nombre: "Jersey", precio: 26 },
    { nombre: "Pijama", precio: 12 },
    { nombre: "Bañador", precio: 6 },
];
console.log("MAP");
console.log(productos);
const precios = productos.map(precioExacto => precioExacto.precio);
console.log("Precios", precios);
console.log("Precios mayores que 20, FILTER");
const mayor20 = productos.filter(mayor => mayor.precio >= 20);
console.log(mayor20);
console.log("Suma total precios | REDUCE");
const sumas = productos.reduce((acumulado, num) => acumulado + num.precio, 0);//El 0 es el valor inicial del acumulador
console.log(sumas);





