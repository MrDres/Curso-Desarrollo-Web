document.addEventListener("DOMContentLoaded", () => {
    const contrastButton = document.getElementById("toggle-contrast");
    const increaseFontButton = document.getElementById("increase-font");
    const decreaseFontButton = document.getElementById("decrease-font");
    const body = document.body;
    const form = document.getElementById("contact-form");
    const feedback = document.getElementById("feedback");

    //contrastButton.addEventListener('click', highContrast());

    //function highContrast(){
    //    body.classList.add('high-contrast');
    //};

    contrastButton.addEventListener("click", () => {
        body.classList.toggle("high-contrast");
    });
    //function incrementarFuente(){
    //    body.fontsize
    //}
    increaseFontButton.addEventListener("click", ()=>{
        let tamañoLetra=16;
        tamañoLetra+=2;
        document.documentElement.style.fontSize = `${tamañoLetra}rem`;
    });




});