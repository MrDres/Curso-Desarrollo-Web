// Imprimir por consola

console.log("Buenos días people");

// Operación Básica

let resultado= 5+3;
console.log("el resultado es ", resultado);
resultado=8+3;
console.log("el nuevo resultado es ", resultado);

// con dos barras se hacen los comentarios en una sola linea
/* con barra y asterisco se hacen comentarios en varias lineas */

// Variables
/* Las variables son contenedores para almacenar valores de datos. let, const, var (antigüo) */

// var: es una declaracion global actua en todo el programa, no respeta el bloque y puede sobreescribirse (declararse nuevamente)
//ejemplo con una condicional
if(true){
    var globalVar = "Soy global";
}
console.log(globalVar);

var globalVar =33;
console.log(globalVar);

// Let: tiene ambito de bloque, solo esta disponible en el bloque donde se encuentra declarada

if(true){
    let localVar = "Soy local";
    console.log(localVar);
}
//console.log(localVar); da error por llamar la variable let fuera del bloque

// const: es una declaración de ambito de bloque pero su valor no puede ser reasignada

const constante="Soy una constante";

//constante="Puedes cambiar ";

console.log(constante);

// Tipos de datos
//primitivos (numeros, enteros o decimales)
//cadena de texto (string) van entre "", '', ``
//Booleanos (true, false)
//undefined (sin valor asignado)
//vacio, nulos o inexistentes (null)

let numero=25;
console.log(typeof numero);
let texto="Hola";
console.log(typeof texto);
let booleano=true;
console.log(typeof booleano);
let indefinido; 
console.log(typeof indefinido);
let nulo=null;
console.log(typeof nulo);

//Conversiones de tipos o casting 

//implicita javascript convierte los tipos de datos de forma automatica (coercion)
//explicita el programador convierte los tipos de datos de forma manual utilizando una funcion como Number(), String(), Boolean()

//ejemplo Casting Explicito

let num1="25";
console.log(num1);
console.log(typeof num1);
let convertido=Number(num1);
console.log(convertido);
console.log(typeof convertido);