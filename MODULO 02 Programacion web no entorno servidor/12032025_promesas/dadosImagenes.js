//funcion para simular el lanzamiento de un dado de 6 caras, usar promesas, sumar los valores. si la suma es mayor a 7 , la promesa devuelve un mensaje de exito, si la suma es menor o igual a 7, la primesa devuelve un mensaje de fallo
 const imagenCont= document.getElementById("contenedorImg");
 const btnTirar = document.getElementById("tirarDados");
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
        //let btnTirar = document.createElement("button");
        let dadoAux1= document.createElement("img");
        let dadoAux2= document.createElement("img");
        //btnTirar.textContent= "Tirar dados";
        dadoAux1.src=`assets/dados/dado-${dado1}.svg`;
        dadoAux2.src=`assets/dados/dado-${dado2}.svg`;
        dadoAux1.width=100;
        dadoAux1.height=100;
        dadoAux2.width= 100;
        dadoAux2.height=100;
        //btnTirar.onclick=nuevaTirada()
        //imagenCont.appendChild(btnTirar);
        imagenCont.appendChild(dadoAux1);
        imagenCont.appendChild(dadoAux2);

        if (suma > 7) {

            resolve(ganaste());
        } else {
            reject(perdiste());
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

function ganaste(){
    let ganar= document.createElement("img");
    ganar.src=`assets/dados/ganar.png`;
    ganar.height=100;
    ganar.width=100;
    imagenCont.appendChild(ganar);
}

function perdiste(){
    let perder= document.createElement("img");   
    perder.src=`assets/dados/perder.png`;
    perder.width=100;
    perder.height=100;
    imagenCont.appendChild(perder);
}

btnTirar.addEventListener("click", () => {
    location.reload();
});