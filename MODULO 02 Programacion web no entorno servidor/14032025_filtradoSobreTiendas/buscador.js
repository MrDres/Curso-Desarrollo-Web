
let buscadorText = document.getElementById("buscador");
let selector = document.getElementById("filtro-categoria");

buscadorText.addEventListener("keydown", function(e){
    if (e.key === 'Enter'){    
    let textoValor=buscadorText.value;
    filtrarProductosBuscador(textoValor,chismes);
}
})

function filtrarProductosBuscador(producto){
    alert(producto)   
    alert(productos);

}



   






