// Funciones es un bloque reutilizable de codigo que realiza una tarea
//Sintaxis básica 

// function nombreFuncion(param1, param2){
//     //Cuerpo de la funcion
//     return param1 + param2;
// }

// parametro: son valores que pasan a la funcion llamada
// valores de retorno: Resultado devuelto por eso funcion

// function suma (a,b){
// return a*b;
// }
// console.log(suma(5,3));

//funcion anonima y funciones flecha
//funcion anonima: No tiene un nombre explicito pero se le asignan variables o se le asignan argumentos

// const saludo= function(nombre){
//     return `Hola ${nombre}`;
// }
// console.log(saludo("ana"));

//Funciones flecha ES6 arrow functions

// ambito local o global
// global las variables son accesibles en todo el programa
// local  las variables estan definidas dentro de una funcion y no son accesibles fuera de ellas

// let globalVar = "Soy global";

// function ejemplo(){
//     let localVar="Soy local";
//     console.log(globalVar);
//     console.log(localVar);
// }

// console.log(ejemplo);

// ambito de bloque let y const

// if(true){
//     let bloqueVar="ambito bloque";
//     console.log(bloqueVar);
// }
// console.log(bloqueVar)

// cierre de las funciones (closures) -- Un cierre de una funcion ocurre cuando una funcion interna recuerda y accede a las diferentes vriables de su entorno

function contador(){
    let cuenta=0;
    return function(){
        cuenta++;
        return cuenta;
    };
}

const incrementar = contador();
console.log(incrementar());
console.log(incrementar());
console.log(incrementar());
console.log(incrementar());