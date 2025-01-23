// Esto es un comentario para una linea

/* Esto es para comentarios para varias lineas

bla bla bla
bla bla bla
*/

//Buenos dias people
console.log("Buenos días people");

//Variable
/*
var: es una declaracion global (actualmento no es recomendado su uso)
let: es una declaracion en bloque
const: es una declaracion en bloque para valores constantes
*/

var nombre = "Juan";
let edad = 25;
const pi = 3.1416;

/* son diferentes "25" que 25, el primero es un string el otro un numero */

if(true){
    var x = 10;
    let y = 20;
}

console.log(x);// esto va a funciona porque var no respeta el bloque
//console.log(y);// Error porque let no respeta el bloque

//Tipos de datos
/*  Numéricos Enteros (45) y decimales (13.43) float
    Cadenas de texto (string) se escriben entre comillas "" dobles o simples '', en algunos casos comillas graves ` `
    Booleanos: (true, false)
    undefined: (sin valor asignado) indefinido
    Null: valor vacio intencionado */

//Conversiones de tipos o casting
let numero = "250";
let convertir = Number(numero);
console.log(convertir)
console.log(typeof convertir) //para saber el tipo de dato se usa typeof
console.log(5 == "5")
console.log(5 === "5")

//Operadores

//aritméticos
/* Sumas (+), restas (-), multiplicacion (*), division (/), resto o modulo (%), exponenciacion  (**)
*/

let a = 10, b = 3;
console.log(a%b); //resto 1
console.log(a**b); // expo 1000

//Operadores lógicos
// &&(AND),  || (OR), !(NOT)

let x = true, y= false;
console.log( x&&y); //false
console.log( x||y); //true
console.log(!x); //false