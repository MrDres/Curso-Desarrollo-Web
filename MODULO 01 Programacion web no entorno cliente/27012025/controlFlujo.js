/**Control del flujo */
/**Ejecutar insrucciones ordenadas (Secuenciales)
 *  Tomar decisiones (CONDICIONALES)
 *  Repetir los bloques de código (BUCLES)
*/
/**
 * Receta de cocina
 * 1. Reviso si tengo ingredientes, lavo, corot, pelo...(SECUENCIA)
 * 2. Si falta algún ingrediente, decido si puedo sustituirlo o no. (CONDICIONAL)
 * 3. Revuelvo la mezcla, horno ....ejemplo 3 veces. (BUCLE) *
 */
/**
 * Pseudocódigo --ordenar, decidir y repetir --
 * Saber si el usuario es mayor de edad o no
 * Inicio:
 *  Leer edad del usuario
 *  Si edad es >= 18 entonces
 *      Mostrar "Eres mayor de edad"
 *  sino
 *      Mostrar "Eres menor de edad"
 *  fin
 */
/**Estructura secuencial */
//Instrucciones linea a linea
/**
 * Vida diaria
 * 1. Me levanto de la cama
 * 2. Cepillar dientes
 * 3. Desayunar
 */
//Estrucrura secuencial
//Área rectángulo
// let base = 5;
// let altura = 10;
// let area = base * altura;
// console.log("El área del rectangulo es: " + area);
/**
 * Solicitar dos números al usuario
 * Calcular la suma
 * Mostrar el resultado en consola
 */

/**
let numero1 = parseInt(prompt("Introduzca el primer número: "));
let numero2 = parseInt(prompt("Introduzca el segundo número: "));
let suma = numero1 + numero2;
console.log("La suma de los números es: ", suma);*/
//Como NO FUNCIONA, lo pasamos a un HTML

/**
 * CONDICIONALES
 * Toma de decisiones
 * Dependiendo de una condición se ejecuta un bloque de código u otro.
 * Estructura básica:
 *
 * if(condición){
 *  //código que se ejecuta si la condición es verdadera
 * }else if(otra condición){
 * //Código que se ejecuta si la primera es falsa, pero esta es verdadera
 * }
 *  else{
 *   //Condición que se ejecuta si ninguna de las anteriores es verdadera
 * }
 *
 */

// let numero = parseInt(prompt("Introduce un número: "));
// If(numero > 0){
//     console.log("El número es positivo");
// } else if (numero < 0) {
//     console.log("El número es negativo");
// } else {
//     console.log("El número es cero");
// }

//AÑÑO BISIESTO

// let year = parseInt(prompt("Introduzca los dias del año"));
// if ((year / 4 == 0 && year / 100 !== 0) || year / 400 === 0) {
//     console.log("El año es bisiesto");
// } else {
//     console.log("El año NO es bisiesto")
// }

// let numero = parseInt(prompt("Introduce un número: "));
// console.log(
//     numero > 0 ? "Psitivo" : numero < 0 ? "numero negativo" : "cero"
// );

//Bucle
/**Repite bloque código mientras se cumpla la condición */

//FOR
/**
 * Iteracciones controladas
 */

console.log("FOR");
for (let i = 1; i <= 5; i++) {
    console.log("Número: ", i);

}
//WHILE
/**
 * Condición antes de ejecutar el código
 */

console.log("WHILE");
let i = 1;
while (i <= 5) {
    console.log("Número: ", i);
    i++;
}

// DO WHILE
/**
 * Ejecuta el código al menos una vez
 */
// console.log("DO WHILE");
// let j = 1;
// do {
//     console.log("Número: ", j);
//     j++;
// } while (j <= 5);

///TABLA DE MULTIPLICAR DEL NÚMERO QUE META EL USUARIO
///fIBONACCI HASTA EL 40