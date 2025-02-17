document.addEventListener("DOMContentLoaded", () => {
  const contrastButton = document.getElementById("toggle-contrast");
  const increaseFontButton = document.getElementById("increase-font");
  const decreaseFontButton = document.getElementById("decrease-font");  
  const body = document.body;
  const form = document.getElementById("contact-form");
  const feedback = document.getElementById("feedback");
  const maxfontsize = 48;
  const minfontsize = 12;  
  let fontsize = 16;
  //funcion para darle alto contraste al body
  contrastButton.onclick = function highContrast() {
    body.classList.toggle("high-contrast");
  };
  //Lo mismo pero con el addEventListener
  // constrasButton.addEventListener('click', ()=>{body.classList.toggle("high-contrast");    });
  //funcion de aumento de tamaño del texto
  increaseFontButton.onclick = function increaseFont() {
    if (fontsize < maxfontsize) {
      fontsize = fontsize + 2;
      body.style.fontSize = fontsize + "px";
    }
  };
  //funcion de reduccion de tamaño del texto
  decreaseFontButton.onclick = function decreaseFont() {
    if (fontsize > minfontsize) {
      fontsize = fontsize - 2;
      body.style.fontSize = fontsize + "px";
    };
  };
//Validacion accesible del formulario
  form.addEventListener("submit", (event)=>{
    event.preventDefault();
    feedback.textContent="Formulario enviado correctamente";
  });
  //Navegacion con teclado mejorada
  document.addEventListener("keydown",(event)=>{
    if (event.key === "Tab") {
      document.activeElement.classList.add("focus-visible");
    }    
  });

  document.addEventListener("click", ()=>{
    document.querySelectorAll(".focus-visible").forEach(el=>el.classList.remove("focus-visible"));
  });

});
