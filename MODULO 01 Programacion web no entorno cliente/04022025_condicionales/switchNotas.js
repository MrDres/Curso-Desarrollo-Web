// Vamos a convertir notas en niveles usando un if anidado. Notas menos de 5 suspenso, 5-6 aprobados, 7-8 notable, 9-10 sobresaliente.
let nota;
let btn = document.getElementById('btn');
//alert("primer paso")
function decirNota() {
    //alert("abre la funcion");
    nota = document.getElementById("notasUser");
    let notaAux = parseInt(nota.value.trim());
    //alert(notaAux);
    switch(notaAux){
        case 1:
        case 2:
        case 3:
        case 4:
            alert("Suspenso");
            break;
        case 5:
        case 6:
            alert("Aprobado");
            break;
        case 7:
        case 8:
            alert("Notable");
            break;
        case 9:
        case 10:
            alert("Sobresaliente");
            break;
        default:
            alert("No has puesto nota");
            break;
    }
}
