
let buscadorText = document.getElementById("buscador");
let selector = document.getElementById("filtro-categoria");
let chismes=  cargarProductos();
console.log(chismes);
buscadorText.addEventListener("keydown", function(e){
    if (e.key === 'Enter'){    
    let textoValor=buscadorText.value;
    filtrarProductosBuscador(textoValor,chismes);
}
})

function filtrarProductosBuscador(texto,producto){
    // if (producto.tipo === texto){
    //     alert("chusca")
    // }
    alert(producto)

   
}



   






