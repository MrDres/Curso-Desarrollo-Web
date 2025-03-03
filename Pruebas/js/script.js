document.addEventListener("DOMContentLoaded", function () {
  const addTareaBtn = document.getElementById("addTareaBtn");
  const tareaText = document.getElementById("inputTarea");
  const listaTareas = document.getElementById("listUl");
  const contrasteBtn = document.getElementById("contrasteBtn");
  const aumentarTexto = document.getElementById("aumTextoBtn");
  const disminuirTexto = document.getElementById("dismTextoBtn");
  const body = document.body;

  addTareaBtn.addEventListener("click", añadirTarea);

  function añadirTarea() {
    let texto = tareaText.value.trim();
    if (texto !== "") {
      const fila = document.createElement("li");
      const completarBtn = document.createElement("button");
      const eliminarBtn = document.createElement("button");
      completarBtn.textContent = "Completar";
      completarBtn.className = "completarBtn";
      eliminarBtn.textContent = "Eliminar";
      eliminarBtn.className = "eliminarBtn";
      fila.textContent = texto;
      fila.className = "tareaLi";
      listaTareas.appendChild(fila);
      listaTareas.appendChild(completarBtn);
      listaTareas.appendChild(eliminarBtn);
      tareaText.value = "";
    } else alert("no se puede dejar en blanco");
  }

  eliminarBtn.addEventListener("click", ()=>{
    
  })
  contrasteBtn.addEventListener("click", function() {
    body.classList.toggle("altoContraste");
  });

  aumentarTexto.addEventListener("click", function() {
    body.style.fontSize = "4.5rem";
    
  });

  disminuirTexto.addEventListener("click", function() {
    body.style.fontSize = "1rem";
  });

  document.addEventListener("keyup", (ev) => {
    if (ev.key === "Enter") {
      añadirTarea();
    }
  });
});
