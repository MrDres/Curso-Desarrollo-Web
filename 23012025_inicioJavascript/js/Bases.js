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

//Reglas de nombre de variables
//No pueden empezar con numeros
//let 1variable = 25;
//No pueden tener espacios entre palabras
//let nombre completo = "Juan";
//No pueden comenzar con doble guión
//let __nombre = "Juan"; let --nombre = "Juan";
// Es case sensitive

//Operadores Aritméticos
//Suma +
//Resta -
//Multiplicacion *
//Division /
//modulo o resto %
let a = 10, b = 3; //esto es una declaracion conjunta de variables es igual a poner let a=10; let b=3;
console.log("Suma: ", a+b);
console.log("Resta: ", a-b);
console.log("Multiplicacion: ", a*b);
console.log("Division: ", a/b);
console.log("Modulo: ", a%b);

//Operadores de comparación
//evaluan relaciones 
// igualdad debil == (compara valores sin tener en cuenta el tipo de dato)
// igualdad estricta === (compara valores y tipo de dato)
// desigualdad debil != (compara valores sin tener en cuenta el tipo de dato)
// desigualdad estricta !== (compara valores y tipo de dato)
// mayor que >
// menor que <
// mayor o igual >=
// menor o igual <=

console.log(5 == "5"); //true
console.log(5 === "5"); //false

//Operadores Lógicos
// && (AND) ambas condiciones deben ser verdaderas
// || (OR) al menos una condicion debe ser verdadera
// ! (NOT) invierte el valor de una condicion

console.log(true && true); //true   
console.log(true && false); //false
console.log(true || false); //true
console.log(false || false); //false
console.log(!true); //false
console.log(!false); //true

//operadores ternarios
// es una forma abreviada de escribir una condicion -- condicion? valor_si_verdadero : valor_si_falso

let edad=20;
let mensaje=(edad>=18)? "Eres mayor de edad": "Eres menor de edad";
console.log(mensaje);