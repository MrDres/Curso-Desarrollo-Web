/*
Script para valoracion por estrellas
Author: André Manuel Santamaría Regal
Version: 1.0
 */

document.addEventListener('DOMContentLoaded', function () {
    const stars = document.querySelectorAll('.star');
    stars.forEach(star => {
        star.addEventListener('click', function () {
            const value = this.getAttribute('data-value');
            const ratingContainer = this.parentElement;

            //Resetea las estrellas
            ratingContainer.querySelectorAll('.star').forEach(s => {
                s.classList.remove('active');
            });
            //Activa las estrelllas una a una al hacer click
            for (let i = 0; i < value; i++) {
                ratingContainer.querySelector(`.star[data-value="${i + 1}"]`).classList.add('active');                

            }
            console.log(`Valoracion: ${value} estrellas`);

        });
    });

});