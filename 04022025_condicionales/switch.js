
let dia = prompt("Introduce un numero del 1 al 7: ");
//let diaAux=parseInt(dia);
let diaAux=+dia;
if (Number.isInteger(diaAux)){
    alert("All right");
    switch (diaAux) {
        case 1:
            alert("Lunes");
            break;
        case 2:
            alert("Martes");
            break;
        case 3:
            alert("Miércoles");
            break;
        case 4:
            alert("Jueves");
            break;
        case 5:
            alert("Viernes");
            break;    
        default:
            alert("Fin de semana")
    }
    
}
else{
    alert("No metas decimales");
    location.reload();
}
