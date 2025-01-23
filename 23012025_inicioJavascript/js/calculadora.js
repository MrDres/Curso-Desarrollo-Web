/* Escribe un programa que reciba dos numeros y un operador (+,-,*,/) para realizar la operacion correspondiente */

//Pedir el 1er numero, pedir el segundo numero, escoger que tipo de operacion y finalmente realizar la operacion y dar el resultado

let numero1=5
let numero2=3
let operador="+"
let resultado;
//flujo

switch (operador){
    case "+":
        resultado= numero1 + numero2;
        break;
    case "-":
        resultado=numero1-numero2;
        break;
    case "*":
        resultado=numero1*numero2;
        break;
    case "/":
        resultado=numero1/numero2;
        break;
    default:
        console.log("Operador no válido");
}
console.log(`El resultado es ${resultado}`);//para usar el ${variable o funcion} solo funciona en string entre comillas graves ``