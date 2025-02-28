document.addEventListener("DOMContentLoaded", () => {
    const settingsButton = document.getElementById("open-settings");
    const closeButton = document.getElementById("close-settings");
    const contrastButton = document.getElementById("toggle-contrast");
    const increaseFontButton = document.getElementById("increase-font");
    const decreaseFontButton = document.getElementById("decrease-font");
    const panel = document.getElementById("accessibility-panel");
    const body = document.body;
    let fontSize = 16;
    let maxFontSize=40;
    let minFontSize=12;

    settingsButton.addEventListener("click", () => {
        abrirPanel();
    });

    closeButton.addEventListener("click", () => {
        panel.classList.remove("active");
    });

    increaseFontButton.addEventListener("click", () => {
        if (fontSize < maxFontSize) {
            fontSize = fontSize + 2;
            body.style.fontSize = fontSize + "px";
          }
    });

    decreaseFontButton.addEventListener("click", () => {
        if (fontSize > minFontSize) {
            fontSize = fontSize - 2;
            body.style.fontSize = fontSize + "px";
          }
    });

    contrastButton.addEventListener("click", () => {
        body.classList.toggle("high-contrast");
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "a" || event.key === "A") {
            abrirPanel();
            
        }
    });

    document.addEventListener("keydown", (event)=>{
        if (event.key === "Escape" || event.keyCode === 27){
            panel.classList.remove("active");
        }
    });



    function abrirPanel(){
        panel.classList.toggle("active");
        closeButton.focus();
    };
});