document.addEventListener("DOMContentLoaded", function () {
  //Uso el metodo window para hacer visibles globalmente las funciones para que puedan ser llamadas desde el html con el onclick
  window.agregar = agregar;
  window.operar = operar;
  window.calcular = calcular;
  window.limpiar = limpiar;

  let pantalla = document.getElementById("pantallaCalculadora");
  //Array con productos
  const productos = [
    { nombre: "Producto 1", cantidad: 10, precio: 10},
    { nombre: "Producto 2", cantidad: 10, precio: 15},
    { nombre: "Producto 3", cantidad: 10, precio: 7},
    { nombre: "Producto 4", cantidad: 10, precio: 5},
    { nombre: "Producto 5", cantidad: 10, precio: 5},
    { nombre: "Producto 6", cantidad: 10, precio: 5},
    { nombre: "Producto 7", cantidad: 10, precio: 5},
    { nombre: "Producto 8", cantidad: 10, precio: 5},
    { nombre: "Producto 9", cantidad: 10, precio: 5},
    { nombre: "Producto 10", cantidad: 10, precio: 5},
    { nombre: "Producto 11", cantidad: 10, precio: 5},
    { nombre: "Producto 12", cantidad: 10, precio: 5}
  ];
  //Array con categorias
  const categorias = [
    { nombre: "Refresco", url: "assets/img/refrescos.jpg"},
    { nombre: "Cervezas", url: "assets/img/cerveza.jpg"},
  ];
  

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
