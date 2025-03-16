
let buscadorText = document.getElementById("buscador");
let selector = document.getElementById("filtro-categoria");
const productosAux= cargarProductos();
console.log(productosAux);


buscadorText.addEventListener("keydown", function(e){
    if (e.key === 'Enter'){    
    let textoValor=buscadorText.value;
    filtrarProductosBuscador(textoValor,aquivaelarraydeproductos);
}
})

function filtrarProductosBuscador(texto,productos){
    alert(producto)   
    alert(productos);

}



   






