// Array con la galeria de imagenes
const images = ["https://picsum.photos/600/400?text=Imagen+1", "https://picsum.photos/600/400?text=Imagen+2", "https://picsum.photos/600/400?text=Imagen+3", "https://picsum.photos/600/400?text=Imagen+4", "https://picsum.photos/600/400?text=Imagen+5", "https://picsum.photos/600/400?text=Imagen+6"];

//Obtener elementos del DOM
//galeria, modal, modalImage, close, next, prev

const galeria = document.getElementById("galeria");
const modal = document.getElementById("modal");
const modalImage = document.getElementById("idModalImage");
const closeBtn = document.getElementById("close");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

let currentIndex = 0; // Indice de la imagen actual

crearGaleria();
// Creamos la funcion de la galería

function crearGaleria() {
    for (let i = 0; i < images.length; i++) {
        const img = document.createElement("img");
        img.src = images[i];
        img.alt = `Imagen ${i + 1}`;
        img.addEventListener('click', () => openModal(i));
        galeria.appendChild(img);
    };

    function openModal(index) {
        currentIndex = index;
        modalImage.src = images[currentIndex];
        modal.style.display = "flex";
    };

    // Funcion para cerrar el modal

    function closeModal() {
        modal.style.display = "none";
    };

    function prevImg() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = images.length - 1; // Volver al final i es la primera imagen
        }
        modalImage.src = images[currentIndex];
    };

    function nextImg() {
        if (currentIndex < images.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        modalImage.src = images[currentIndex];
    };

    //Eventos de los botones close, prev, next (EventListener)
    closeBtn.addEventListener('click', closeModal);
    prevBtn.addEventListener('click', prevImg);
    nextBtn.addEventListener('click', nextImg);
    //Cerrar el modal al hacer click fuera de la imagen
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });
    //iniciamos la galeria

};