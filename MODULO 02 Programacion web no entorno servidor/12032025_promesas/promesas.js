// Una promesa son objetos que representan la terminación o el fracaso de una operación asíncrona y su valor resultante.
// Estados de la promesa:
// pending:(pendiente) Estado inicial, ni cumplida ni rechazada
// fulfilled:(completada) Operacion completada con exito
// rejected:(rechazada) Operacion completada con error

const promesa = new Promise((resolve, reject) => {
    //simulamos una operacion asincrona
    setTimeout(() => {
        const exito = true; // cambiar a false para simular un error

        if (exito) {
            resolve('La operacion fue exitosa');
        } else {
            reject('Hubo un error en la operacion');
        };
    }, 2000);
});

// then : se ejecuta cuando la promesa se cumple
// catch : se ejecuta cuando la promersa es rechazada

promesa
    .then((mensaje) => {
        console.log(mensaje);
    })
    .catch((error) => {
        console.log(error);
    });
