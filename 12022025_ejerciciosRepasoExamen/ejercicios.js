//Ejercicios arrays realizado por André Manuel Santamaría Regal

/*1. Dado el siguiente array de números enteros:
const arr = [1, 2, 3, 4, 5];
Escribe un código en JavaScript que recorra el array utilizando un bucle for y muestre en la consola
únicamente los números pares contenidos en él.*/

const arr1 = [1,2,3,4,5];

for(let i=0; i<arr1.length;i++ ){
    if(arr1[i]%2==0){
        console.log("Ejercicio 1. El elemento "+i+" (ten en cuenta que los array empiezan en el elemento 0) del array es par y su valor es: "+arr1[i]);
    };
};

/*2. Dado el siguiente array de números enteros:
const arr = [10, 20, 30];
Escribe un código en JavaScript que utilice un bucle for para recorrer el array y calcular la suma de todos
sus elementos. Al finalizar, muestra el resultado en la consola.*/

const arr2 = [10,20,30];
let suma=0;
for(let i=0; i<arr2.length; i++){    
    suma= suma + arr2[i];
};
console.log('Ejercicio 2. La suma de todos los elementos del array es: '+suma);

/*3. Dado el siguiente array de números enteros:
const arr = [1, 2, 3, 4, 5];
Escribe un código en JavaScript que utilice un bucle for para recorrer el array e imprimir sus elementos en la
consola. Sin embargo, el recorrido debe detenerse cuando el índice sea igual a 2, utilizando la instrucción
break.*/

const arr3 = [1, 2, 3, 4, 5];
for(let i =0; i<arr3.length;i++){
    console.log("Ejercicio 3."+ arr3[i]);
    if(i===2){        
        break;
    };
};

/*4. Dado el siguiente array de números enteros:
const arr = [1, 2, 3, 4, 5];
Escribe un código en JavaScript que utilice un bucle for para recorrer el array y almacenar en un nuevo array
únicamente los números mayores que 2. Finalmente, muestra el nuevo array en la consola*/

const arr4= [1,2,3,4,5];
let arrayAux=[];
for(i=0; i<arr4.length;i++){
    if(arr4[i]>2){        
        arrayAux.push(arr4[i]);
    }    
}console.log("Ejercicio 4. "+arrayAux);

/*5. Dado el siguiente array de números enteros:
const arr = [1, 2, 3, 4, 5];
Escribe un código en JavaScript que utilice un bucle for para recorrer el array y contar cuántos números
impares hay en él. Muestra el resultado en la consola.*/

const arr5 = [1, 2, 3, 4, 5];
let contador=0;
for(i=0; i<arr5.length;i++){
    if(arr1[i] %2 !=0){
        contador++;
    };
}console.log("Ejercicio 5. " +contador);

/*6. Dado el siguiente array de números enteros:
const arr = [1, 2, 3, 4, 5];
Escribe un código en JavaScript que utilice un bucle for para recorrer el array e imprimir sus elementos en la
consola. Sin embargo, cuando el valor del elemento sea 3, el bucle debe saltar a la siguiente iteración
utilizando la instrucción continue.*/

const arr6 = [1, 2, 3, 4, 5];
for (let i=0; i<arr6.length;i++){
    if (arr6[i] === 3){
        continue;
    }console.log("Ejercicio 6. "+arr6[i]);
}
/*7. Dado el siguiente array de números enteros:
const arr = [1, 2, 3, 4, 5];
Escribe un código en JavaScript que utilice un bucle for para recorrer el array con un paso de 2 (saltando de
dos en dos) y almacenar los elementos en un nuevo array. Muestra el nuevo array en la consola.*/

const arr7 = [1, 2, 3, 4, 5];
let arrAux=[];
for(let i=0; i<arr7.length;i++){
    if(i%2===0){
        arrAux.push(arr7[i]);
    };
}console.log("Ejercicio 7. "+ arrAux);

/*8. Dado el siguiente arreglo de números enteros:
const arr = [1, 2, 3, 4, 5];
Escribe un código en JavaScript que utilice un bucle for para recorrer el arreglo y calcular la suma de los
números pares contenidos en él. Muestra el resultado de la suma en la consola.*/

const arr8 = [1, 2, 3, 4, 5];
let sumaPares=0;
for(let i=0; i<arr8.length;i++){
    if(arr8[i] %2 ===0){
        sumaPares= sumaPares+arr8[i];
    };
}console.log("Ejercicio 8. "+sumaPares);