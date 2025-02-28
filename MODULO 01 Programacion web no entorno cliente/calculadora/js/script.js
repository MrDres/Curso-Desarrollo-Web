document.addEventListener("DOMContentLoaded", function () {
  //Uso el metodo window para hacer visibles globalmente las funciones para que puedan ser llamadas desde el html con el onclick
  window.agregar = agregar;
  window.operar = operar;
  window.calcular = calcular;
  window.limpiar = limpiar;

  let pantalla = document.getElementById("pantallaCalculadora");
  const tablaCarrito = document.getElementById("tablaCarrito");
  const  pagar = document.getElementById("pagarPedido");
  //Array con productos
  const productos = [
    { nombre: "La Casera", cantidad: 10, precio: 10, url: "assets/img/lacasera.png", categoria: "Refresco" },
    { nombre: "Fanta", cantidad: 10, precio: 15, url: "assets/img/fanta.jpg" },
    { nombre: "Fanta Limon", cantidad: 10, precio: 7, url: "assets/img/fantalimon.jpg", categoria: "Refresco" },
    { nombre: "Agua Vichy", cantidad: 10, precio: 5, url: "assets/img/vichy-catalan.jpg", categoria: "Agua" },
    { nombre: "Red Bull", cantidad: 10, precio: 6, url: "assets/img/redBull.png", categoria: "Refresco" },
    { nombre: "Producto 6", cantidad: 10, precio: 5, url: "assets/img/refrescos.jpeg", categoria: "Refresco" },
    { nombre: "Producto 7", cantidad: 10, precio: 5, url: "assets/img/refrescos.jpeg", categoria: "Refresco" },
    { nombre: "Producto 8", cantidad: 10, precio: 5, url: "assets/img/refrescos.jpeg", categoria: "Refresco" },
    { nombre: "Producto 9", cantidad: 10, precio: 5, url: "assets/img/refrescos.jpeg", categoria: "Refresco" },
    { nombre: "Producto 10", cantidad: 10, precio: 5, url: "assets/img/refrescos.jpeg", categoria: "Refresco" },
    { nombre: "Producto 11", cantidad: 10, precio: 5, url: "assets/img/refrescos.jpeg", categoria: "Refresco" },
    { nombre: "Producto 12", cantidad: 10, precio: 5, url: "assets/img/refrescos.jpeg", categoria: "Refresco" },
    { nombre: "Producto 13", cantidad: 10, precio: 5, url: "assets/img/refrescos.jpeg", categoria: "Refresco" },
    { nombre: "Producto 14", cantidad: 10, precio: 5, url: "assets/img/refrescos.jpeg", categoria: "Refresco" },
    { nombre: "Producto 15", cantidad: 10, precio: 5, url: "assets/img/refrescos.jpeg", categoria: "Agua" },
    { nombre: "Producto 16", cantidad: 10, precio: 5, url: "assets/img/refrescos.jpeg", categoria: "Cervezas" },
    { nombre: "Producto 17", cantidad: 10, precio: 5, url: "assets/img/refrescos.jpeg", categoria: "Cafes" },
    { nombre: "Producto 18", cantidad: 10, precio: 5, url: "assets/img/refrescos.jpeg", categoria: "Cafes" }
  ];
  //Array con categorias
  const categorias = [
    { nombre: "Refresco", url: "assets/img/refrescos.jpeg" },
    { nombre: "Cervezas", url: "assets/img/cerveza.jpg" },
    { nombre: "Agua", url: "assets/img/agua.jpg" },
    { nombre: "Cafes", url: "assets/img/cafes.jpg" },
    { nombre: "Whiskeys", url: "assets/img/whiskeys.jpg" },
    { nombre: "Vinos", url: "assets/img/vinos.jpg" },
    { nombre: "Bocadillos", url: "assets/img/bocadillos-VP.jpg" },
    { nombre: "Tapas", url: "assets/img/tapas.jpg" },
    { nombre: "Platos", url: "assets/img/platos.webp" },
    { nombre: "Desayunos", url: "assets/img/desayunos_1600x900.jpg"},
    { nombre: "Licores", url: "assets/img/licores.jpg"}
  ];

  
  cargarCategorias(categorias);
  cargarProductos(productos);

  

  // Llamar a la función para actualizar la hora cuando la página se carga
  actualizarHora();

  // Actualizar la hora cada segundo
  setInterval(actualizarHora, 1000);





  // Inicio de las funciones de la calculadora
  function agregar(valor) {
    pantalla.value += valor;
  }

  function operar(operador) {
    pantalla.value += operador;
  }

  function calcular() {
    //La funcion eval lo que hace es recibir una cadena de texto y lo ejecuta como si fuera código
    pantalla.value = eval(pantalla.value);
  }

  function limpiar() {
    pantalla.value = "";
  }
  //Fin de las funciones de la calculadora

  // Función para obtener la hora actual y actualizar el contenido de la etiqueta fechaHoraLbl
  function actualizarHora() {
    const fechaHoraLbl = document.getElementById("fechaHoraLbl");
    const ahora = new Date();
    const dia = ahora.getDate().toString().padStart(2, "0");
    const mes = (ahora.getMonth() + 1).toString().padStart(2, "0"); // Los meses empiezan desde 0
    const año = ahora.getFullYear();
    const hora = ahora.getHours().toString().padStart(2, "0");
    const minutos = ahora.getMinutes().toString().padStart(2, "0");
    const segundos = ahora.getSeconds().toString().padStart(2, "0");
    fechaHoraLbl.textContent = `${dia}/${mes}/${año} ${hora}:${minutos}:${segundos}`;
  }
});

