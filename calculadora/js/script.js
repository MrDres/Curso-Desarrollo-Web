document.addEventListener("DOMContentLoaded", function () {
  window.agregar = agregar;
  window.operar = operar;
  window.calcular = calcular;
  window.limpiar = limpiar;
  
  let pantalla = document.getElementById("pantallaCalculadora");

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
});
