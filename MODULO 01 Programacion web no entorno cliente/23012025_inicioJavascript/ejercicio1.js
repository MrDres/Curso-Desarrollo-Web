// Crear un script con operadores matemáticos 

let num=5;
let num2=2;
let num3=6;
let saludo="hola";
let mensaje= saludo + "el numero es " + num;
console.log(mensaje);

function suma(a,b,c){
    return a+b+c;
}
console.log(suma(num,num2,num3));

function resta(a,b,c){
    return a-b-c;
}
console.log(resta(num,num2,num3));

function multiplicacion(a,b,c){
    return a*b*c;
}
console.log(multiplicacion(num,num2,num3));

function division(a,b){
    return a/b;
}
console.log(division(num,num2));

function modulo(a,b){
    return a%b;
}
console.log(modulo(num,num2));

//solucion profe
function realizarOperaciones(x,y){
    return{
        suma: x+y,
        resta: x-y,
        multiplicacion: x*y,
        division: y !==0 ? x/y: "No se puede dividir por cero",
        modulo: y!==0 ? x%y: "No se puede dividir por cero"
    }
}
resultado=realizarOperaciones(5,2);
console.log(resultado);

// Manipular cadenas y convertir datos

let texto="Cuando el grajo vuela bajo";
let numText="35";
console.log(texto);
console.log(numText);
console.log(texto.length);
console.log("El texto tiene ",texto.length, " letras");
texto=texto.toUpperCase();
console.log(texto);
console.log(numText);
console.log(typeof numText);
numText=Number(numText);
console.log(numText);
console.log(typeof numText);