//Funcion cargar categorias
function cargarCategorias(elemento) {
  for (let i = 0; i < elemento.length; i++) {
    //creamos el div que contendra todo el contenido
    let item = document.createElement("div");
    item.className = "itemCategorias";
    //creamos la etiqueta de la imagen
    let imagen = document.createElement("img")
    imagen.className = "imagenCategorias";
    imagen.src = elemento[i].url;
    imagen.alt = elemento[i].nombre;
    //creamos el texto de la categoria
    let texto = document.createElement("p");
    texto.className = "textoCategorias";
    texto.textContent = elemento[i].nombre;
    //creamos un boton de añadir carrito
    let botonFiltrar = document.createElement("button");
    botonFiltrar.className = "btnFiltrar";
    botonFiltrar.textContent = "Pulsar para filtrar";
    //añadimos la imagen y el texto al div y el boton
    item.appendChild(imagen);
    item.appendChild(texto);
    item.appendChild(botonFiltrar);
    //añadimos el div al contenedor
    contenedorCategorias.appendChild(item);
  }
};

function cargarProductos(elemento){
  for (let i=0; i<elemento.length; i++){
    //creamos el div que contendra todo el contenido
    let item = document.createElement("div");
    item.className = "itemProductos";
    //creamos la etiqueta de la imagen
    let imagen = document.createElement("img")
    imagen.className = "imagenProductos";
    imagen.src = elemento[i].url;
    imagen.alt = elemento[i].nombre;
    //creamos el texto de la categoria
    let texto = document.createElement("p");
    texto.className = "textoProductos";
    texto.textContent = elemento[i].nombre;
    //creamos un boton de añadir carrito
    let botonAñadir = document.createElement("button");
    botonAñadir.className = "btnAñadir";
    botonAñadir.textContent = "Añadir Carrito";
    //pasamos los datos a la funcion añadirCarrito
    botonAñadir.onclick = function(){
      añadirCarrito(elemento[i].nombre, 1, elemento[i].precio);
    }    
    //añadimos la imagen y el texto al div y el boton
    item.appendChild(imagen);
    item.appendChild(texto);
    item.appendChild(botonAñadir);
    //añadimos el div al contenedor
    contenedorProductos.appendChild(item);  
  }
}

function añadirCarrito(nombre, cantidad, precio){
  let fila= document.createElement("tr");
  let celdaArticulo = document.createElement("td");
  let celdaBoton = document.createElement("td");
  let celdaUnidades = document.createElement("td");
  let celdaPrecio = document.createElement("td");
  let celdaTotal = document.createElement("td");
  let botonEliminar = document.createElement("button");
  botonEliminar.textContent = "Eliminar";
  botonEliminar.className = "btnEliminarFila";
  botonEliminar.onclick = function(){
    fila.remove();
  };
  celdaArticulo.textContent = nombre;
  celdaPrecio.textContent = precio;
  celdaUnidades.textContent = cantidad;
  celdaTotal.textContent = eval(celdaPrecio.textContent * celdaUnidades.textContent);
  fila.appendChild(celdaArticulo);
  fila.appendChild(celdaBoton);
  celdaBoton.appendChild(botonEliminar);
  fila.appendChild(celdaUnidades);
  fila.appendChild(celdaPrecio);
  fila.appendChild(celdaTotal);  
  tablaCarrito.appendChild(fila);
};

pagar.addEventListener('click', ()=>{ 
  let total = 0;
  let filas = tablaCarrito.rows;
  for (let i=1; i<filas.length; i++){
    total += eval(filas[i].cells[4].textContent);
  }
  alert("El total de la compra es: " + total);
  while (tablaCarrito.rows.length > 1){
    tablaCarrito.deleteRow(1);
  }
});
 



