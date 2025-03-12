//funcion para simular el lanzamiento de un dado de 6 caras, usar promesas, sumar los valores. si la suma es mayor a 7 , la promesa devuelve un mensaje de exito, si la suma es menor o igual a 7, la primesa devuelve un mensaje de fallo

//funcion lanzarDado
function lanzarDado() {
    return Math.floor(Math.random() * 6) + 1;
};


//funcion que devuelve una promesa para lanzar dos dados y sumar sus valores
function lanzarDados() {
    //Se crea una promesa que recibe dos parametros resolve y reject
    return new Promise((resolve, reject) => {
        const dado1 = lanzarDado();
        const dado2 = lanzarDado();
        const suma = dado1 + dado2;
        console.log(`Dados: ${dado1} y ${dado2}`);
        console.log(`Suma: ${suma}`);
        if (suma > 7) {
            resolve('All right');
        } else {
            reject('Perdiste');
        }
    })
}
//uso de la promesa
lanzarDados()
    .then((resultado) => {
        console.log(resultado);
    })
    .catch((error) => {
        console.log(error);
    });

