/*
Script para valoracion por estrellas
Author: André Manuel Santamaría Regal
Version: 1.0
 */
let buscadorText = document.getElementById("buscador");
let selector = document.getElementById("filtro-categoria");
let chismes=[];
fetch('productos.bd.json')
    .then(response => response.json())
    .then (data=>{
        console.log("data:",data);
        chismes=data;         
        console.log(chismes);       
    })


buscadorText.addEventListener("keydown", function(e){
    if (e.key === 'Enter'){    
    let textoValor=buscadorText.value;
    let contenedorProductos = document.getElementById("productos_container");
    contenedorProductos.innerHTML = "";
    buscadorText.value="";
    filtrarProductosBuscador(textoValor,chismes);
   
    
}
})

selector.addEventListener("change", function(e){
    let textoValor= selector.value.toLowerCase();
    console.log(textoValor);
    let contenedorProductos = document.getElementById("productos_container");
    contenedorProductos.innerHTML = "";
    buscadorText.value="";
    filtrarProductosBuscador(textoValor,chismes);
})

function filtrarProductosBuscador(texto,productos){
 productos.forEach(item => {
    if (item.tipo === texto){
        mostrarProducto(item);
    }else if(texto ==="todos"){
        mostrarProducto(item);
    }else {

    }

    });
    
   
}



   






