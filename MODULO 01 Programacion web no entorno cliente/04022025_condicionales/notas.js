// Vamos a convertir notas en niveles usando un if anidado. Notas menos de 5 suspenso, 5-6 aprobados, 7-8 notable, 9-10 sobresaliente.
let nota;
let btn = document.getElementById('btn');
//alert("primer paso")
function decirNota() {
    //alert("abre la funcion");
    nota = document.getElementById("notasUser");
    let notaAux = nota.value.trim();
    //alert(notaAux);
    if (notaAux < 5) {
        nivel = "suspenso";
    }
    else {
        if (notaAux < 7) {
            nivel = "aprobado";
            alert(nivel);
        }
        else {
            if (notaAux < 9) {
                nivel = "notable";
            }
            else
                nivel = "sobresaliente"
        }
    } alert("El usuario tiene una nota de: " + nivel);
}
