/*Crea un array booleano con dos valores 'verdadero' y 'falso'. 
Este array te sirve para traducir los valores true y false. 
El script debe mostrar un alert con el nombre verdadero si un usuario teclea un valor entre 0 y 9 y falso en el caso contrario.
Por ejemplo al teclear 10 deberá devolver falso*/

const arrayBool = ["verdadero", "falso"];
let indice;
let userValue = parseInt(prompt("Introduce un valor entre 0 y 9: "));

if (userValue < 0 || userValue > 9) {
    indice = 1;
    alert(arrayBool[indice]);
}
else {
    indice=0;
    alert(arrayBool[indice]);

}

